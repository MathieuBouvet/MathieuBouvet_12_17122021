import PropTypes from "prop-types";

import styles from "./legend.module.scss";

const legendLabels = {
  calories: "Calories brulées",
  kilogram: "Poids",
};

const Legend = ({ legendItems }) => {
  return (
    <div className={styles.legend}>
      <div className={styles.title}>Activité quotidienne</div>
      <ul className={styles.legendItems}>
        {legendItems.map(legendItem => {
          return (
            <li className={styles.legendItem}>
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
