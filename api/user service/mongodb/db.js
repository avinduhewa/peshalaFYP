const promise = require('bluebird');
const mongo = require('mongodb')

const logger = require('../util/logger');

const mongoClient = mongo.MongoClient

const STAGE = process.env.stage;
const connectionURL = process.env[`database_${STAGE}`];

const dbConnect = (cb) => {
  mongoClient.connect(connectionURL, function (err, database) {
    if (err) {
      logger.error({ err });
      return cb(err);
    } else {
      logger.info({ message: 'sucessfully connected to the database' })
      return cb(database.db('magister'));
    }
  });
}

module.exports = {
  dbConnect,
  objectId: mongo.ObjectID,
};
