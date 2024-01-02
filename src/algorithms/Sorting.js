import { BubbleSort } from "./BubbleSort";
import { inserationSort } from "./InsertionSort";
import { SelectionSort } from "./SelectionSort";

export const SortingAlgorithm = (method, numArray) => {
  if (method === null) return;
  switch (method) {
    case "bubble":
      return BubbleSort(numArray);

    case "insertion":
      return inserationSort(numArray);

    case "selection":
      return SelectionSort(numArray);

    // case "merge":

    // case "quick":

    // case "heap":

    default:
      return method;
  }
};
