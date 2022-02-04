import { Rectangle } from "recharts";

/**
 * Custom cursor component used by SessionChart.
 * It applies a dark shade to the chart, from the hovered data to the end of the chart.
 * Props are comming from recharts, and as such, unused props will not be documented here.
 * 
 * @param {Object} props 
 * @param {Array<{x:number, y:number}>} props.points The coordinates of the hovered data. The two points in the array are respectively the top and the bottom coordinates on the chart.
 * @param {number} props.width The width of the hovered data
 * @param {number} props.height The height of the hovered data
 * @param {number} props.payloadIndex The index of the hovered data in the chart data list
 * @returns The custom cursor for the session chart
 */
const CustomCursor = props => {
  const { points, width, height, payloadIndex } = props;
  const cursorWidth = (width / 6) * (6 - payloadIndex); // hardcoded 6 because the session chart has 7 values
  const x = points[0].x;
  const y = points[0].y;
  return (
    <Rectangle
      fill="#00000011"
      x={x}
      y={y - 1500} // Make sure the top of the dark shade covers all the chart
      width={cursorWidth + 30} // Make sure the right of the dark shade covers all the chart
      height={height + 3000} // Make sure the bottom of the dark shade covers all the chart
    />
  );
};

export default CustomCursor;
