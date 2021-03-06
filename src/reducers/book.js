const booksReducer = (state = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    const newBooks = [...state, action.book];
    return newBooks;
  }
  if (action.type === 'REMOVE_BOOK') {
    const newBooks = state.filter((book) => book.id !== action.book.id);
    return newBooks;
  }
  return state;
};

export default booksReducer;
