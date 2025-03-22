import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import './App.css';

function App() {
  return (
    <BooksProvider>
      <Books />
    </BooksProvider>
  );
}

export default App;
