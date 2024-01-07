import { BubbleSort } from "./BubbleSort";
import { InserationSort } from "./InsertionSort";
import { SelectionSort } from "./SelectionSort";

export const SortingAlgorithm = (method, numArray) => {
  if (method === null) return;
  switch (method) {
    case "bubble":
      return BubbleSort(numArray);

    case "insertion":
      return InserationSort(numArray);

    case "selection":
      return SelectionSort(numArray);

    default:
      return BubbleSort(numArray);
  }
};
