import styles from "./containerGrid.module.css"


export default function ContainerGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
