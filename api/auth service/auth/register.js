const { dbConnect, objectId } = require('../mongodb/db');
const validator = require('../util/object-validator');
const { CISP, poolData, userPool } = require('../util/cognito');
const logger = require('../util/logger');
const { generateUserObj } = require('../util/generator');
const { makeResponse } = require('../util/response-creator');

module.exports.signUp = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, makeResponse({}, 200)); // handle schedule events

  const data = JSON.parse(event.body);

  if (validator.validateNewUser(data)) {

    dbConnect(db => {

      const dbUserObj = generateUserObj(data);

      var cognitoParams = {
        ClientId: poolData.ClientId,
        Password: data.password,
        Username: data.username,
        UserAttributes: [
          {
            Name: 'email',
            Value: data.email
          },
          {
            Name: 'name',
            Value: data.name
          },
          {
            Name: 'type',
            Value: data.type
          },
          {
            Name: 'custom:userId',
            Value: dbUserObj._id.toString()
          }
        ]
      };
      CISP.signUp(cognitoParams, function (err, signUpReturn) {
        if (err) {
          logger.error({ message: 'Cognito user creation error', errObj: err });

          const response = makeResponse({ success: false, message: 'Cognito user creation error', errObj: err }, 400);
          callback(null, response);
        }
        else {
          logger.info({ message: 'signUpReturn', signUpReturn });
          dbUserObj.cognitoId = signUpReturn.UserSub;

          db.collection('users').insertOne(dbUserObj);
          const response = makeResponse({ success: true, message: 'User registration successful', name: dbUserObj.name }, 200);
          callback(null, response);
        }
      });
    })
  } else {
    const response = makeResponse({ success: false, message: "parameter validation failed" }, 400);
    callback(null, response);
  }
};
