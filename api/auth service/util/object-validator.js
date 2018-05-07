const validator = require('validator');

const validateNewUser = (obj) => {
  const isEmail = validator.isEmail(obj.email);
  const isName = obj.name ? true : false;
  const isPwd = obj.password ? true : false;
  const isUsername = obj.username ? true : false;
  const isType = obj.type ? true : false;

  if (isEmail && isName && isPwd && isUsername && isType) {
    return true;
  } else {
    return false;
  }
}

const validateConfirmSignup = (obj) => {
  const isConfirmationCode = obj.confirmationCode ? true : false;
  const isUsername = obj.username ? true : false;

  if (isConfirmationCode && isUsername) {
    return true;
  } else {
    return false;
  }
}

const validateConfirmationCodeResend = (obj) => {
  const isUsername = obj.username ? true : false;

  if (isUsername) {
    return true;
  } else {
    return false;
  }
}



module.exports = {
  validateNewUser,
  validateConfirmSignup,
  validateConfirmationCodeResend
}