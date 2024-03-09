// Tooltip.tsx

import React, { ReactNode } from "react";
import "./Tooltip.css";

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?:
    | "top"
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  arrow?: boolean;
  bgColor?: string;
  arrowColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "bottom",
  arrow = false,
  bgColor,
  arrowColor,
}) => {
  const arrowStyle: React.CSSProperties = {
    "--arrowColor": arrowColor || "#555",
  };

  return (
    <div className="tooltip-container">
      <div
        className={`tooltip ${position} ${arrow ? "arrow" : ""}`}
        style={{ backgroundColor: bgColor, ...arrowStyle }}
      >
        {text}
        {arrow && (
          <div
            className={`arrow ${position === "center" ? "hidden" : ""}`}
            style={arrowStyle}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
