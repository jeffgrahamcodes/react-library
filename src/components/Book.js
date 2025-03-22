import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { BooksContext } from '../BooksContext';

export default function Books() {
  const books = useContext(BooksContext);

  const bookID = useParams();

  return (
    <div>
      <h2>BOOK</h2>
    </div>
  );
}
