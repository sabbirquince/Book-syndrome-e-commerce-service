import React from "react";
import { Card } from "react-bootstrap";
import "./bookCard.css";

const BookCard = (props) => {
  const { imgURL, book, author, price } = props.book;

  return (
    <Card className="bg-light book-card shadow">
      <Card.Img className="book-img" variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{book}</Card.Title>
        <Card.Text>
          <small className="text-muted">{author}</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="btn btn-outline-light text-info price">${price}</div>
        <button className="btn btn-info">Buy Now</button>
      </Card.Footer>
    </Card>
  );
};

export default BookCard;
