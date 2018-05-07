const validator = require('validator');
const { objectId } = require('../mongodb/db');

const generateUserObj = (obj) => {
  return {
    _id: new objectId(),
    name: obj.name,
    email: obj.email,
    cognitoId: '',
    type: obj.type,
    notes: [],
    classes: [],
    verified: false
  }
}



module.exports = {
  generateUserObj
}