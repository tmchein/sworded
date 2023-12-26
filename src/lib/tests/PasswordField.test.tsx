/**
 * @vitest-environment jsdom
 */

import { expect, describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordField from '../PasswordField';
import { hasNumberChecker, hasUpperCaseChecker } from '../checkers';
import { PasswordFieldProps } from '../PasswordField/types';

function Component(props: PasswordFieldProps) {
  return <PasswordField {...props} />;
}

const cryptoMock = { randomUUID: vi.fn(() => Math.random()) };
vi.stubGlobal('crypto', cryptoMock);

describe('Password Field component', () => {
  it('should render correctly', () => {
    const props = {
      passwordReqs: {
        numberReq: {
          id: crypto.randomUUID(),
          description: 'has a number 0-9',
          checker: hasNumberChecker,
        },
      },
    };

    const { getByRole } = render(Component(props));
    const numericRequirement = getByRole('listitem');
    const inputField = getByRole('textbox');

    expect(numericRequirement).toBeInTheDocument();
    expect(numericRequirement).toHaveTextContent('❌');
    expect(numericRequirement).toHaveTextContent(/has a number 0-9/i);
    expect(inputField).toBeInTheDocument();
  });

  it('should change checker status correctly', async () => {
    const user = userEvent.setup();

    const props = {
      passwordReqs: {
        numberReq: {
          id: crypto.randomUUID(),
          description: 'has a number 0-9',
          checker: hasNumberChecker,
        },
        upperCase: {
          id: crypto.randomUUID(),
          description: 'has an upper case letter',
          checker: hasUpperCaseChecker,
        },
      },
    };

    const { getByRole, getAllByRole } = render(Component(props));
    const numericRequirement = getAllByRole('listitem');
    const inputField = getByRole('textbox');

    expect(numericRequirement).toHaveLength(2);
    expect(inputField).toBeInTheDocument();

    expect(numericRequirement[0]).toHaveTextContent('❌');
    expect(numericRequirement[0]).toHaveTextContent(/has a number 0-9/i);

    expect(numericRequirement[1]).toHaveTextContent('❌');
    expect(numericRequirement[1]).toHaveTextContent(
      /has an upper case letter/i
    );

    await user.click(inputField);
    await user.keyboard('he110 w0r1d');

    expect(numericRequirement[0]).toHaveTextContent('✅');
    expect(numericRequirement[1]).toHaveTextContent('❌');

    await user.click(inputField);
    await user.keyboard('he110 w0r1D');
    expect(numericRequirement[1]).toHaveTextContent('✅');
  });
});
