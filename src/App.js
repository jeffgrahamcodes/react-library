import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/books/:id" element={<Book />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
