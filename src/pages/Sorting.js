import { useState, useEffect } from "react";
import LineGraph from "../components/LineGraph/LineGraph";
import Navbar from "../components/navbar/Navbar";
import { Dropdown } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SortingAlgorithm } from "../algorithms/sorting/Sorting";

const algorithms = [
  { value: "Bubble Sort", key: "bubble" },
  { value: "Selected Sort", key: "selected" },
];

const Sorting = () => {
  const [method, setMethod] = useState(null);
  const [numArray, setNumArray] = useState([]);
  const [numArraySize, setNumArraySize] = useState(6);

  useEffect(() => {
    randomizeNumArray(numArraySize);
  }, [numArraySize]);

  const updateNumArray = (value) => {
    setNumArraySize(value);
    randomizeNumArray(numArraySize);
  };

  const randomizeNumArray = (numArraySize) => {
    const arr = [];
    for (var i = 0; i < numArraySize; i++) {
      arr.push(Math.floor(Math.random() * 300) + 1);
    }
    setNumArray(arr);
  };

  return (
    <div>
      <Navbar>
        <div className="controls">
          <button onClick={() => SortingAlgorithm(method?.key)}>Sort</button>
          <button onClick={() => randomizeNumArray(numArraySize)}>
            Randomize
          </button>

          <NavDropdown title={method ? method.value : "Algorithms"}>
            {algorithms &&
              algorithms.map((algorithm) => {
                return (
                  <Dropdown.Item
                    key={algorithm.key}
                    onClick={() => {
                      setMethod(algorithm);
                    }}
                  >
                    {algorithm.value}
                  </Dropdown.Item>
                );
              })}
          </NavDropdown>

          <NavDropdown title="Controls">
            <div className="control-item">
              <label htmlFor="array-size">Array Size:</label>
              <input
                type="range"
                name="array-size"
                min="2"
                max="30"
                value={numArraySize}
                onChange={(e) => {
                  updateNumArray(e.target.value);
                }}
              />
            </div>
            {/* <div className="control-item">
              <label htmlFor="speed">Sorting Speed: </label>
              <input type="range" name="speed" min="0" max="11"  />
            </div> */}
          </NavDropdown>
        </div>
      </Navbar>

      <div className="container sorting">
        <LineGraph numArray={numArray} />
      </div>
    </div>
  );
};

export default Sorting;
