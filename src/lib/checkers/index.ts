function hasNumberChecker() {
  return /[0-9]/
}

function hasSpecialCharChecker() {
  return /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
}

function hasUpperCaseChecker() {
  return /[A-Z]/
}

function hasConsecutiveLetterChecker() {
  return /[a-zA-Z]{2,}/
}

export {
  hasConsecutiveLetterChecker,
  hasNumberChecker,
  hasSpecialCharChecker,
  hasUpperCaseChecker,
};
