import ScrollFade from "@/util/scrollFade"
import ProjetosCard from "./projectCard"
import styles from "./projetos.module.css"

export default function Projetos() {

    return (
        <ScrollFade id="projects">
        <section id="projects" className={styles.section}>
            <h2>Projetos</h2>
            <div className={styles.projectsContainer}>
                <ProjetosCard 
                    title="Domínio Fatal" 
                    description="Site e-commerce para a Domínio Fatal, projeto desenvolvido em Next.js, TypeScript. Criado usando a tecnologia serverlles para o backend." 
                    imageUrl="/projetoum.png" 
                    link="https://github.com/JOAORSS/dominio-fatal.git" />
                <ProjetosCard 
                    title="Meu Projeto" 
                    description="Site e-commerce para a Domínio Fatal, projeto desenvolvido em Next.js, TypeScript. Criado usando a tecnologia serverlles para o backend." 
                    imageUrl="/projetoum.png" 
                    link="https://github.com/JOAORSS/dominio-fatal.git" />
                    
                <ProjetosCard 
                    title="Meu Projeto" 
                    description="Site e-commerce para a Domínio Fatal, projeto desenvolvido em Next.js, TypeScript. Criado usando a tecnologia serverlles para o backend." 
                    imageUrl="/projetoum.png" 
                    link="https://github.com/JOAORSS/dominio-fatal.git" />
            </div>
        </section>
        </ScrollFade>
    )
}