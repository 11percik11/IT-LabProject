import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import { selectAbsentClientsCount, selectPresentClientsCount } from '../../../app/store/cliantSlice';

export default function VisitorValue() {
  const presentCount = useSelector(selectPresentClientsCount);
  const absentCount = useSelector(selectAbsentClientsCount);

  return (
    <div className={styles.visitorValue}>
        <div className={styles.visitorValue_title}>Посетители</div>
        <div className={styles.visitorValue_container}>
            <div className={`${styles.visitorValue_item} ${styles.item1_color}`}>{presentCount}</div>
            <div className={`${styles.visitorValue_item} ${styles.item2_color}`}>/</div>
            <div className={`${styles.visitorValue_item} ${styles.item3_color}`}>{absentCount}</div>
        </div>
    </div>
  )
}
