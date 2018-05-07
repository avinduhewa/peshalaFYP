const { dbConnect, objectId } = require('../mongodb/db');
const logger = require('../util/logger');
const { validateMongoIdList } = require('../util/object-validator');
const { makeResponse } = require('../util/response-creator');
const { addActivityLog } = require('../util/activityLog');

module.exports.acceptClass = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events
  const authToken = event.requestContext.authorizer.claims;
  const userId = authToken['custom:userId'];
  const routeParams = event.pathParameters;
  const data = JSON.parse(event.body);

  if (validateMongoIdList([userId])) {

    dbConnect(db => {
      db.collection('class').findOneAndUpdate(
        { _id: objectId(routeParams.classId) },
        { $addToSet: { members: userId } }
      )
        .then(updateResult => {
          const response = makeResponse({ success: true, message: 'users added to the class successfully', class: updateResult.value }, 200);
          callback(null, response);
        })
        .catch(err => {
          const response = makeResponse({ success: false, message: "class update failed", err }, 400);
          callback(null, response);
        })
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};