import { Dijkstra } from "./Dijkstra";
import { AstarSearch } from "./AstarSearch";

export const PathFinding = (algorithm) => {
  switch (algorithm) {
    case "dijkstra":
      return Dijkstra();

    case "astar":
      return AstarSearch();

    default:
      return algorithm;
  }
};
