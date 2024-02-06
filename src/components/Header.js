import styles from "../styles/HeaderAndFooter.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Chuck-N-Jokes</h1>
    </header>
  );
}
export default Header;
