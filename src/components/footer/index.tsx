import styles from "./footer.module.css"
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContent}>
        <h1 className={styles.footerTitle}>Cada projeto é uma nova descoberta.<br /> Vamos construir o próximo juntos!</h1>
        <p style={{ fontWeight: "600", marginTop: "40px", marginBottom: "5px" }}>Contato:</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/JOAORSS" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <IoLogoGithub size={50} color="#d7bc98" />
          </a>
          <a href="https://www.linkedin.com/in/joaors/" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} color="#d7bc98" />
          </a>
          <a href="https://www.instagram.com/joao_rsant/" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <PiInstagramLogoBold size={50} color="#d7bc98" />
          </a>
          <a href="https://wa.me/5551998384327" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={50} color="#d7bc98" />
          </a>
          <a href="mailto:joaors987654321@gmail.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            <MdOutlineEmail size={60} color="#d7bc98" />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} João Vitor. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}