import { useState, useEffect } from "react";
import Bar from "../components/Bar/Bar";
import Navbar from "../components/navbar/Navbar";
import { Dropdown } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SortingAlgorithm } from "../algorithms/sorting/Sorting";

const algorithms = [
  { value: "Insertion Sort", key: "insertion" },
  { value: "Bubble Sort", key: "bubble" },
  { value: "Selected Sort", key: "selected" },
];

const Sorting = () => {
  const [method, setMethod] = useState({
    value: "Insertion Sort",
    key: "insertion",
  });
  const [numArray, setNumArray] = useState([]);
  const [arraySteps, setArraySteps] = useState([]);
  const [colorSteps, setColorSteps] = useState([]);
  const [numArraySize, setNumArraySize] = useState(4);
  const [currentStep, setCurrentStep] = useState(0);
  const [delay, setDelay] = useState(50);
  const [timeouts, setTimeouts] = useState([]);
  const [startGeneratingSteps, setStartGeneratingSteps] = useState(false);

  const generateRandomArray = (numArraySize) => {
    const arr = [];
    for (var i = 0; i < numArraySize; i++) {
      arr.push(Math.floor(Math.random() * 300) + 1);
    }
    return arr;
  };

  const initialize = () => {
    const newArray = generateRandomArray(numArraySize);
    setNumArray(newArray);

    // Revist - Show reset if sort is click or randomize
    setArraySteps([newArray]);
    setCurrentStep(0);
    clearColorSteps();
    clearTimeout();
    setStartGeneratingSteps(true); //invoke start generating steps
  };

  const clearColorSteps = () => {
    // Setting colorSteps to a list of 0 equal to the length of the array
    let blankKey = new Array(numArraySize).fill(0);
    setColorSteps([blankKey]);
  };

  const generateSteps = () => {
    let arr = [...numArray];
    let steps = [numArray.slice()];
    let clrSteps = [...colorSteps];

    SortingAlgorithm(method, numArray, arraySteps, colorSteps);
    setArraySteps(steps);
    setColorSteps(clrSteps);
    setStartGeneratingSteps(false);
  };

  const sort = async () => {
    await generateSteps();
    await algorithmVisual();
  };

  // TODO: Clean up. Most of this probably doesn't need to be here
  const algorithmVisual = () => {
    let timeoutsArray = [];
    let currStep = currentStep;

    if (currentStep == arraySteps.length - 1) return false;

    for (let i = 0; i < arraySteps.length; i++) {
      let timeout = setTimeout(() => {
        setNumArray([...arraySteps[i]]);
        setCurrentStep(currStep++);
      }, delay * (i + 10));
      timeoutsArray.push(timeout);
    }
    setTimeouts(timeoutsArray);
  };

  // const updateNumArray = (value) => {
  //   setNumArraySize(value);
  //   generateRandomArray(numArraySize);
  // };

  // const sortAlgorithm = async () => {
  //   console.log(numArray);
  //   let animations = SortingAlgorithm(method, numArray);

  //   for (let i = 0; i < animations.length; i++) {
  //     setTimeout(() => {
  //       const updatedNums = [...numArray]; // Create a copy of the original items array

  //       const num1 = animations[i][0];
  //       const num2 = animations[i][1];

  //       // Find the indices of items to update in the 'updatedNums' array
  //       const index1 = updatedNums.findIndex((item) => item.id === num1.id);
  //       const index2 = updatedNums.findIndex((item) => item.id === num2.id);

  //       updatedNums[index1] = animations[i][0]; /* updated properties */
  //       updatedNums[index2] = animations[i][1]; /* updated properties */
  //       // console.log(updatedNums);
  //       // setNumArray(updatedNums);
  //     }, i * 100);
  //   }
  // };

  useEffect(() => {
    initialize();
  }, [numArraySize]);

  return (
    <div>
      <Navbar>
        <div className="controls">
          <button onClick={() => sort(numArray)}>Sort</button>
          <button onClick={() => generateRandomArray(numArraySize)}>
            Randomize
          </button>

          <NavDropdown title={method ? method.value : "Algorithms"}>
            {algorithms &&
              algorithms.map((algorithm) => {
                return (
                  <Dropdown.Item
                    key={algorithm.key}
                    onClick={() => {
                      setMethod(algorithm);
                    }}
                  >
                    {algorithm.value}
                  </Dropdown.Item>
                );
              })}
          </NavDropdown>

          <NavDropdown title="Controls">
            <div className="control-item">
              {/* <label htmlFor="array-size">Array Size:</label>
              <input
                type="range"
                name="array-size"
                min="2"
                max="30"
                value={numArraySize}
                onChange={(e) => {
                  updateNumArray(e.target.value);
                }}
              /> */}
            </div>
            {/* <div className="control-item">
              <label htmlFor="speed">Sorting Speed: </label>
              <input type="range" name="speed" min="0" max="11"  />
            </div> */}
          </NavDropdown>
        </div>
      </Navbar>

      <div className="container bars">
        {numArray &&
          numArray.map((num, index) => {
            return (
              <Bar
                key={index}
                index={index}
                length={num}
                width={"40px"}
                color={colorSteps[currentStep][index]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Sorting;
