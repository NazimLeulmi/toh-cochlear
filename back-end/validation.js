const validator = require("validator");

function validateSignUp(data) {
  const { email, password, passwordc, firstName, lastName } = data;
  const errors = {
    email: "",
    password: "",
    passwordc: "",
    username: "",
  };
  // Email input validation
  if (email === "" || email === null || email === undefined) {
    errors.email = "The email address is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "The email address is invalid";
  } else if (email.length > 60) {
    errors.email = "The maximum length is 60 characters";
  }
  // First Name input validation
  if (firstName === "" || firstName === null || firstName === undefined) {
    errors.firstName = "The first name is required";
  } else if (!validator.isAlphanumeric(firstName)) {
    errors.firstName = "The first name must contain only letters and numbers";
  } else if (firstName.length < 3) {
    errors.firstName = "The minimum length is 3 characters";
  } else if (firstName.length > 20) {
    errors.firstName = "The maximum length is 10 characters";
  }
  // Last Name input validation
  if (lastName === "" || lastName === null || lastName === undefined) {
    errors.lastName = "The last name is required";
  } else if (!validator.isAlphanumeric(lastName)) {
    errors.lastName = "The last name must contain only letters and numbers";
  } else if (lastName.length < 3) {
    errors.lastName = "The minimum length is 3 characters";
  } else if (lastName.length > 20) {
    errors.lastName = "The maximum length is 10 characters";
  }
  // Password input validation
  if (password === "" || password === null || password === undefined) {
    errors.password = "The password is required";
  } else if (password.length < 8) {
    errors.password = "The minimum length is 8 characters";
  }
  if (passwordc === "" || passwordc === null || passwordc === undefined) {
    errors.passwordc = "The password confirmation is required";
  } else if (!validator.equals(password, passwordc)) {
    errors.passwordc = "The password confirmation doesn't match";
  }
  const errorsString =
    errors.email + errors.password + errors.username + errors.passwordc;
  return { isValid: errorsString === "" ? true : false, errors };
}
function validateSignIn(email) {
  // Email input validation
  let error = "";
  if (email === "" || email === null || email === undefined) {
    error = "The email address is required";
  } else if (!validator.isEmail(email)) {
    error = "The email address is invalid";
  } else if (email.length > 60) {
    error = "The maximum length is 60 characters";
  }
  return { isValid: error === "" ? true : false, error };
}

module.exports = { validateSignUp, validateSignIn };
