import Image from "next/image"
import ExperienciasCard from "./experciencesCard"
import styles from "./experiencias.module.css"

export default function Experiencias() {

    return (
    <section id="experiences" className={styles.section}>
        <h2 className={styles.title}>Experiência</h2>
        <div className={styles.experiencesGrid}>
            <ExperienciasCard
            title="Desenvolvedor Frontend"
            company="Domínio Fatal - Freelancer"
            time="Out 2024 - Mar 2025"
            description="Desenvolvi as principais telas e funcionalidades de um site e-commerce para a Domínio Fatal, atuando desde o design até a implementação. O projeto foi interrompido por motivos alheios ao desenvolvimento."
            />
            <ExperienciasCard
            title="TI - Tribunal de Justiça"
            company="Terceirizado - Microempreendedor Individual"
            time="Mai 2025 - Presente"
            description="Responsável pela instalação e configuração de novos computadores, suporte aos servidores em rotinas de backup, resolução de problemas de rede e impressoras, além de ajustes pontuais em servidores, como configuração de DHCP e gerenciamento de endereços IP."
            />
            <Image
            src="/dominio_fatal.jpg"
            alt="Experiências"
            width={1920}
            height={1080}
            style={{
                width: "100%",
                maxWidth: "600px",
                height: "340px",
                borderRadius: "10px",
                aspectRatio: "19/9",
                objectFit: "cover",
                objectPosition: "top",
                display: "block"
            }}
            />
            <Image
            src="https://media.independente.com.br/images/2024/06/forum-de-justica-de-lajeadojpeg-1718602929.jpeg"
            alt="Experiências"
            width={600}
            height={500}
            />
        </div>
    </section>
    )
}