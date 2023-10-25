import "./bar.scss";
import Colors from "../colors/Colors";

const Bar = (props) => {
  const barStyle = {
    height: `${props.length * 0.65}vh`,
    backgroundColor: Colors[props.color],
    width: `${props.width}px`,
  };
  return (
    <>
      <div className="bar" style={barStyle}>
        {props.width >= 25 ? props.length : ""}
      </div>
    </>
  );

  // return (
  //   <div className="bars">
  //     {numArray &&
  //       numArray.map((num, i) => {
  //         return (
  //           <div key={i} className="bar-container" style={{ order: i }}>
  //             {num.value}
  //             <div className={"bar " + num.style} style={barStyle}></div>
  //           </div>
  //         );
  //       })}
  //   </div>
  // );
};

export default Bar;
