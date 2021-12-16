import styles from "./topBar.module.scss";

const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <img src="/logo.svg" alt="" className={styles.logo} />
      <h1 className={styles.appTitle}>SportSee</h1>
      <ul className={styles.pseudoLinkContainer}>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  );
};

export default TopBar;
