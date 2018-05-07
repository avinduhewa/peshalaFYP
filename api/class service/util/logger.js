const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});


const error = (obj) => {
  logger.log({
    level: 'error',
    message: `Error Log : ${JSON.stringify(obj)}`,
    obj: obj
  })
}

const warn = (obj) => {
  logger.log({
    level: 'warn',
    message: `Warn Log : ${JSON.stringify(obj)}`,
    obj: obj
  })
}

const info = (obj) => {
  logger.log({
    level: 'info',
    message: `Info Log : ${JSON.stringify(obj)}`,
    obj: obj
  })
}

const verbose = (obj) => {
  logger.log({
    level: 'verbose',
    message: `Verbose Log : ${JSON.stringify(obj)}`,
    obj: obj
  })
}

const debug = (obj) => {
  logger.log({
    level: 'debug',
    message: `Debug Log : ${JSON.stringify(obj)}`,
    obj: obj
  })
}

module.exports = {
  error,
  warn,
  info,
  verbose,
  debug
}