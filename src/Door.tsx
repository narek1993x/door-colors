import React from "react";
import "./Door.scss";

export interface IDoor {
  color: string;
  code: string;
}

export const Door: React.FC<IDoor> = ({ color, code }) => {
  return (
    <div className="door__wrapper" style={{ "--bg-color": color } as React.CSSProperties}>
      <div className="door__code">{code}</div>
      <div className="door" title={code}>
        <div className="door__front">
          <div className="door__knob"></div>
        </div>
        <div className="door__back"></div>
      </div>
    </div>
  );
};
