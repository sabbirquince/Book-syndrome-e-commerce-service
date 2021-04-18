import React, { useState } from "react";
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import logo from "../../icons/logo.png";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  const [activeClass, setActiveClass] = useState(null);

  return (
    <div className="px-md-5 navigation shadow-sm">
      <Navbar className="px-lg-5 py-3 " expand="lg">
        <Navbar.Brand href="/">
          <h3 className=" text-dark brand">
            <img className="logo pr-1" src={logo} alt="" /> Book Syndrome
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-option">
            <Link
              onClick={() => setActiveClass(0)}
              className={
                activeClass === 0
                  ? "px-3 py-2 text-dark active-tab"
                  : "px-3 py-2 text-dark"
              }
              to="/home"
            >
              Home
            </Link>
            <Link
              onClick={() => setActiveClass(1)}
              className={
                activeClass === 1
                  ? "px-3 py-2 text-dark active-tab"
                  : "px-3 py-2 text-dark"
              }
              to="/orders"
            >
              Orders
            </Link>
            <Link
              onClick={() => setActiveClass(2)}
              className={
                activeClass === 2
                  ? "px-3 py-2 text-dark active-tab"
                  : "px-3 py-2 text-dark"
              }
              to="/admin"
            >
              Admin
            </Link>

            {!loggedIn ? (
              <Link className="px-3 py-2 text-dark login-btn" to="/login">
                Login
              </Link>
            ) : (
              <Link
                onClick={handleLogOut}
                className="px-3 py-2 text-dark login-btn"
                to="/home"
              >
                Log out
              </Link>
            )}

            <Link to="/home" className="px-3 mt-3 mt-md-0 text-dark">
              <img className="user-img" src={loggedIn.photoURL} alt="" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
