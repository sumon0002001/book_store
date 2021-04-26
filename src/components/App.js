import React from 'react';
import BookForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="container">
      <BooksList />
      <BookForm />
    </div>

  );
}

export default App;
