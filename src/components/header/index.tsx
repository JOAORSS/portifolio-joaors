import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src="https://avatars.githubusercontent.com/u/70610011?s=96&v=4" alt="Logo" width={50} height={50} />
        <h2 className={styles.title} >JoaoRS</h2>
      </header>
      <div aria-hidden="true" className={styles.faderHeader} style={{ opacity: 1 }}>
      </div>
    </>

  );
}