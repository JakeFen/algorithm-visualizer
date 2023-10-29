import { useState } from "react";
import { PathFinding } from "../algorithms/pathFinding/PathFinding";

// Components
import Navbar from "../components/navbar/Navbar";

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
