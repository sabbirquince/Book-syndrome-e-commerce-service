import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookList from "../BookList/BookList";
import "./manage.css";

const Manage = () => {
  const [booklists, setBookLists] = useState([]);

  useEffect(() => {
    axios
      .get("https://young-lowlands-07161.herokuapp.com/books")
      .then((response) => {
        setBookLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3 className="px-5 py-3 bg-white mb-3">Manage books</h3>

      <section className="lists bg-white">
        <div className="list-header mb-2 text-dark">
          <p>Book</p>
          <p>Author</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        <div className="list-details">
          {booklists.map((singleBook) => (
            <BookList singleBook={singleBook} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Manage;
<h1>Mange</h1>;
