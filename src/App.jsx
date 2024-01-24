import "./App.css";
import { Data } from "./data";
import SubButton from "./Components/SubButton";

function App() {
  return (
    
    <div className="full-page-wrapper">
      <div className="container-div">
        {Data.map((item, index) => (
          <div key={index} className="step-wrapper">
            <div className="button-title line">{item.title}</div>
            <div className="plus-icon">
              <span>+</span>
            </div>

            <div className="sub-item-wrapper">
              {item?.child &&
                item.child.map((subItem, subIndex) => (
                  <SubButton key={subIndex} {...subItem} subIndex={subIndex} />
                  
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
