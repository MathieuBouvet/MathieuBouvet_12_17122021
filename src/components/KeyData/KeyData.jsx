import PropTypes from "prop-types";

import styles from "./keyData.module.scss";

const KeyData = ({ iconPath, label, children, unit }) => {
  return (
    <div className={styles.keyData}>
      <img src={iconPath} alt="" />
      <div className={styles.dataContainer}>
        <p className={styles.count}>
          {children} {unit}
        </p>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

KeyData.propTypes = {
  iconPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};

export default KeyData;
