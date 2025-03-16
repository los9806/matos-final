import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const books = [
  {
    img: './images/Denjichainsawman.png',
    title: 'Chainsaw Man',
    author: 'Tatsuki Fujimoto',
    id: 1,
  },
  {
    img: './images/satoru-gojo-25-662x1024.png',
    title: 'Jujutsu Kaisen',
    author: 'Gege Akumati',
    id: 2,
  },
  {
    img: './images/mugen7.jpg',
    title: 'Samurai Champloo',
    author: 'Shinichiro Watanabe',
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
      <EventExamples />
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    //console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('handle form input');
  };
  const handleButtonInput = () => {
    alert('Thank you for the submission');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted ');
  };
  return <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Contact From</h2>
      <input 
        type='text' 
        name='name'
        onChange={handleFormInput} 
        style={{margin: '1rem 0'}} 
        placeholder='name' />
      <input 
        type='text' 
        name='email' 
        style={{margin: '1rem 0'}} 
        placeholder='email' />
      <button onClick={handleButtonInput}>Submit</button>
    </form>
  </section>;
};

const Book = ({ img, title, author }) => {
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>
      </article>
    );
  };
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

export default BookList;