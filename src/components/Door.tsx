import React from "react";
import "./Door.css";

interface IDoorProps {
  color: string;
  code: string;
}

export const Door: React.FC<IDoorProps> = ({ color, code }) => {
  return (
    <div className="door" title={code} style={{ "--bg-color": color } as React.CSSProperties}>
      <div className="door-code">{code}</div>
      <div className="door-front">
        <div className="knob"></div>
      </div>
      <div className="door-back"></div>
    </div>
  );
};
