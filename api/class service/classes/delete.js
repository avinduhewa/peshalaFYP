const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { makeResponse } = require('../util/response-creator');
const { validate_id } = require('../util/object-validator');
const { addActivityLog } = require('../util/activityLog');

module.exports.deleteClass = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const authToken = event.requestContext.authorizer.claims;
  const userId = authToken['custom:userId'];

  const data = event.pathParameters;
  const params = JSON.stringify(event.body);

  if (validate_id(data.classId)) {
    dbConnect(db => {

      db.collection('classes').updateOne(
        { _id: objectId(data.classId) },
        { $set: { state: 'inactive' } }
      )
        .then(updateResult => {
          const response = makeResponse({ success: true, message: 'Class deletion successful', class: data }, 200);
          callback(null, response);
        })
        .catch(err => {
          const response = makeResponse({ success: false, message: "Class deletion failed", err }, 400);
          callback(null, response);
        })
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};
