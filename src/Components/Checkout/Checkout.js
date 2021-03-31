import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { LoginContext } from "../../App";
import "./checkout.css";

const Checkout = () => {
  const { bookId } = useParams();

  const [specBook, setSpecBook] = useState({});
  const { book, author, price } = specBook;

  useEffect(() => {
    fetch(`http://localhost:4022/checkout/${bookId}`)
      .then((res) => res.json())
      .then((data) => setSpecBook(data));
  }, [bookId]);

  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  console.log(loggedIn);

  const handleCheckout = () => {
    const { email } = loggedIn;
    const date = new Date();
    const placedOrder = { email, book, author, price, date };

    fetch("http://localhost:4022/placedOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placedOrder),
    });
  };

  return (
    <div className="checkout">
      <h3 className="text-dark">Checkout</h3>

      <div className="my-checkout-card bg-white shadow">
        <div className="text-secondary">
          <h6>Description</h6>
          <h6>Quantity</h6>
          <h6>Price</h6>
        </div>

        <div className="text-dark">
          <h6>
            {book} <br /> <small>by {author}</small>
          </h6>
          <h6>1</h6>
          <h6>${price}</h6>
        </div>

        <div className="text-dark bg-light">
          <h6 className="c-footer">Total</h6>
          <h6 className="c-footer">${price}</h6>
        </div>
      </div>

      <div className="checkout-btn mt-3">
        <button
          onClick={handleCheckout}
          className="btn shadow btn-dark text-light px-3 py-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
