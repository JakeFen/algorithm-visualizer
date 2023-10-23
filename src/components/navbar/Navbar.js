import "./navbar.scss";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          Algorithm Visualizer
        </Link>
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
