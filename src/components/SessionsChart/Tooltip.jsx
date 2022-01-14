import PropTypes from "prop-types";

import styles from "./tooltip.module.scss";

const CustomTooltip = ({ payload }) => {
  return <div className={styles.tooltip}>{payload?.[0]?.value} min</div>;
};

CustomTooltip.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ),
};

export default CustomTooltip;
