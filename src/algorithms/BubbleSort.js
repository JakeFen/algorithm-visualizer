export const BubbleSort = (numArray) => {
  let animations = [];
  let switched = true;
  let loopLength = numArray.length - 1;

  while (switched) {
    switched = false;

    for (var i = 0; i < loopLength; i++) {
      animations.push(JSON.parse(JSON.stringify(numArray)));

      if (numArray[i + 1]) {
        numArray[i].style = "comparing";
        numArray[i + 1].style = "comparing";
        animations.push(JSON.parse(JSON.stringify(numArray)));

        if (numArray[i].value > numArray[i + 1].value) {
          switched = true;
          let temp = numArray[i];
          numArray[i] = numArray[i + 1];
          numArray[i + 1] = temp;
        }

        // Rest the lower num since we're done sorting it
        numArray[i].style = "";
        animations.push(JSON.parse(JSON.stringify(numArray)));
      }

      // After loop the last item in the arr should be the highest num
      // Set last item in arr to sorted
      if (i === loopLength - 1) {
        numArray[i + 1].style = "sorted";
        animations.push(JSON.parse(JSON.stringify(numArray)));
        loopLength--;
      }
    }
  }

  // Make sure the rest of the items in the array are marked as sorted
  for (let i = 0; i <= loopLength; i++) {
    numArray[i].style = "sorted";
  }

  animations.push(JSON.parse(JSON.stringify(numArray)));

  return animations;
};
