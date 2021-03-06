import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="root">
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <Router>
          <Navigation />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
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

            <PrivateRoute path="/checkout/:bookId">
              <Checkout />
            </PrivateRoute>
          </Switch>

          <Footer />
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
