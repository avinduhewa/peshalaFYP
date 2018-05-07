const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validate_id } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');

module.exports.getUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const data = event.pathParameters;

  if (validate_id(data.userId)) {
    dbConnect(db => {
      db.collection('users')
        .findOne({ _id: objectId(data.userId) })
        .then((user) => {
          const response = makeResponse({ success: true, user }, 200);
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