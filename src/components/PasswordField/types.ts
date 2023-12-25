import {
  hasNumberChecker,
  hasNoConsecutiveLetterChecker,
  hasSpecialCharChecker,
  hasUpperCaseChecker,
} from '../../lib/checkers';

export interface PasswordFieldProps {
  passwordReqs: Requirements;
  className?: string;
}

type Requirements = {
  numberReq: {
    id: string | number;
    description: string;
    checker: typeof hasNumberChecker;
  };
  specialChars?: {
    id: string | number;
    description: string;
    checker: typeof hasSpecialCharChecker;
  };
  upperCase?: {
    id: string | number;
    description: string;
    checker: typeof hasUpperCaseChecker;
  };
  noConsecutive?: {
    id: string | number;
    description: string;
    checker: typeof hasNoConsecutiveLetterChecker;
  };
};
