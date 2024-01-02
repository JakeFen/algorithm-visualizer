export const inserationSort = (numArray) => {
  let animations = [];

  for (let i = 0; i < numArray.length; i++) {
    let currElement = numArray[i];
    let prevIndex = i - 1;

    currElement.style = "pulled";
    if (numArray[prevIndex]) numArray[prevIndex].style = "comparing";

    animations.push(JSON.parse(JSON.stringify(numArray)));

    while (prevIndex >= 0 && numArray[prevIndex].value > currElement.value) {
      numArray[prevIndex].style = "sorted";
      animations.push(JSON.parse(JSON.stringify(numArray)));

      numArray[prevIndex + 1] = numArray[prevIndex];
      numArray[prevIndex] = currElement;
      prevIndex--;

      if (numArray[prevIndex]) {
        numArray[prevIndex].style = "comparing";
        animations.push(JSON.parse(JSON.stringify(numArray)));
      }
    }

    numArray[prevIndex + 1] = currElement;

    currElement.style = "sorted";
    if (numArray[prevIndex]) numArray[prevIndex].style = "sorted";
    animations.push(JSON.parse(JSON.stringify(numArray)));
  }

  return animations;
};
