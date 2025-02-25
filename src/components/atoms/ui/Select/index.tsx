import { useState } from 'react';
import styles from './index.module.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
}

export default function Select ({
  options,
  onChange,
  defaultValue,
  placeholder = 'Выбрать...',
  name,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue || null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label || placeholder;

  return (
    <div className={styles.select}>
      <input type="hidden" name={name} value={selectedValue || ''} />
      <div className={styles.select_value} onClick={() => setIsOpen(!isOpen)}>
        {selectedLabel}
        <span className={`${styles.select_arrow} ${isOpen ? styles.select_arrowOpen : ''}`} />
      </div>
      {isOpen && (
        <div className={styles.select_options}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.select_option}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
