export interface PasswordFieldProps {
  passwordReqs: Requirements;
}

type Requirements = {
  numberReq: () => RegExp;
  specialChars?: () => RegExp;
  upperCase?: () => RegExp;
  noConsecutive?: () => RegExp;
};
