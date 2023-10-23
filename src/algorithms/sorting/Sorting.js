import { SelectedSort } from "./SelectedSort";
import { BubbleSort } from "./BubbleSort";

export const SortingAlgorithm = (algorithm) => {
  switch (algorithm) {
    case "selected":
      return SelectedSort();

    case "bubble":
      return BubbleSort();

    default:
      return algorithm;
  }
};
