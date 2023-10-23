import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Dropdown } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PathFinding } from "../algorithms/pathFinding/PathFinding";

const algorithms = [
  { value: "Dijkstra's Algorithm", key: "dijkstra" },
  { value: "A* Search", key: "astar" },
];

const Pathfinding = () => {
  const [method, setMethod] = useState(null);

  return (
    <div>
      <Navbar>
        <div className="controls">
          <button onClick={() => PathFinding(method?.key)}>Find Path</button>
          <button>Reset</button>

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

          <div className="control-item">
            <label htmlFor="speed">Speed: </label>
            <input type="range" name="speed" min="0" max="11" />
          </div>
        </div>
      </Navbar>
      <div className="container pathfinding">
        <h1>Pathfinding</h1>
      </div>
    </div>
  );
};

export default Pathfinding;
