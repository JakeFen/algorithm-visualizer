import { SelectedSort } from "./SelectedSort";
import { BubbleSort } from "./BubbleSort";

export const SortingAlgorithm = (method, numArray) => {
  if (method === null) return;
  switch (method) {
    case "bubble":
      return BubbleSort(numArray);

    case "selected":
      return SelectedSort(numArray);

    default:
      return method;
  }
};
