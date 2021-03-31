import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import Manage from "../Manage/Manage";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="admin">
      <section className="left text-light">
        <h4 className="py-3 mb-3">Admin Panel</h4>

        <div className="admin-options">
          <Link to={`${url}/manage`}>
            <div className=" p-3 pl-5">
              <FontAwesomeIcon icon={faStream} /> Manage Books
            </div>
          </Link>
          <Link to={`${url}/addBook`}>
            <div className=" p-3 pl-5">
              <FontAwesomeIcon icon={faPlus} /> Add Book
            </div>
          </Link>
          <Link to={`${url}/editBook`}>
            <div className=" p-3 pl-5">
              <FontAwesomeIcon icon={faEdit} /> Edit Book
            </div>
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
