import { useEffect, useState } from "react";
import LineGraph from "../components/LineGraph/LineGraph";
import { SortingAlgorithm } from "../algorithms/sorting/Sorting";

const Sorting = () => {
  const [method, setMethod] = useState("bubble");
  const [numArray, setNumArray] = useState();

  const initialize = () => {
    randomize();
  };

  const randomize = () => {
    const arr = [];

    for (var i = 0; i < 15; i++) {
      arr.push({ value: Math.floor(Math.random() * 300) + 1, style: "" });
    }
    setNumArray(arr);
  };

  const handleSort = (method, array) => {
    let animations = SortingAlgorithm(method, array);
    sortAnimation(animations);
  };

  const sortAnimation = (animations) => {
    for (var i = 0; i < animations.length; i++) {
      (function (index) {
        setTimeout(() => {
          setNumArray(animations[index]);
        }, i * 10);
      })(i);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <div>
        <button onClick={randomize}>Randomize</button>
        <button onClick={() => handleSort(method, numArray)}>Sort</button>
      </div>

      <div></div>
      <LineGraph numArray={numArray} />
    </div>
  );
};

export default Sorting;
