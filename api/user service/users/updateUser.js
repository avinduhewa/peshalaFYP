const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validateUser } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');

module.exports.updateUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const routeParams = event.pathParameters;
  const data = JSON.parse(event.body);

  if (validateUser(data)) {

    dbConnect(db => {
      db.collection('users').updateOne(
        { _id: objectId(routeParams.userId) },
        { $set: data }
      )
        .then(updateResult => {
          const response = makeResponse({ success: true, message: 'User update successful', user: data }, 200);
          callback(null, response);
        })
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};