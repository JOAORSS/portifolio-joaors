import Image from "next/image"
import styles from "./sobreMim.module.css"

export default function SobreMim() {

    return (
        <section id="About" className={styles.section}>
            <h2>Sobre Mim</h2>
            <div className={styles.container} >
                <Image src="/eu.webp" alt="Foto de perfil" width={200} height={200} className={styles.profileImage} />
                <p className={styles.description}>Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios e oportunidades de aprendizado.</p>
            </div>
        </section>
    )
}