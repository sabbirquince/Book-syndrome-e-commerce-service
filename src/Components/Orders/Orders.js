import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { LoginContext } from "../../App";
import OrderCard from "../OrderCard/OrderCard";
import "./orders.css";

const Orders = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [myOrders, setMyOrders] = useState(null);

  const { email } = loggedIn;
  const userEmail = { email };

  fetch("https://young-lowlands-07161.herokuapp.com/myOrder", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userEmail),
  })
    .then((res) => res.json())
    .then((data) => setMyOrders(data));

  return (
    <div className="orders">
      <h3 className="p-3 text-dark">Your orders</h3>
      {!myOrders ? (
        <div className="my-spinner spinner-order">
          <Spinner animation="grow" className="p-4" variant="info" />
        </div>
      ) : (
        <ol>
          {myOrders?.map((singleOrder) => (
            <li className="mb-2" key={singleOrder._id}>
              <OrderCard singleOrder={singleOrder} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Orders;
