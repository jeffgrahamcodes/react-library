import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { BooksContext } from '../BooksContext';

export default function Books() {
  const books = useContext(BooksContext);

  const { bookID } = useParams();

  const book = books.find((book) => book.id === parseInt(bookID));

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}
