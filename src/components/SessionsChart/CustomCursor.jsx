import { Rectangle } from "recharts";

const CustomCursor = props => {
  const { points, width, height, payloadIndex } = props;
  const cursorWidth = (width / 6) * (6 - payloadIndex);
  const x = points[0].x;
  const y = points[0].y;
  return (
    <Rectangle
      fill="#00000011"
      x={x}
      y={y - 1500}
      width={cursorWidth + 30}
      height={height + 3000}
    />
  );
};

export default CustomCursor;
