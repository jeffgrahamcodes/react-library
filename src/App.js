import {
  BrowserRouter as Router,
  Routes,
  Route,
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
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
