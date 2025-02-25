import React from "react";
import styles from './index.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary" | "danger" | "silver";
}

export default function Button({
  children,
  onClick,
  disabled,
  type = "button",
  className = "",
  variant = "primary",
}: ButtonProps)  {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button--${variant}`]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
