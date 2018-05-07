const { dbConnect, objectId } = require('../mongodb/db');
const validator = require('../util/object-validator');
const { CISP, poolData, userPool } = require('../util/cognito');
const logger = require('../util/logger');
const { makeResponse } = require('../util/response-creator');

module.exports.confirmSignUp = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const data = JSON.parse(event.body);

  if (validator.validateConfirmSignup(data)) {

    dbConnect(db => {

      var cognitoParams = {
        ClientId: poolData.ClientId,
        ConfirmationCode: data.confirmationCode,
        Username: data.username
      };

      CISP.confirmSignUp(cognitoParams, function (err, confirmSignUpReturn) {
        if (err) {
          logger.error({ message: 'Cognito user confirm error', errObj: err });

          const response = makeResponse({ success: false, message: 'Cognito user confirm error', errObj: err }, 400);
          callback(null, response);
        }
        else {
          logger.info({ message: 'confirmSignUpReturn', confirmSignUpReturn });

          const response = makeResponse({ success: true, message: 'User confirmation successful', confirmSignUpReturn }, 200);
          callback(null, response);
        }
      });
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};
