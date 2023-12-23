import styles from './Button.module.scss';

type ButtonPropsType = {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  variant = 'primary',
  size = 'base',
  children,
  onClick,
  disabled,
}: ButtonPropsType) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};
