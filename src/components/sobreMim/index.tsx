import Image from "next/image"
import styles from "./sobreMim.module.css"
import ScrollFade from "@/util/scrollFade"

export default function SobreMim() {

    return (
          <ScrollFade id="about">
            <section id="about" className={styles.section}>
                <h2 style={{ color: "#24be5f"}}>Sobre Mim</h2>
                <div className={styles.container} >
                    <div className={styles.imageContainer}>
                        <Image src="https://zeldacentral.com/wp-content/uploads/2025/03/fsplus_01.gif" className={styles.link} width={50} height={50} alt="link" />
                        <Image src="/sobreMim.png" alt="Foto de perfil" width={550} height={200} className={styles.profileImage} />
                    </div>
                    <p className={styles.description}>
                        Olá! Me chamo João Vitor Raenke dos Santos, sou desenvolvedor com foco em Front End e UX/UI. Estou no meu quarto ano do ensino médio no IFSUL e sempre fui interessado em programar e desenvolver!
                        <br /><br />
                        No último ano, além dos estudos no IFSUL, concluí uma especialização com certificado pela Oracle e Alura no programa Oracle ONE, onde passei os últimos 12 meses estudando desenvolvimento Frontend, principalmente web. Aprendi sobre componentes e funções do React, otimização de códigos em JavaScript, aprimoramento do uso do GitHub e como entender e construir telas de designs criados no Figma.
                        <br /><br />
                        Foi uma grande trajetória, onde aprendi muito sobre desenvolvimento. Mesmo após o fim da especialização, sigo estudando frequentemente sobre essa área que gosto tanto, como o Front End.
                        <br /><br />
                        Fora do mundo do desenvolvimento, pratico ciclismo e sou atleta de judô (vice-campeão nacional nos Jogos dos Institutos Federais 🥋), além de reservar um tempo para jogar games!
                        <br /><br />
                        Sempre fui apaixonado por desenvolvimento e busco uma oportunidade para mostrar tudo que tenho no mercado de trabalho. Sou muito grato ao IFSUL por abrir as portas para este mundo da tecnologia.
                    </p>
                </div>
            </section>
        </ScrollFade>
    )
}