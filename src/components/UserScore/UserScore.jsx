import PropTypes from "prop-types";
import { PieChart, ResponsiveContainer, Pie } from "recharts";

import styles from "./userScore.module.scss";

const UserScore = ({ children }) => {
  const data = [
    {
      score: children,
      fill: "#ff0000",
    },
    {
      score: 100 - children,
      fill: "transparent",
    },
  ];
  return (
    <div className={styles.userScore}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="score"
            innerRadius={90}
            outerRadius={100}
            startAngle={90}
            endAngle={360+90}
            cornerRadius={5}
          >
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.scoreDisplay}>
          <p className={styles.score}>{children}%</p>
          <p className={styles.text}>de votre objectif</p>
        </div>
    </div>
  );
};

UserScore.propTypes = {
  children: PropTypes.number.isRequired,
};

export default UserScore;
