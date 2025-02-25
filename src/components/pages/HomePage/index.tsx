import MainTemplate from "../../templates/MainTemplate";
import styles from './index.module.scss';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
        <MainTemplate/>
    </div>
  )
}
