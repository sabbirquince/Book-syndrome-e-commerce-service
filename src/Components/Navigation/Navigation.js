import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="px-5 py-3" bg="light" expand="lg">
        <Navbar.Brand href="/">Book Syndrome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="px-3 py-2" to="/home">
              Home
            </Link>
            <Link className="px-3 py-2" to="/orders">
              Orders
            </Link>
            <Link className="px-3 py-2" to="/admin">
              Admin
            </Link>
            <Link className="px-3 py-2" to="/deals">
              Deals
            </Link>
            <Link className="px-3 py-2" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
