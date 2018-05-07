const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validateClassObj } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');
const { addActivityLog } = require('../util/activityLog');

module.exports.updateClass = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events
  const authToken = event.requestContext.authorizer.claims;
  const userId = authToken['custom:userId'];
  const routeParams = event.pathParameters;
  const data = JSON.parse(event.body);

  if (validateClassObj(data)) {

    dbConnect(db => {
      db.collection('classes').findOneAndUpdate(
        { _id: objectId(routeParams.classId) },
        { $set: data }
      )
        .then(updateResult => {
          const response = makeResponse({ success: true, message: 'Class update successful', classObj: updateResult.value }, 200);
          callback(null, response);
        })
        .catch((err) => {
          const response = makeResponse({ success: false, err }, 400);
          callback(null, response);
        })
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};