/**
 * @vitest-environment jsdom
 */

import { expect, describe, it, vi } from 'vitest';
import { render, userEvent } from '@testing-library/react';
import PasswordField from '../PasswordField';
import { hasNumberChecker } from '../checkers';
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

  it('should change checker status correctly', () => {
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
    expect(inputField).toBeInTheDocument();

    expect(numericRequirement).toHaveTextContent('❌');
    expect(numericRequirement).toHaveTextContent(/has a number 0-9/i);
  });
});
