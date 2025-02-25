import React, { useState } from 'react';
import styles from './index.module.scss';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  name?: string;
  defaultValue?: string;
}

export default function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '', 
  disabled = false, 
  name,
  defaultValue = '', 
}: InputProps) {
  const [localValue, setLocalValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    onChange?.(e);
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      disabled={disabled}
      name={name}
      value={value !== undefined ? value : localValue}
      onChange={handleChange}
    />
  );
};