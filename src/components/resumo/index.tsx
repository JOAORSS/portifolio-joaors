import Image from "next/image";
import styles from "./resumo.module.css"
import ScrollFade from "@/util/scrollFade";

export default function Resumo() {
  return (
    <ScrollFade>
        <section id="home" className={styles.intro}>
          <div>
            <h1 className={styles.introTitle} >Olá! Eu sou o <span className={styles.highlight}>João Raenke!</span></h1>
            <p className={styles.introDescription} >Eu sou desenvolvedor especializado Front End web e desktop, gosto de designs modernos, funcionais e sempre atentos a experiência do usuário</p>
            <p className={styles.introHistory} >Instituições de estudos:</p>
            <div className={styles.education}>
              <Image src="/IFSUL.jpg" alt="IFSUL" width={200} height={120} />
              <Image src="/alura.png" alt="Alura" width={180} height={500} />
            </div>
          </div>
          <div className={styles.introImage}>
            <Image src="/eu.webp" alt="Projeto" width={350} height={200} />
            <Image className={styles.introImageDois} src="/eudois.webp" alt="Projeto" width={300} height={200} />
          </div>

        </section>
    </ScrollFade>
      
  );
}