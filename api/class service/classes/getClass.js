const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validate_id } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');

module.exports.getClass = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const authToken = event.requestContext.authorizer.claims;
  const userId = authToken['custom:userId'];

  const data = event.pathParameters;

  if (validate_id(data.classId)) {
    dbConnect(db => {
      db.collection('classes')
        .findOne({ _id: objectId(data.classId) })
        .then((classObj) => {
          const response = makeResponse({ success: true, classObj }, 200);
          callback(null, response);
        })
        .catch((err) => {
          const response = makeResponse({ success: false, err }, 400);
          callback(null, response);
        })
    })s
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};