const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    books: [],
  book: {},
}

const BooksSlice = createSlice({
    name:"Books",
    initialState,
    reducers:{
        setBooks:(Books) => {
            state.books = Books;
        },
        setBook:(Book) => {
            state.book = Book;
        }
        ,removeBook:(index)=> {
            state.books = state.books.filter(book => book.index != index);
        }
    }
})


export const {setBooks,setBook,removeBook} = BooksSlice.actions;
export default BooksSlice.reducer;