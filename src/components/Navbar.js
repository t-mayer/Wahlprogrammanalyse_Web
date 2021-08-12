import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChartBar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faChartBar} />
        </div>
        <div className="navbar-container">
          <div className="menu-item" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} size="2x" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="navlinks"
              onClick={closeMobileMenu}
            >
              <li className="nav-item">Home</li>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              className="navlinks"
              onClick={closeMobileMenu}
            >
              <li className="nav-item">Über</li>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none" }}
              className="navlinks"
              onClick={closeMobileMenu}
            >
              <li className="nav-item">Kontakt</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
