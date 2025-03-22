import { BooksProvider } from './BookSContext';
import './App.css';

function App() {
  return (
    <BooksProvider>
      <div className="App"></div>
    </BooksProvider>
  );
}

export default App;
