const validator = require('validator');

const validate_id = (id) => {
  const isValid_id = validator.isMongoId(id)

  if (isValid_id) {
    return true;
  } else {
    return false;
  }
}

const validateUser = (obj) => {
  const isEmail = obj.email ? validator.isEmail(obj.email) : true;
  const isName = obj.name ? true : false;

  if (isEmail && isName) {
    return true;
  } else {
    return false;
  }
}


module.exports = {
  validate_id,
  validateUser
}