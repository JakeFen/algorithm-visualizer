import "./sorting.scss";
import { useEffect, useState } from "react";
import { SortingAlgorithm } from "../../algorithms/sorting/Sorting";

// Components
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Navbar from "../../components/navbar/Navbar";
import LineGraph from "../../components/LineGraph/LineGraph";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const algorithms = [{ value: "Bubble Sort", key: "bubble" }];

const Sorting = () => {
  const [method, setMethod] = useState({ value: "Bubble Sort", key: "bubble" });
  const [numArray, setNumArray] = useState();
  const [numArraySize, setNumArraySize] = useState(15);
  const [delay, setDelay] = useState(15);

  const randomize = (numArraySize) => {
    const arr = [];

    for (var i = 0; i < numArraySize; i++) {
      arr.push({ value: Math.floor(Math.random() * 250) + 10, style: "" });
    }
    setNumArray(arr);
  };

  const handleSort = (method, array) => {
    let animations = SortingAlgorithm(method.key, array);
    sortAnimation(animations);
  };

  const getDelay = (arraySize) => {
    return Math.floor(200 / arraySize);
  };

  const sortAnimation = (animations) => {
    for (var i = 0; i < animations.length; i++) {
      (function (index) {
        setTimeout(() => {
          setNumArray(animations[index]);
        }, delay * (index + 1));
      })(i);
    }
  };

  const handleChange = (event) => {
    const algorithm = algorithms.find(
      (item) => item.key === event.target.value
    );
    setMethod(algorithm);
  };

  useEffect(() => {
    const initialize = () => {
      randomize(numArraySize);
      setDelay(getDelay(numArraySize));
    };
    initialize();
  }, [numArraySize]);

  return (
    <div>
      <Navbar>
        <div className="controls">
          <button onClick={() => handleSort(method, numArray)}>Sort</button>
          <button onClick={randomize}>Randomize</button>

          <FormControl size="small">
            <Select value={method.key} displayEmpty onChange={handleChange}>
              {algorithms &&
                algorithms.map((algorithm) => {
                  return (
                    <MenuItem key={algorithm.key} value={algorithm.key}>
                      {algorithm.value}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
      </Navbar>

      <main className="sorting container">
        <Box sx={{ width: 250 }} className="slider__container">
          <Typography id="track-false-range-slider" gutterBottom>
            Increase Array Size and Speed
          </Typography>
          <Slider
            min={5}
            max={40}
            value={numArraySize}
            onChange={(e) => setNumArraySize(e.target.value)}
          />
        </Box>

        <LineGraph numArray={numArray} />
      </main>
    </div>
  );
};

export default Sorting;
