import { useEffect, useState } from "react";
import LineGraph from "../components/LineGraph/LineGraph";

const numArray = ["1", "2", "3", "4"];

const Sort = () => {
  const [method, setMethod] = useState("bubble");
  const [numArray, setNumArray] = useState();
  const [timeouts, setTimeouts] = useState([]);

  const initialize = () => {
    randomize();
    clearTimeouts();
  };

  const randomize = () => {
    const arr = [];

    for (var i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 300) + 1);
    }
    setNumArray(arr);
  };

  // clear timeouts
  const clearTimeouts = () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setTimeouts([]);
  };

  const handleSort = (method, array) => {
    switch (method) {
      case "bubble": {
        let animations = bubbleSort(array);

        for (var i = 0; i < animations.length; i++) {
          (function (index) {
            setTimeout(() => {
              setNumArray(animations[index]);
            }, i * 200);
          })(i);
        }
      }
      default:
        return;
    }
  };

  const bubbleSort = (numArray) => {
    let arr = [...numArray];

    let animations = [];
    let switched = true;

    while (switched) {
      switched = false;

      for (var i = 0; i < arr.length; i++) {
        animations.push([...arr]);

        if (arr[i + 1]) {
          if (arr[i] > arr[i + 1]) {
            switched = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }
      }
    }

    return animations;
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

export default Sort;
