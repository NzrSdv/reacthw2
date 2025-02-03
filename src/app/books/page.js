"use client";
import BooksList from "@/components/main/BooksList/BooksList";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { setBooks } from "../store/Reducers/BooksReducer";
import { fetchBooks } from "../store/asyncActions/BooksAsyncAction";
import { useDispatch, useSelector } from "react-redux";
export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.Books.books);
  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");
  const newBooks = useSearch(searchBooks, selectBooks, books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  function setBook(newBooks) {
    dispatch(setBooks(newBooks));
  }

  function DeleteBook(index) {
    setBook(
      [...books].filter((element) => {
        if (element.index != index) {
          return element;
        }
      })
    );
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
