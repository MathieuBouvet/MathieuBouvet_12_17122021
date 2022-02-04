import PropTypes from "prop-types";

import styles from "./keyData.module.scss";

/**
 * Renders the KeyData component.
 * It is a way of displaying a quantity of something, with a label, a unit and an icon.
 *
 * @param {Obejct} props
 * @param {string} props.iconPath the path of the icon to render
 * @param {string} props.label the label of the data shown
 * @param {string} props.unit the unit of the data shown
 * @param {number} props.children the quantity of the data shown
 *
 * @returns the KayData component
 */
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
