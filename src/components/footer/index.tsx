import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} João Vitor. Todos os direitos reservados.</p>
    </footer>
  );
}