const validator = require('validator');

const validate_id = (id) => {
  const isValid_id = validator.isMongoId(id)

  if (isValid_id) {
    return true;
  } else {
    return false;
  }
}

const validateClassObj = (obj) => {
  const isName = obj.name ? true : false;

  if (isName) {
    return true;
  } else {
    return false;
  }
}

const validateMongoIdList = (list) => {
  let isValid = true;

  list.map(element => {
    if (!validator.isMongoId(element))
      isValid = false
  });

  return isValid
}



module.exports = {
  validate_id,
  validateClassObj,
  validateMongoIdList
}