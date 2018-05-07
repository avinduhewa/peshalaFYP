const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validate_id } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');

module.exports.getAllUsers = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const data = event.pathParameters;

  if (validate_id(data.orgId)) {
    dbConnect(db => {
      return db.collection('users')
        .find({ organisations: data.orgId })
        .toArray()
        .then((users) => {
          const response = makeResponse({ success: true, users }, 200);
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