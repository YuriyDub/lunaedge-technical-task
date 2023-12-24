import styles from './Badge.module.scss';

type BadgePropsType = {
  variant?: 'rounded' | 'squared';
  children?: React.ReactNode;
  isDeletable?: boolean;
  onDelete?: () => void;
};

export const Badge = ({ variant = 'rounded', children, isDeletable, onDelete }: BadgePropsType) => {
  return (
    <li className={`${styles.badge} ${styles[variant]}`}>
      {children}
      {isDeletable ? (
        <span onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      ) : null}
    </li>
  );
};
