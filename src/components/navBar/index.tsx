import { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <div className={styles.hoverWall}>
        <nav id="navbar" className={styles.navBar}>
          <ul className={styles.menu}>
            <ListLinkButton href="#home">Início</ListLinkButton>
            <ListLinkButton href="#about">Sobre Mim</ListLinkButton>
            <ListLinkButton href="#projects">Projetos</ListLinkButton>
            <ListLinkButton href="#skills">Habilidades</ListLinkButton>
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
      <div className={styles.point} style={{ backgroundColor: color }} />
      <a className={styles.about + " " + styles.link} href={href} style={{ color }}>
        {children}
      </a>
    </li>
  );
}