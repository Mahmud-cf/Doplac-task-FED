import React from "react";
import GrandButton from "./GrandButton";
import curv1 from "../assets/curv1.png";
import curv2 from "../assets/curv2.png";

function SubButton({ title, child, curve, subIndex }) {
    
  return (
    <div className="sub-button-wrapper">
      <div className="sub-button-1st-item">
        <div className="sub-button">{title}</div>
        {curve && (
          <img
            src={subIndex === 0 ? curv1 : curv2}
            alt=""
            className={`curv${subIndex + 1}`}
          />
        )}
        <div
          className={`sub-button-plus-icon plus-icon sub-plus-${subIndex + 1}`}
        >
          <div>
            <span>+</span>
          </div>
        </div>
      </div>
      {child &&
        child.map((grandSub, grandSubIndex) => (
          <GrandButton
            key={grandSubIndex}
            {...grandSub}
            grandSubIndex={subIndex}
            curve={curve}
          />
        ))}
    </div>
  );
}

export default SubButton;
