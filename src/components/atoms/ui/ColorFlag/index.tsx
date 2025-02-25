import styles from './index.module.scss';

interface FlagProps {
    state: boolean
    className?: string;
}

export default function ColorFlag({ state = false, className = "" }:FlagProps) {
  return (
    <div className={`${state ? styles.flag_Yes : styles.flag_No} ${styles.flag} ${className}` }> </div>
  )
}
