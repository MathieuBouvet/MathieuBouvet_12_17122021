import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import CustomTooltip from "./CustomTooltip";
import CustomCursor from "./CustomCursor";

import styles from "./sessionsChart.module.scss";

/**
 * Returns the session chart
 * 
 * @param {Object} props 
 * @param {Array<Object>} props.data
 * @param {Object} props.data[]
 * @param {string} props.data[].day The day of the week
 * @param {number} props.data[].sessionLength The length of the session for the given day
 * 
 * @returns The session chart
 */
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
