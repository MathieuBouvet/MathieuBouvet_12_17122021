import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
} from "recharts";

import styles from "./performanceChart.module.scss";

const performanceKindPosition = {
  6: 0,
  5: 1,
  4: 2,
  3: 3,
  2: 4,
  1: 5,
};

const performanceLabel = {
  6: "Intensité",
  5: "Vitesse",
  4: "Force",
  3: "Endurance",
  2: "Energy",
  1: "Cardio",
};

const PerformanceChart = ({ data }) => {
  data.sort(
    (perf1, perf2) =>
      performanceKindPosition[perf1.kind] - performanceKindPosition[perf2.kind]
  );
  return (
    <div className={styles.performanceChart}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={data}
          margin={{ top: 24, right: 40, bottom: 24, left: 40 }}
        >
          <PolarGrid />
          <Radar dataKey="value" fill="#FF0101B2" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={props => {
              const kind = props.payload.value;
              const yOffset = kind === 3 ? 10 : 0;
              return (
                <text {...props} y={props.y + yOffset}>
                  {performanceLabel[kind]}
                </text>
              );
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PerformanceChart;
