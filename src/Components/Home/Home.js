import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BookCard from "../Card/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4022/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {books.map((book) => (
          <div className="col-lg-4 mb-4">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
