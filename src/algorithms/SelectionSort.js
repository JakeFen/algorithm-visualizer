export const SelectionSort = (numArray) => {
  let animations = [];

  for (let i = 0; i < numArray.length; i++) {
    let min_index = i;

    numArray[min_index].style = "comparing";
    animations.push(JSON.parse(JSON.stringify(numArray)));

    for (let j = i + 1; j < numArray.length; j++) {
      numArray[j].style = "comparing";
      animations.push(JSON.parse(JSON.stringify(numArray)));

      if (numArray[j].value < numArray[min_index].value) {
        let temp = min_index;

        // Update min index
        min_index = j;

        // Compare new min index
        numArray[temp].style = "";
        numArray[min_index].style = "comparing";
        animations.push(JSON.parse(JSON.stringify(numArray)));
      } else {
        numArray[j].style = "";
        animations.push(JSON.parse(JSON.stringify(numArray)));
      }
    }

    // Swap
    let temp = numArray[i];
    numArray[i] = numArray[min_index];
    numArray[i].style = "sorted";
    numArray[min_index] = temp;

    animations.push(JSON.parse(JSON.stringify(numArray)));
  }

  return animations;
};
