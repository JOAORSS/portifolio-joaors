import styles from "./card.module.css"

export default function ExperienciasCard(
    { title, company, time, description } : 
    { title: string; company: string; time: string; description: string; }
) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.company}>{company}</p>
            <p className={styles.time}>{time}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}