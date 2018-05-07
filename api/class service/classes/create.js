const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { makeResponse } = require('../util/response-creator');
const { validateClassObj } = require('../util/object-validator');
const { generateClassObj, generateTaskObj } = require('../util/generator');
const { addActivityLog } = require('../util/activityLog');

module.exports.createClass = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const authToken = event.requestContext.authorizer.claims;
  const userId = authToken['custom:userId'];
  const data = JSON.parse(event.body);

  if (validateClassObj(data)) {
    dbConnect(db => {

      const classObj = generateClassObj(data);

      db.collection('classes').insert(classObj);

      db.collection('users').updateOne(
        { _id: objectId(userId) },
        { $push: { classs: classObj._id.toString() } }
      )
        .then(updateResult => {
          const response = makeResponse({ success: true, message: 'Class creation successful', classObj }, 200);
          callback(null, response);
        })
        .catch(err => {
          const response = makeResponse({ success: false, message: "User update failed", err }, 400);
          callback(null, response);
        })
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};
