import PropTypes from "prop-types";

import styles from "./tooltip.module.scss";

/**
 * Custom tooltip componenet used by the session chart.
 * Props are comming from recharts, and as such, will not be documented here, but you can obviously read the hovered value from it 
 * 
 * 
 * @param {*} props
 * @returns The custom tooltip for the session chart
 */
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
