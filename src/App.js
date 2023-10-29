import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// Pages
import Sorting from "./pages/sorting/Sorting";
import Pathfinding from "./pages/Pathfinding";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div className="pages">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/pathfinding" element={<Pathfinding />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
