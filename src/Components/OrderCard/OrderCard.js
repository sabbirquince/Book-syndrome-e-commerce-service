import React from "react";
import "./orderCard.css";

const OrderCard = (props) => {
  const { book, author, price, date, imgURL } = props.singleOrder;

  return (
    <div className="order-card">
      <div>
        <img className="order-img" src={imgURL} alt="" />
      </div>

      <div>
        <h6>Book: {book}</h6>
        <small> by {author}</small>
      </div>

      <div>
        <h6>price: ${price}</h6>
        <small>Qty: 1 </small>
      </div>

      <div className="card-last">Placed: {date}</div>
    </div>
  );
};

export default OrderCard;
