import React from "react";
import Tooltip from "@/customs/Tooltip";

type Props = {};

const TryTooltip = (props: Props) => {
  const positions = [
    "top-left",
    "top",
    "top-right",
    "left",
    "center",
    "right",
    "bottom-left",
    "bottom",
    "bottom-right",
  ];

  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FFFF33",
    "#33FFFF",
    "#FF33FF",
    "#FF3333",
    "#33FF33",
    "#3333FF",
  ];

  const renderTooltipButtons = (position:any, arrow = false, bgColor:any) => (
    <Tooltip key={position} text="this is an example" position={position} arrow={arrow} bgColor={bgColor}>
      <button className="button">{position}</button>
    </Tooltip>
  );

  return (
    <div className="page-container">
      <div className="grid-container">
        {positions.map((position) => renderTooltipButtons(position,false,'#555'))}
      </div>

      <div style={{ margin: "50px" }}>-------------------</div>

      <div className="grid-container">
        {positions.map((position) => renderTooltipButtons(position, true,'#555'))}
      </div>

      <div style={{ margin: "50px" }}>-------------------</div>

      <div className="grid-container">
        {positions.map((position, index) =>
          renderTooltipButtons(position, true, colors[index])
        )}
      </div>
    </div>
  );
};

export default TryTooltip;
