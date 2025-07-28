import Image from "next/image";
import styles from "./resumo.module.css"
import ScrollFade from "@/util/scrollFade";

export default function Resumo() {
  return (
    <ScrollFade id="home">
        <section id="home" className={styles.intro}>
          <div>
            <h1 className={styles.introTitle} >Olá! Eu sou o <span className={styles.highlight}>João Vitor Raenke!</span></h1>
            <p className={styles.introDescription} >Desenvolvedor especializado Front End web e desktop. Gosto de designs modernos, funcionais e sempre atentos a experiência do usuário.</p>
            <p className={styles.introHistory} >Instituições de estudos:</p>
            <div className={styles.education}>
              <a
                href="/declaracaoSeMatricula.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/IFSUL.jpg" className={styles.educationImage} alt="IFSUL" width={200} height={120} />
              </a>
              <a
                href="https://cursos.alura.com.br/program/certificate/c90bbe83-bcb9-41db-91e2-1f19f70e8600"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image src="/alura.png" className={styles.educationImage} alt="Alura" width={180} height={500} />
              </a>
            </div>
          </div>
          <div className={styles.introImage}>
            <Image className={styles.introImageUm} src="/eu.webp" alt="Projeto" width={350} height={200} />
            <Image className={styles.introImageDois} src="/eudois.webp" alt="Projeto" width={300} height={200} />
          </div>

        </section>
    </ScrollFade>
      
  );
}
