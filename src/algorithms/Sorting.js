import { BubbleSort } from "./BubbleSort";
import { HeapSort } from "./HeapSort";
import { InserationSort } from "./InsertionSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";
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

    case "merge":
      return MergeSort(numArray);

    case "quick":
      return QuickSort(numArray);

    case "heap":
      return HeapSort(numArray);

    default:
      return BubbleSort(numArray);
  }
};
