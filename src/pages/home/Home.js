import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="container home">
      <div>
        <h1>Algorithm Visualizer</h1>
        <p className="description">
          This application is to provide a visual representation of how some
          comment algorithms function
        </p>
        <ul>
          <li>
            <Link to="/pathfinding">
              <img src="https://fakeimg.pl/200x200" alt="" />
            </Link>
            <h2>Pathfinding</h2>
          </li>
          <li>
            <Link to="/sorting">
              <img src="https://fakeimg.pl/200x200" alt="" />
            </Link>
            <h2>Sorting</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
