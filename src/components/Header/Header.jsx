import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import "./header.css";

function Header() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div>
        <img
          className="header-logo"
          src={Logo}
          alt="Cold Stone logo"
        />
      </div>
      <div
        className="menu-icon"
        onClick={() => setClick(!click)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setClick(!click)}
      >
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
        >
          <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
            Our menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/rewards" className="nav-links" onClick={closeMobileMenu}>
            Rewards
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact us" className="nav-links" onClick={closeMobileMenu}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
