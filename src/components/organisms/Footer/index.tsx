import PresenceForm from "../../molecules/PresenceForm";
import styles from './index.module.scss';

interface FooterProps {
    className?: string;
}

export default function Footer({className = ""}:FooterProps) {
  return (
    <div className={`${styles.footer} ${className}`}>
        <PresenceForm/>
    </div>
  )
}
