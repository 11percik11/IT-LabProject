import { ColorFlag } from "../../atoms/ui"
import styles from './index.module.scss'
;
export default function Logo() {
  return (
    <div className={styles.logo}>
        <span className={styles.logo_text}>Агр<ColorFlag state={true} className={styles.logo_flag}/>н<ColorFlag state={false} className={styles.logo_flag}/>м</span>
        <span className={styles.logo_text}>Сад</span>
    </div>
  )
}
