import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddBook from "../AddBook/AddBook";
import Manage from "../Manage/Manage";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  let { path, url } = useRouteMatch();

  const [active, setActive] = useState(1);

  return (
    <div className="admin">
      <section className="left text-light">
        <h4 className="py-4 mb-2">Admin Panel</h4>

        <div className="admin-options">
          <Link to={`${url}/manage`}>
            <div
              onClick={() => setActive(1)}
              className={
                active === 1
                  ? "p-3 pl-5 active-admin-tab"
                  : "p-3 pl-5 inactive-admin-tab"
              }
            >
              <FontAwesomeIcon icon={faStream} />
              <span className="px-3">Manage Books</span>
            </div>
          </Link>
          <Link to={`${url}/addBook`}>
            <div
              onClick={() => setActive(2)}
              className={
                active === 2
                  ? "p-3 pl-5 active-admin-tab"
                  : "p-3 pl-5 inactive-admin-tab"
              }
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="px-3">Add Book</span>
            </div>
          </Link>
          <Link to={`${url}/editBook`}>
            <div
              onClick={() => setActive(3)}
              className={
                active === 3
                  ? "p-3 pl-5 active-admin-tab"
                  : "p-3 pl-5 inactive-admin-tab"
              }
            >
              <FontAwesomeIcon icon={faEdit} />
              <span className="px-3">Edit Book</span>
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
