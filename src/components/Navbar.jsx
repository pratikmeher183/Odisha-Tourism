import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/places">Places to visit</Link>
      <Link to="/culture">Culture</Link>
      <Link to="/time">Best Time</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;