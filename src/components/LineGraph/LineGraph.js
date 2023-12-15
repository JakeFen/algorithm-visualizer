import "./line-graph.scss";

const LineGraph = ({ numArray }) => {
  return (
    <div className="line-graph">
      {numArray &&
        numArray.map((num, index) => {
          return (
            <div key={index} className="line-graph__container">
              <div
                className={`line-graph__bar ${num.style}`}
                style={{ height: 23 + num.value, order: index }}
              >
                <p className="line-graph__bar--value">{num.value}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LineGraph;
