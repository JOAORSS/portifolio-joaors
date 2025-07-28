"use client";


import styles from "./page.module.css";
import GridBackground from "@/components/gridBackground";
import Header from "@/components/header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import ContainerGrid from "@/components/containerGrid";
import Resumo from "@/components/resumo";
import BoasVindas from "@/components/boasVindas";
import { useState } from "react";
import { useEffect } from "react";
import Experiencias from "@/components/experiencias";
import SobreMim from "@/components/sobreMim";

export default function Home() {

  const [boasVindasVisible, setBoasVindasVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GridBackground />
      <Header />
      <BoasVindas
        isBoasVindasVisible={boasVindasVisible}
        setIsBoasVindasVisible={setBoasVindasVisible}
      >
        <ContainerGrid>
          <Resumo />
          <NavBar />
          <Experiencias />
          <SobreMim />

          <section id="projects" className={styles.section}>
            <h2>Projetos</h2>
            <p>Aqui estão alguns dos meus principais projetos.</p>
          </section>

          <section id="skills" className={styles.section}>
            <h2>Habilidades</h2>
            <p>React, TypeScript, Node.js, e mais.</p>
          </section>

          <Footer />
        </ContainerGrid>
      </BoasVindas>
    </>
  );
}
