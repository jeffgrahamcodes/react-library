import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import './App.css';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
