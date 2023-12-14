import { BubbleSort } from "./BubbleSort";
import { inserationSort } from "./InsertionSort";

export const SortingAlgorithm = (method, numArray) => {
  if (method === null) return;
  switch (method) {
    case "bubble":
      return BubbleSort(numArray);

    case "insertion":
      return inserationSort(numArray);

    default:
      return method;
  }
};
