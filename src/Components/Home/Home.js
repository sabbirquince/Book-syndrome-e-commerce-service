import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import BookCard from "../Card/BookCard";
import "./home.css";

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get("https://young-lowlands-07161.herokuapp.com/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-3 home">
      {!books ? (
        <div className="my-spinner spinner-home">
          <Spinner animation="grow" className="p-4" variant="info" />
        </div>
      ) : (
        <div className="row">
          {books?.map((book) => (
            <div key={book._id} className="col-lg-4 mb-4 ">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
