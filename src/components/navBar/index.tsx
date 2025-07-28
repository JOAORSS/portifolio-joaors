"use client";

import styles from "./navBar.module.css";
import { useEffect, useState } from "react";

export default function NavBar() {

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "experiences",
        "about",
        "projects",
        "skills",
        "contact"
      ];
      sections.forEach(section => {
        const sectionEl = document.getElementById(section);
        const pointEl = document.getElementById(`${section}-point`);
        if (sectionEl && pointEl) {
          const rect = sectionEl.getBoundingClientRect();
          const inView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          pointEl.style.backgroundColor = inView ? "#FFFFFF" : "#6c6c6c";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.hoverWall}>
        <nav id="navbar" className={styles.navBar}>
          <ul className={styles.menu}>
            <ListLinkButton href="#home">Início</ListLinkButton>
            <ListLinkButton href="#experiences">Experiências</ListLinkButton>
            <ListLinkButton href="#about">Sobre Mim</ListLinkButton>
            <ListLinkButton href="#projects">Projetos</ListLinkButton>
            <ListLinkButton href="#skills">Habilidades</ListLinkButton>
            <ListLinkButton href="#contact">Contato</ListLinkButton>
          </ul>
        </nav>
      </div>

    </>
  );
}

function ListLinkButton({ href, children }: { href: string; children: React.ReactNode; }) {

  const [color, setColor] = useState("#6c6c6c");

  return (
    <li onMouseEnter={() => setColor("#FFFFFF")} onMouseLeave={() => setColor("#6c6c6c")}>
      <div id={href.replace("#", "")+"-point"} className={styles.point} style={{ backgroundColor: color }} />
      <a className={styles.about + " " + styles.link} href={href} style={{ color }}>
        {children}
      </a>
    </li>
  );
}