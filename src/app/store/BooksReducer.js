const defaultState = {
  books: [],
  book: {},
};

export const BooksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, books: action.payload };

    case "SET_BOOK":
      return { ...state, book: action.payload };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: [
          state.books.filter((book) => {
            if (book.index != action.payload) {
              return book;
            }
          }),
        ],
      };
    default:
      return state;
  }
};

export const setBook = (newBook) => {
  return { type: "SET_BOOK", payload: newBook };
};
export const setBooks = (newBooks) => {
  return { type: "SET_BOOKS", payload: newBooks };
};

export const removeBook = (index) => {
  return { type: "REMOVE_BOOK", payload: index };
};
