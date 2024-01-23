import { useState } from "react";
import "./App.css";
import { Data } from "./data";

function App() {
  return (
    <div className="full-page-wrapper">
      
      <div className="container-div">
        {/* ACCESS THE PARENT STEP */}
        {Data.map((item) => (
          <div key={item.index} className="step-wrapper">
            <div className="button-title line">{item.title}</div>
            <div className="plus-icon"><span>+</span></div>

            {/* ACCESS THE SUB-STEP  */}
            <div className="sub-item-wrapper" >
            {item?.child && item.child.map ((subItem) => (
              <div key={item.index} className="sub-button-wrapper" >
                <div className="sub-button">{subItem.title}</div>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
