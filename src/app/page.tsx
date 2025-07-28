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
import Projetos from "@/components/projetos";
import Habilidades from "@/components/habilidades";

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
          <NavBar />
          <Resumo />
          <Experiencias />
          <SobreMim />
          <Projetos />
          <Habilidades />
          <Footer />
        </ContainerGrid>
      </BoasVindas>
    </>
  );
}
