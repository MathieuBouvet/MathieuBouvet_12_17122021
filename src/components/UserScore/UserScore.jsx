import PropTypes from "prop-types";
import styles from "./userScore.module.scss";

const UserScore = ({ children }) => {
  return (
    <div className={styles.userScore}>
      Score
      <div className={styles.circleContainer}>
        <svg className={styles.svgCircle}>
          <circle
            cx="90"
            cy="90"
            r="80"
            pathLength="100"
            strokeDashoffset={-100 + children}
          />
        </svg>
        <div className={styles.scoreDisplay}>
          <p className={styles.score}>{children}%</p>
          <p className={styles.text}>de votre objectif</p>
        </div>
      </div>
    </div>
  );
};

UserScore.propTypes = {
  children: PropTypes.number.isRequired,
};

export default UserScore;
