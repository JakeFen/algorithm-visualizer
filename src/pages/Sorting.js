import { useState } from "react";
import LineGraph from "../components/LineGraph/LineGraph";
import Navbar from "../components/navbar/Navbar";
import { Dropdown } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SortingAlgorithm } from "../algorithms/sorting/Sorting";

const algorithms = [
  { value: "Selected Sort", key: "selected" },
  { value: "Bubble Sort", key: "bubble" },
];

const Sorting = () => {
  const [method, setMethod] = useState(null);

  return (
    <div>
      <Navbar>
        <div className="controls">
          <button onClick={() => SortingAlgorithm(method?.key)}>Sort</button>
          <button>Randomize</button>

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
              <input type="range" name="array-size" min="0" max="11" />
            </div>
            <div className="control-item">
              <label htmlFor="speed">Sorting Speed: </label>
              <input type="range" name="speed" min="0" max="11" />
            </div>
          </NavDropdown>
        </div>
      </Navbar>

      <div className="container sorting">
        <LineGraph />
      </div>
    </div>
  );
};

export default Sorting;
