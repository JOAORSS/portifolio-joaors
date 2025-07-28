import Image from "next/image";
import styles from "./card.module.css"

export default function ProjetosCard({ title, description, imageUrl, link } : {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}) {
    return (
        <div className={styles.projectCard}>
            <Image src={imageUrl} width={400} height={400} alt="Project Image" className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </div>
    );
}