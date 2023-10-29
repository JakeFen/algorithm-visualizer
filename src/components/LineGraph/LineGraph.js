import "./line-graph.scss";

const LineGraph = ({ numArray }) => {
  return (
    <div className="line-graph">
      {numArray &&
        numArray.map((num, index) => {
          return (
            <div>
              <div
                key={index}
                className={`line-graph__bar ${num.style}`}
                style={{ height: num.value * 3, order: index }}
              ></div>
              {num.value}
            </div>
          );
        })}
    </div>
  );
};

export default LineGraph;
