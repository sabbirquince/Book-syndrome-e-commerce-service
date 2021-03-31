import React from "react";
import "./addBook.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [bookSave, setBookSave] = useState(false);

  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState(null);

  const handleImgUpload = (event) => {
    setLoading(true);
    const img = event.target.files[0];
    const imgData = new FormData();
    imgData.set("key", "246e96dcf34f468ba529bf1e642a576d");
    imgData.append("image", img);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((response) => {
        setImgURL(response.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const bookInfo = { ...data, imgURL };

    fetch("https://young-lowlands-07161.herokuapp.com/addBook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookSave(data);
        setTimeout(() => setBookSave(false), 7000);
      });
  };

  return (
    <div className="addBook">
      <h1 className="bg-white text-center p-3">Add a book</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="book-form bg-white shadow-sm">
          <div className="form-top">
            <input
              name="book"
              placeholder="Book name"
              ref={register({ required: true })}
            />
            {errors.book && <span>This field is required</span>}

            <input
              name="author"
              placeholder="Author name"
              ref={register({ required: true })}
            />
            {errors.author && <span>This field is required</span>}
          </div>

          <div className="form-bottom">
            <input
              name="price"
              placeholder="Add Price"
              ref={register({ required: true })}
            />
            {errors.price && <span>This field is required</span>}

            <input type="file" name="image" onChange={handleImgUpload} />
          </div>

          {loading && (
            <p className="text-secondary">Image is being uploaded...</p>
          )}
        </section>

        {imgURL ? (
          <input className="save-btn" type="submit" value="Save Book" />
        ) : (
          <p className="btn-disabled text-center">Save Book</p>
        )}

        {bookSave && (
          <p className="text-dark text-center">
            Book is saved successfully, try adding another!
          </p>
        )}
      </form>
    </div>
  );
};

export default AddBook;
