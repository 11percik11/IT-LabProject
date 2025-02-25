import { useState } from "react";
import styles from "./index.module.scss";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  name?: string;
}

export default function Checkbox({
  label,
  checked = false,
  onChange,
  className,
  name,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        name={name}
        className={`${styles.checkbox_input} ${className}`}
      />
      {label && (
        <label htmlFor={name} className={styles.labelText}>
          {label}
        </label>
      )}
    </label>
  );
}
