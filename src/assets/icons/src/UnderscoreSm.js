import React from "react";

const SVG = ({
  style = {},
  fill = "#111",
  width = "30",
  height = "2",
  className = "",
  viewBox = "0 0 30 2",
  focusable = "false",
}) => (
  <svg
    fill={fill}
    focusable={focusable}
    width={width}
    height={height}
    style={style}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width={width} height={height} />
  </svg>
);

export default SVG;
