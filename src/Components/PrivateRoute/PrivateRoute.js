import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { LoginContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
