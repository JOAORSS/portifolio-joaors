
import styles from "./scrollDown.module.css";
import { BiArrowFromTop } from "react-icons/bi";

export default function ScrollDown() {
    return (
        <div className={styles.scrollDown}>
            <p className={styles.scrollDownText}>Role para baixo</p>
            <BiArrowFromTop className={styles.scrollDownIcon} />
        </div>
    );
}