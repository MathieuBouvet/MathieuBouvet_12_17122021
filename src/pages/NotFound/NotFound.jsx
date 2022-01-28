import styles from "./notFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p className={styles.errorCode}>404</p>
      <p>Oups, la page demandée n'éxiste pas...</p>
    </div>
  );
};

export default NotFound;
