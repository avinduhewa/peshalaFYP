const validator = require('validator');
const { objectId } = require('../mongodb/db');

const generateVendor = (obj) => {
  let vendors = obj.vendors;

  switch (obj.type) {
    case 'trello':
      vendors.trello = {
        key: obj.key,
        token: obj.token
      }
      break;

    default:
      break;
  }

  return {
    vendors
  };
}

module.exports = {
  generateVendor
}