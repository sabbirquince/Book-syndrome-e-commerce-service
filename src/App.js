import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

//git remote add origin https://github.com/Porgramming-Hero-web-course/full-stack-client-sabbirquince.git

export default App;
