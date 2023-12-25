import PasswordField from './components/PasswordField';
import {
  hasNoConsecutiveLetterChecker,
  hasNumberChecker,
  hasSpecialCharChecker,
  hasUpperCaseChecker,
} from './lib/checkers';
import './App.css';

function App() {
  return (
    <main className="main-container">
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
    </main>
  );
}

export default App;
