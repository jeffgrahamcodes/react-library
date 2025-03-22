import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { BooksProvider } from './BooksContext';
import { PrivateRoute } from './components/PrivateRoute';
import Books from './components/Books';
import Book from './components/Book';
import NotFound from './components/NotFound';
import SecretBooks from './components/SecretBooks';
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
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SecretBooks />} />}
          />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
