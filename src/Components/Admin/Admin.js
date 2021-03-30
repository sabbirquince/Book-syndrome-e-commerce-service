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
          <div className="bg-danger p-3">
            <Link to={`${url}/manage`}>Manage Books</Link>
          </div>
          <div className="bg-danger p-3">
            <Link to={`${url}/addBook`}>Add Book</Link>
          </div>
          <div className="bg-danger p-3">
            <Link to={`${url}/editBook`}>Edit Book</Link>
          </div>
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
