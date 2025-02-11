"use client";
import BooksList from "@/components/main/BooksList/BooksList";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { setBooks ,removeBook} from "../store/Slices/BooksSlice";
import { useGetBooksQuery } from "../store/Slices/AsyncBookSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.Books.books);
  const {data,error,isLoading} = useGetBooksQuery();
  if(error){
    alert(error);
  }
  else if(!isLoading){
    setBook(data);
  }
  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");
  const newBooks = useSearch(searchBooks, selectBooks, books);
  function setBook(newBooks) {
    dispatch(setBooks(newBooks));
  }

  function DeleteBook(index) {
    dispatch(removeBook(index));
  }
  return (
    <BooksList
      setBooks={setBook}
      books={newBooks}
      DeleteBook={DeleteBook}
      searchBooks={searchBooks}
      setSearchBooks={setSearchBooks}
      selectBooks={selectBooks}
      setSelectBooks={setSelectBooks}
    />
  );
}
