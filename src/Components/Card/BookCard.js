import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./bookCard.css";

const BookCard = (props) => {
  const { imgURL, book, author, price, _id } = props.book;

  return (
    <Card className=" book-card shadow">
      <Card.Img className="book-img" variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{book}</Card.Title>
        <Card.Text>
          <small className="text-muted">{author}</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="btn text-dark price">${price}</div>
        <Link to={`/checkout/${_id}`}>
          <button style={{ fontWeight: "200" }} className="btn btn-dark">
            Buy Now
          </button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default BookCard;
