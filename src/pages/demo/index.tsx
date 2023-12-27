import PasswordField from '../../lib/PasswordField';
import {
  hasNoConsecutiveLetterChecker,
  hasNumberChecker,
  hasSpecialCharChecker,
  hasUpperCaseChecker,
} from '../../lib/checkers';
import style from './styles.module.css';

export default function Demo() {
  return (
    <article className={style.main_container}>
      <PasswordField
        passwordReqs={{
          numberReq: {
            id: crypto.randomUUID(),
            description: 'has a number 0-9',
            checker: hasNumberChecker,
          },
          specialChars: {
            id: crypto.randomUUID(),
            description: 'has a special char',
            checker: hasSpecialCharChecker,
          },
          noConsecutive: {
            id: crypto.randomUUID(),
            description: 'has no consecutive letters',
            checker: hasNoConsecutiveLetterChecker,
          },
          upperCase: {
            id: crypto.randomUUID(),
            description: 'has an upper case letter',
            checker: hasUpperCaseChecker,
          },
        }}
      />
    </article>
  );
}
