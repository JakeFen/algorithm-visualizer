const BLUE = 0,
  YELLOW = 1,
  PURPLE = 2,
  RED = 3,
  PINK = 5,
  GREEN = 4;

//   Test with export on const
const InsertionSort = (numArray, arraySteps, colorSteps) => {
  console.log("arraySteps: ", arraySteps);
  console.log("colorSteps: ", colorSteps);

  let colorKey = [...colorSteps[0]];

  for (let i = 0; i < numArray.length; i++) {
    let minNum = i;
    arraySteps.push(numArray.slice());
    colorKey[i] = YELLOW;
    colorSteps.push(colorKey.slice());
    for (let j = i + 1; j < numArray.length; j++) {
      // Set minNum to lower num between current minNum and j
      // minNum = Math.min(numArray[j], numArray[minNum]);
      minNum = numArray[j] < numArray[minNum] ? j : minNum;

      arraySteps.push(numArray.splice());
      colorKey[j] = PURPLE;
      colorSteps.push(colorKey.slice());
      console.log(colorKey, colorKey.slice());
      colorKey[j] = BLUE; // revert
    }

    // swap nums
    arraySteps.push(numArray.slice()); // before swap
    colorKey[i] = PINK;
    colorKey[minNum] = PINK;
    colorSteps.push(colorKey.slice());

    const temp = numArray[minNum];
    numArray[minNum] = numArray[i];
    numArray[i] = temp;
    arraySteps.push(numArray.slice());
    colorKey[i] = GREEN;
    colorKey[minNum] = minNum != i ? BLUE : GREEN; // revert
    colorSteps.push(colorKey.splice());
  }
  arraySteps.push(numArray.splice());
  colorSteps.push(colorKey.splice().fill(4));

  console.log("arraySteps: ", arraySteps);
  console.log("colorSteps: ", colorSteps);
};

export default InsertionSort;
