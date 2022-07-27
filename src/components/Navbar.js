import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <Link to="/">
            <img className="logo" src={logo} alt=""></img>
          </Link>
          <ul className="navbar-item-cont">
            <Link to="/about">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
