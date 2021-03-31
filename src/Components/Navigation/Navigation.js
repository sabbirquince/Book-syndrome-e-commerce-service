import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="px-5 py-3 border-bottom" bg="light" expand="lg">
        <Navbar.Brand href="/">
          <h3>Book Syndrome</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Link className="px-3 py-2 text-secondary" to="/home">
              Home
            </Link>
            <Link className="px-3 py-2 text-secondary" to="/orders">
              Orders
            </Link>
            <Link className="px-3 py-2 text-secondary" to="/admin">
              Admin
            </Link>
            <Link className="px-3 py-2 text-secondary" to="/deals">
              Deals
            </Link>
            <Link className="px-3 py-2 text-secondary" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
