const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const AWS = require('aws-sdk');

AWS.config.region = 'ap-southeast-1';

// constant variables

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
const poolData = {
  UserPoolId: 'ap-southeast-1_ag8VZCvMp',
  ClientId: '35r00v4rrdpnm8v8dcrek370bs',
};
const userPool = cognitoIdentityServiceProvider.describeUserPool(poolData);
const CISP = cognitoIdentityServiceProvider;

module.exports = {
  CISP,
  poolData,
  userPool,
  AmazonCognitoIdentity,
};
