import PropTypes from "prop-types";
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  Bar,
  Legend,
  Tooltip,
  YAxis,
  CartesianGrid,
} from "recharts";
import CustomLegend from "./Legend";

import styles from "./activityChart.module.scss";

const ActivityChart = ({ data }) => {
  return (
    <div className={styles.activityChart}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          margin={{ top: 0, right: 30, bottom: 24, left: 30 }}
        >
          <XAxis
            dataKey="day"
            tickMargin={15}
            tickLine={false}
            axisLine={false}
            tickFormatter={value => (value >= 0 ? value : "")}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickMargin={15}
          />
          <CartesianGrid vertical={false} />
          <Tooltip
            cursor={{ fill: "#C4C4C480" }}
            contentStyle={{
              backgroundColor: "#E60000",
              textAlign: "center",
            }}
            labelStyle={{ display: "none" }}
            itemStyle={{ color: "white" }}
            formatter={value => [value]}
          />
          <Bar
            dataKey="kilogram"
            unit="kg"
            fill="#282D30"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            unit="kCal"
            fill="#E60000"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Legend
            verticalAlign="top"
            height={75}
            content={({ payload: payloads }) => {
              return (
                <CustomLegend
                  legendItems={payloads.map(payload => ({
                    datakey: payload.dataKey,
                    color: payload.color,
                    unit: payload.payload.unit,
                  }))}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ActivityChart;
