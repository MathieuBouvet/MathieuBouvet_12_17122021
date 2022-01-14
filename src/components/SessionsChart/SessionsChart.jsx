import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import CustomTooltip from "./Tooltip";
import CustomCursor from "./CustomCursor";

import styles from "./sessionsChart.module.scss";

const SessionsChart = ({ data }) => {
  return (
    <div className={styles.sessionsChart}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 24, right: 30, bottom: 24, left: 30 }}
        >
          <Legend
            verticalAlign="top"
            content={() => "Durée moyenne des sessions"}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
            allowEscapeViewBox={{ x: true, y: true }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
          />
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            axisLine={false}
            tickLine={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SessionsChart;
