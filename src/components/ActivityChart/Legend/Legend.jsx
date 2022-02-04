import PropTypes from "prop-types";

import styles from "./legend.module.scss";

const legendLabels = {
  calories: "Calories brulées",
  kilogram: "Poids",
};

/**
 * Custom legend component used by the activity chart
 * 
 * @param {Object} props
 * @param {Array<Object>} props.legendItems the array of legend items
 * @param {String} props.legendItems[].datakey the datakey of the legend item
 * @param {String} props.legendItems[].color the color of the legend item
 * @param {String} props.legendItems[].unit the unit of the legend item
 * @returns the custom legend for the activity chart
 */
const Legend = ({ legendItems }) => {
  return (
    <div className={styles.legend}>
      <div className={styles.title}>Activité quotidienne</div>
      <ul className={styles.legendItems}>
        {legendItems.map(legendItem => {
          return (
            <li className={styles.legendItem} key={legendItem.datakey}>
              <div
                className={styles.bullet}
                style={{ backgroundColor: legendItem.color }}
              />
              {legendLabels[legendItem.datakey]} ({legendItem.unit})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Legend.propTypes = {
  legendItems: PropTypes.arrayOf(
    PropTypes.shape({
      datakey: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    })
  ),
};

export default Legend;
