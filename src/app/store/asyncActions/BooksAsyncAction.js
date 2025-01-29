import { setBooks } from "../BooksReducer";
import axios from "axios";
export const fetchBooks = () => {
  return async (dispatch) => {
    const url =
    "https://potterapi-fedeperin.vercel.app/en/books";
    const response = await axios.get(url)
    const data = [...response.data];
    dispatch(setBooks(data));
    console.log("data",data);

  };
};
