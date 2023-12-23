import { ChangeEventHandler, useState } from 'react';
import styles from './Input.module.scss';

type inputPropsType = {
  icon?: React.ReactElement;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  label?: string;
  required?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
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
}: inputPropsType) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={`${styles.input} ${styles[disabled ? 'disabled' : '']} ${
        styles[active ? 'active' : '']
      } ${styles[error ? 'error' : '']}`}>
      <div className={styles.inputHead}>
        <span className={styles.label}>{label}</span>
        <span className={styles.required}>{required}</span>
      </div>
      <div className={styles.inputBody}>
        {icon}
        <input
          onChange={onChange}
          value={value}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder={placeholder}></input>
      </div>
      <span className={styles.helperText}>{helperText}</span>
    </div>
  );
};
