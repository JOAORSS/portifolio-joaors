
import styles from './GridBackground.module.css';

export default function GridBackground() {

    return (
        <div className={styles.gridBackground}>
            <div className={`${styles.gridColumn} ${styles.gridColumn1}`}></div>
            <div className={`${styles.gridColumn} ${styles.gridColumn2}`}></div>
            <div className={`${styles.gridColumn} ${styles.gridColumn3}`}></div>
            <div className={`${styles.gridColumn} ${styles.gridColumn4}`}></div>
      </div>
    )
}