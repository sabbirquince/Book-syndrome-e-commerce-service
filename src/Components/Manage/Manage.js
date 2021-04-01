import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import BookList from "../BookList/BookList";
import "./manage.css";

const Manage = () => {
  const [booklists, setBookLists] = useState(null);

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
      <h4 className="px-5 py-3 bg-white mb-3">Manage books</h4>

      <section className="lists bg-white">
        <div className="list-header mb-2 text-dark">
          <p>Book</p>
          <p>Author</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {!booklists ? (
          <div className="my-spinner spinner-manage">
            <Spinner animation="grow" className="p-4" variant="info" />
          </div>
        ) : (
          <div className="list-details">
            {booklists?.map((singleBook) => (
              <BookList key={singleBook._id} singleBook={singleBook} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Manage;
<h1>Mange</h1>;
