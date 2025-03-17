import React from "react";
import "./style.css";

const books = [
  {
    img: "./images/Denjichainsawman.png",
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    id: 1,
  },
  {
    img: "./images/satoru-gojo-25-662x1024.png",
    title: "Jujutsu Kaisen",
    author: "Gege Akutami",
    id: 2,
  },
  {
    img: "./images/mugen7.jpg",
    title: "Samurai Champloo",
    author: "Shinichiro Watanabe",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
      <EventExamples />
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target.name, e.target.value);
  };

  const handleButtonInput = () => {
    alert("Thank you for the submission");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Contact Form</h2>
        <input
          type="text"
          name="name"
          onChange={handleFormInput}
          placeholder="Name"
          style={{ margin: "1rem 0" }}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default BookList;
