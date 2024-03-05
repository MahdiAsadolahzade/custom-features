// Tooltip.tsx

import React, { ReactNode } from 'react';
import './Tooltip.css';

interface TooltipProps {
  text: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  arrow?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, position = 'bottom', arrow = false }) => {
  return (
    <div className="tooltip-container">
      <div className={`tooltip ${position} ${arrow ? 'arrow' : ''}`}>
        {text}
        {arrow && <div className={`arrow ${position === 'center' ? 'hidden' : ''}`} />}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
