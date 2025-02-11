
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    books: [],
  book: {},
}

const BooksSlice = createSlice({
    name:"Books",
    initialState,
    reducers:{
        setBooks:(state,action) => {
            state.books = action.payload;
        },
        setBook:(state,action) => {
            state.book = action.payload;
        }
        ,removeBook:(state,action)=> {
            state.books = state.books.filter(book => {
                if(book.index != action.payload){
                    return book;
                }
            });
        }
    }
})


export const {setBooks,setBook,removeBook} = BooksSlice.actions;
export default BooksSlice.reducer;