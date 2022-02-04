import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./loader.module.scss";

/**
 * Render a loading spinner, with some customizable waiting message
 *
 * @param {Object} props
 * @param {string} [props.children] the message to show. Defaults to "Chargement"
 * @param {string} [props.className] allows for passing a custom classname to this component
 * @returns The Loader component
 */
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
