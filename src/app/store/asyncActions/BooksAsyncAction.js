import { setBooks ,setBook} from "../Reducers/BooksReducer";

import axios from "axios";
export const fetchBooks = () => {
    return async (dispatch) => {
        const response = await axios.get("https://potterapi-fedeperin.vercel.app/en/books")
        const data = response.data;
        dispatch(setBooks([...data]));
        
    }
}

export const fetchBook = (index) => {
    return async (dispatch) => {
        const response = await axios.get(`https://potterapi-fedeperin.vercel.app/en/books`,{
            params:{
                index:index
            }
        })
        const data = response.data;
        dispatch(setBook(data))
    }
}
