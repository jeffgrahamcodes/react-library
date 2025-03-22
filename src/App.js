import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import Book from './components/Book';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/books/:bookID" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
