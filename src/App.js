import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// Pages
import Sorting from "./pages/sorting/Sorting";

function App() {
  return (
    <div className="App">
      <div className="pages">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sorting />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
