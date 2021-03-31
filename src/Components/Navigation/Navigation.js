import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="px-5 navigation">
      <Navbar className="px-5 py-3 " expand="lg">
        <Navbar.Brand href="/">
          <h3 className="text-dark brand">Book Syndrome</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-option">
            <Link className="px-3 py-2 text-secondary text-dark" to="/home">
              Home
            </Link>
            <Link className="px-3 py-2 text-secondary text-dark" to="/orders">
              Orders
            </Link>
            <Link className="px-3 py-2 text-secondary text-dark" to="/admin">
              Admin
            </Link>
            <Link className="px-3 py-2 text-secondary text-dark" to="/deals">
              Deals
            </Link>
            <Link className="px-3 py-2 text-secondary text-dark" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
