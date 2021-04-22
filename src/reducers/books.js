const booksReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_BOOK:
      const newBooks = [...state, action.playload];  
      return newBooks;
    case types.REMOVE_BOOK:
      const newBooks = [...state].filter((element) => element.id !== action.payload.id);
      return newBooks;
    default:
      return state;
  }
}

export default booksReducer;
