import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./loader.module.scss";

const Loader = ({ children = "Chargement", className }) => {
  return (
    <div className={cx(styles.loader, className)}>
      <div className={styles.spinner}></div>
      <p>{children}</p>
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Loader;
