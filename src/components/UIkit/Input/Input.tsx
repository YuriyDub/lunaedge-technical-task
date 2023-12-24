import { ChangeEventHandler, useState } from 'react';
import styles from './Input.module.scss';

type inputPropsType = {
  icon?: React.ReactNode;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  name?: string;
};

export const Input = ({
  icon,
  placeholder = 'Placeholder',
  onChange,
  value,
  label,
  required,
  helperText,
  error,
  disabled,
  name,
}: inputPropsType) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={`${styles.input} ${styles[disabled ? 'disabled' : '']} ${
        styles[active ? 'active' : '']
      } ${styles[error ? 'error' : '']}`}>
      {required !== undefined && (
        <div className={styles.inputHead}>
          <label className={styles.label}>{label}</label>
          <span className={styles.required}>{required ? 'required' : 'optional'}</span>
        </div>
      )}
      <div className={styles.inputBody}>
        {icon}
        <input
          readOnly={disabled}
          onChange={onChange}
          value={value}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder={placeholder}
          name={name}
          disabled={disabled}></input>
      </div>
      <span className={styles.helperText}>{helperText}</span>
    </div>
  );
};
