import { SelectedSort } from "./SelectedSort";
import { BubbleSort } from "./BubbleSort";
import InsertionSort from "./InsertionSort/InsertionSort";

export const SortingAlgorithm = (method, numArray, arraySteps, colorSteps) => {
  if (method === null) return;
  switch (method.key) {
    case "insertion":
      return InsertionSort(numArray, arraySteps, colorSteps);

    case "bubble":
      return BubbleSort(numArray);

    case "selected":
      return SelectedSort(numArray);

    default:
      return method;
  }
};
