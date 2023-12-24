import styles from './Modal.module.scss';
import { Button } from '../Button';

type ModalPropsType = {
  children?: React.ReactNode;
  cancelText?: string;
  submitText?: string;
  title?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  className?: string;
};

export const Modal = ({
  children,
  cancelText = 'Cancel',
  submitText = 'Save',
  title = 'Modal',
  onCancel,
  onSubmit,
  className,
}: ModalPropsType) => {
  return (
    <div className={`${styles.modal} ${className}`}>
      <div className={styles.modalHead}>
        <span className={styles.title}>{title}</span>
        <button onClick={onCancel}>
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
        </button>
      </div>
      <div className={styles.modalBody}>{children}</div>
      <div className={styles.modalFooter}>
        <Button variant="text" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button onClick={onSubmit}>{submitText}</Button>
      </div>
    </div>
  );
};
