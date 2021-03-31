import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../App";
import OrderCard from "../OrderCard/OrderCard";
import "./orders.css";

const Orders = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [myOrders, setMyOrders] = useState([]);

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
      <h3 className="p-3">Your orders</h3>
      <ol>
        {myOrders.map((singleOrder) => (
          <li className="mb-2" key={singleOrder._id}>
            <OrderCard singleOrder={singleOrder} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Orders;
