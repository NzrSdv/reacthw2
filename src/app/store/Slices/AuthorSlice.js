const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  authors: [
    {
      id: 1,
      author_name: "Alexander Duma",
      famous_book: "three musketeers",
      author_photo:
        "https://images.pexels.com/photos/9268697/pexels-photo-9268697.jpeg",
    },
  ],
};

const AuthorSlice = createSlice({
  name: "Authors",
  initialState,
  reducers: {
    setAuthors: (state, action) => {
      state.authors = action.payload;
    },
    deleteAuthor: (state, action) => {
      state.authors = state.authors.filter((author) => {
        if(author.id != action.payload){
            return author;
        }
      });
    },
  },
});

export const { setAuthors, deleteAuthor } = AuthorSlice.actions;
export default AuthorSlice.reducer;
