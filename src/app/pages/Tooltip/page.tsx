import React from "react";
import Tooltip from "@/customs/Tooltip";

type Props = {};

const TryTooltip = (props: Props) => {
  const positions = [
    "top-left", "top", "top-right",
    "left", "center", "right",
    "bottom-left", "bottom", "bottom-right"
  ];

  const renderTooltipButtons = (position, arrow = false) => (
    <Tooltip key={position} text="this is an example" position={position} arrow={arrow}>
      <button className="button">{position}</button>
    </Tooltip>
  );

  return (
    <div className="page-container">
      <div className="grid-container">
        {positions.map((position) => renderTooltipButtons(position))}
      </div>

      <div style={{ margin: '50px' }}>-------------------</div>

      <div className="grid-container">
        {positions.map((position) => renderTooltipButtons(position, true))}
      </div>
    </div>
  );
};

export default TryTooltip;
