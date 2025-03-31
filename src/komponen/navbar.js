// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>News App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/sports">Sports</Link></li>
        <li><Link to="/category/technology">Technology</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
