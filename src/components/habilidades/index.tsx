import Image from "next/image"
import styles from "./habilidades.module.css"
import ScrollFade from "@/util/scrollFade"

export default function Habilidades() {
    return (
        <ScrollFade id="skills">
        <section id="skills" className={styles.section}>
            <h2>Habilidades</h2>
            <div className={styles.skillsContainer}>
                <p className={styles.description}>Tecnologias que uso em desenvolvimento</p>
                <div className={styles.skillsGrid}>
                    <Image src="/tecnologias/react.svg" width={100} height={100} alt="Habilidade 1" title="React" className={styles.skillImage} />
                    <Image src="/tecnologias/type.png" width={100} height={100} alt="Habilidade 2" title="TypeScript" className={styles.skillImage} />
                    <Image src="/tecnologias/node.svg" width={100} height={100} alt="Habilidade 3" title="Node.js" className={styles.skillImage} />
                    <Image src="/tecnologias/flutter.svg" width={100} height={100} alt="Habilidade 4" title="Flutter" className={styles.skillImage} />
                    <Image src="/tecnologias/java.png" width={100} height={100} alt="Habilidade 5" title="Java" className={styles.skillImage} />
                </div>
            </div>
        </section>
        </ScrollFade>
    )
}