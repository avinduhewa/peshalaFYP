const { dbConnect, objectId } = require('../mongodb/db');
const validator = require('../util/object-validator');
const { CISP, poolData, userPool } = require('../util/cognito');
const logger = require('../util/logger');
const { makeResponse } = require('../util/response-creator');

module.exports.resendConfirmationCode = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const data = JSON.parse(event.body);

  if (validator.validateConfirmationCodeResend(data)) {

    dbConnect(db => {

      var cognitoParams = {
        ClientId: poolData.ClientId,
        Username: data.username
      };

      CISP.resendConfirmationCode(cognitoParams, function (err, resendConfirmationCodeReturn) {
        if (err) {
          logger.error({ message: 'Cognito resend confirmation code error', errObj: err });

          const response = makeResponse({ success: false, message: 'Cognito resend confirmation code error', errObj: err }, 400);
          callback(null, response);
        }
        else {
          logger.info({ message: 'resendConfirmationCodeReturn', resendConfirmationCodeReturn });

          const response = makeResponse({ success: true, message: 'Successfully resent user confirmation code', resendConfirmationCodeReturn }, 200);
          callback(null, response);
        }
      });
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};