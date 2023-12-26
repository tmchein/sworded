import React from 'react';
import { PasswordFieldProps } from './types';
import style from './PasswordField.module.css';

export default function PasswordField({
  passwordReqs,
  className,
}: PasswordFieldProps) {
  const [password, setPassword] = React.useState('');

  const requirements = Object.values(passwordReqs);

  function onUserType(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <article
      className={`${className && className} ${style.password_field_container}`}
    >
      <aside aria-label="Insert your desired password">
        <input
          className={`${className}`}
          onChange={onUserType}
          value={password}
          type="text"
          name="passwordField"
        />
      </aside>
      <aside
        aria-aria-label="List of password checks"
        className={style.checklist}
      >
        {requirements.map(({ id, description, checker }) => (
          <section key={id}>
            <span>{checker(password) ? '✅' : '❌'}</span>
            <p>{description}</p>
          </section>
        ))}
      </aside>
    </article>
  );
}
