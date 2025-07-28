import ScrollFade from "@/util/scrollFade"
import ProjetosCard from "./projectCard"
import styles from "./projetos.module.css"
import Image from "next/image"
import { IoLogoGithub } from "react-icons/io"

export default function Projetos() {

    return (
        <ScrollFade id="projects">
        <section id="projects" className={styles.section}>
            <section className={styles.header}>
                <h2>Alguns projetos</h2> 
                <a href="https://github.com/JOAORSS" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                Ver mais
                    <IoLogoGithub size={40} color="#fff" />
                </a>
            </section>

            <div className={styles.projectsContainer}>

                <ProjetosCard 
                    title="AluraFlix" 
                    description="Uma plataforma inspirada em serviços de streaming para organizar e visualizar seus vídeos favoritos, projeto desenvolvido em Vite, React e JavaScript." 
                    imageUrl="/aluraflix.png" 
                    link="https://github.com/JOAORSS/aluraflix" />

                <ProjetosCard 
                    title="Space App" 
                    description="Aplicativo web desenvolvido com React e Vite para exibição de imagens espaciais, com navegação intuitiva, galeria, destaques, tags e modal de zoom." 
                    imageUrl="/spaceApp.png" 
                    link="https://github.com/JOAORSS/spaceApp" />
                                    <ProjetosCard 
                    title="Domínio Fatal" 
                    description="Site e-commerce para a Domínio Fatal, projeto desenvolvido em Next.js, TypeScript. Criado usando a tecnologia serverlles para o backend." 
                    imageUrl="/projetoum.png" 
                    link="https://github.com/JOAORSS/dominio-fatal" />
            </div>
        </section>
        </ScrollFade>
    )
}