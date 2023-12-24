import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge } from '../Badge';
import { Input } from '../Input';
import styles from './Select.module.scss';

type SelectPropsType = {
  onChange?: (option: string[]) => void;
  value?: string[];
  options?: string[];
  label?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  name?: string;
};

export const Select = ({
  onChange,
  value,
  options,
  label,
  helperText,
  required,
  disabled,
  error,
}: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const selectRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOptionsOutside = (event: MouseEvent) => {
      if (selectRootRef.current && !selectRootRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener('click', closeOptionsOutside);
    }

    return () => {
      document.removeEventListener('click', closeOptionsOutside);
    };
  }, [active]);

  const removeOption = (option: string) => onChange?.((value ?? [])?.filter((e) => e !== option));

  const addOption = (option: string) => onChange?.([...(value ?? []), option]);

  const filteredOptions = useMemo(
    () =>
      options?.filter(
        (o) =>
          !value?.includes(o) && o.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
      ) ?? [],
    [options, value, searchValue],
  );

  return (
    <div
      className={`${styles.select} ${styles[disabled ? 'disabled' : '']} ${
        styles[active && !disabled ? 'active' : '']
      } ${styles[error ? 'error' : '']} `}
      ref={selectRootRef}>
      <div className={styles.selectHead}>
        <span className={styles.label}>{label}</span>
        <span className={styles.required}>{required ? 'required' : 'optional'}</span>
      </div>
      <button
        className={styles.selectBody}
        onClick={() => {
          setActive((prev) => !prev);
        }}>
        <span className={styles.selectedOptions}>
          {value?.length !== 0 ? (
            value?.map((selectedOption) => (
              <Badge isDeletable onDelete={() => removeOption(selectedOption)}>
                {selectedOption}
              </Badge>
            ))
          ) : (
            <span className={styles.placeholder}>Select</span>
          )}
        </span>
        {active && !disabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <div className={styles.pivot}>
        <ul className={`${styles.options} ${styles.active}`}>
          <Input
            placeholder="Type to search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
          {filteredOptions.map((o) => (
            <li
              className={styles.option}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addOption(o);
              }}
              key={o}>
              {o}
            </li>
          ))}
        </ul>
      </div>
      <span className={styles.helperText}>{helperText}</span>
    </div>
  );
};
