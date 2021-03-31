import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import Manage from "../Manage/Manage";
import "./Admin.css";

const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="admin">
      <section className="left bg-success text-center">
        <h2 className="py-4">Admin Panel</h2>

        <div className="admin-options">
          <Link to={`${url}/manage`}>
            <div className="bg-danger p-3">Manage Books</div>
          </Link>
          <Link to={`${url}/addBook`}>
            <div className="bg-danger p-3">Add Book</div>
          </Link>
          <Link to={`${url}/editBook`}>
            <div className="bg-danger p-3">Edit Book</div>
          </Link>
        </div>
      </section>

      <section className="right bg-light">
        <Switch>
          <Route exact path={path}>
            <Manage />
          </Route>

          <Route path={`${path}/manage`}>
            <Manage />
          </Route>

          <Route path={`${path}/addBook`}>
            <AddBook />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Admin;
