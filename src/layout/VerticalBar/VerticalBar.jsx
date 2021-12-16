import styles from "./verticalBar.module.scss";

const VerticalBar = () => {
  return (
    <div className={styles.verticalBar}>
      <div className={styles.pseudoButtonContainer}>
        <div className={styles.pseudoButton}>
          <img src="/icons/yoga.svg" alt="" />
        </div>
        <div className={styles.pseudoButton}>
          <img src="/icons/swim.svg" alt="" />
        </div>
        <div className={styles.pseudoButton}>
          <img src="/icons/bicycle.svg" alt="" />
        </div>
        <div className={styles.pseudoButton}>
          <img src="/icons/weight.svg" alt="" />
        </div>
      </div>
      <p className={styles.copyrights}>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default VerticalBar;
