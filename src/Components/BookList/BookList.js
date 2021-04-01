import React from "react";
import "./bookList.css";
import deleteIcon from "../../icons/delete.png";

const BookList = (props) => {
  const { book, author, price, _id } = props.singleBook;

  const handleDeleteBook = (id, event) => {
    const list = event.target.parentNode.parentNode;
    event.stopPropagation();
    list.style.backgroundColor = "lightcoral";

    setTimeout(() => {
      list.style.display = "none";
    }, 1200);

    fetch(`https://young-lowlands-07161.herokuapp.com/deleteBook?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="list mb-2 book-list shadow-sm">
      <small className="text-dark">{book}</small>
      <small className="text-secondary" style={{ fontWeight: "400" }}>
        {author}
      </small>
      <small className="text-dark">${price}</small>
      <small className="text-dark">
        <img
          className="deleteIcon"
          onClick={(event) => handleDeleteBook(_id, event)}
          src={deleteIcon}
          alt=""
        />
      </small>
    </div>
  );
};

export default BookList;
