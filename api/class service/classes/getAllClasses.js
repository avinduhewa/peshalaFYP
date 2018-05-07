const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validate_id } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');

module.exports.getAllClasses = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const authToken = event.requestContext.authorizer.claims;
  const userId = authToken['custom:userId'];

  const data = event.pathParameters;

  if (validate_id(data.orgId)) {
    dbConnect(db => {
      db.collection('classes')
        .find({ userId: userId })
        .toArray()
        .then((classes) => {
          const response = makeResponse({ success: true, classes }, 200);
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