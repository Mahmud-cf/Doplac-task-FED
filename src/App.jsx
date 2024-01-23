import "./App.css";
import { Data } from "./data";
import curv1 from "./assets/curv1.png";
import curv2 from "./assets/curv2.png";
import curv3 from "./assets/curv3.png";
import curv4 from "./assets/curv4.png";
import SubButton from "./Components/SubButton";

function App() {
  return (
    // <div className="full-page-wrapper">
    //   <div className="container-div">
    //     {/* ACCESS THE PARENT STEP */}
    //     {Data.map((item, index) => (
    //       <div key={index} className="step-wrapper">
    //         <div className="button-title line">{item.title}</div>
    //         <div className="plus-icon">
    //           <span>+</span>
    //         </div>

    //         {/* ACCESS THE SUB-STEP  */}
    //         <div className="sub-item-wrapper">
    //           {item?.child &&
    //             item.child.map((subItem, subIndex) => (
    //               <div key={subIndex} className="sub-button-wrapper">
    //                 <div className="sub-button-1st-item">
    //                   <div className="sub-button">{subItem.title}</div>

    //                   {/* CHECK IF CURV INSIDE THE OBJECT IS TRUE, THEN THE CURV WILL SHOW, OTHERWISE THE CURV WILL NOT SHOW */}
    //                   {subItem.curve && (
    //                     <img
    //                       src={subIndex === 0 ? curv1 : curv2}
    //                       alt=""
    //                       className={`curv${subIndex + 1}`}
    //                     />
    //                   )}
    //                   <div
    //                     className={`sub-button-plus-icon plus-icon sub-plus-${
    //                       subIndex + 1
    //                     }`}
    //                   >
    //                     <div>
    //                       <span>+</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 {subItem.child &&
    //                   subItem.child.map((grandSub, grandSubIndex) => (
    //                     <div
    //                       key={grandSubIndex}
    //                       className={`grandsub grandsub${grandSubIndex + 1}`}
    //                     >
    //                       {/* CHECK IF CURV INSIDE THE OBJECT IS TRUE, THEN THE CURV WILL SHOW, OTHERWISE THE CURV WILL NOT SHOW */}
    //                       {subItem.curve && (
    //                         <img
    //                           src={subIndex === 0 ? curv3 : curv4}
    //                           alt=""
    //                           className={`curv${subIndex + 3}`}
    //                         />
    //                       )}
    //                       <div className="button-title line">
    //                         {grandSub.title}
    //                       </div>
    //                       <div className="plus-icon">
    //                         <span>+</span>
    //                       </div>
    //                     </div>
    //                   ))}
    //               </div>
    //             ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
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
