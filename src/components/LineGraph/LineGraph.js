const LineGraph = ({ numArray }) => {
  return (
    <div className="line-graph">
      {numArray &&
        numArray.map((num, index) => {
          return (
            <div key={index} className="line-graph__bar">
              {num}
            </div>
          );
        })}
    </div>
  );
};

export default LineGraph;
