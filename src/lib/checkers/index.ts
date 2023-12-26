function hasNumberChecker(input: string) {
  return /[0-9]/.test(input)
}

function hasSpecialCharChecker(input: string) {
  return /[!@#$%^&*'"()_+{}[\]:;<>,.?~\\/-]/.test(input)
}

function hasUpperCaseChecker(input: string) {
  return /[A-Z]/.test(input)
}

function hasNoConsecutiveLetterChecker(input: string) {
  if(!input.length){
    return false
  }
  if(/[a-zA-Z]{2,}/.test(input)){
    return false
  }
  return true
}

export {
  hasNoConsecutiveLetterChecker,
  hasNumberChecker,
  hasSpecialCharChecker,
  hasUpperCaseChecker,
};
