import "./line-graph.scss";

const LineGraph = ({ numArray }) => {
  return (
    <div className="bars">
      {numArray &&
        numArray.map((num, i) => {
          return (
            <div key={i} className="bar-container">
              {num}
              <div className="bar" style={{ height: num * 2.5 }}></div>
            </div>
          );
        })}
    </div>
  );
};

export default LineGraph;
