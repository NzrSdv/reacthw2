"use client";
import React, { useEffect, useState } from "react";
import Main from "@/components/main/Main";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";
// const url = "https://potterapi-fedeperin.vercel.app/en/books";
import { setAuthors ,DeleteAuthor} from "./store/AuthorReducer";
import { fetchBooks } from "./store/asyncActions/BooksAsyncAction";
import { removeBook, setBooks } from "./store/BooksReducer";

// import axios from "axios";
export default function Home() {
  //needed variables constants and etc.
  const dispatch = useDispatch();
  const router = useRouter();
  //states with redux
  const isAuthorised = useSelector((state) => state.Authentification.isAuthorised);

  const books = useSelector((state) => state.Books.books);

  //dispatch Functions

  function setBook(newBooks) {
    dispatch(setBooks(newBooks));
  }
  function DeleteBook(index) {
    dispatch(removeBook(index));
  }
  function setAuthor(author){
    dispatch(setAuthors(author))
  }
  //useEffects

  useEffect(() => {
    if (!isAuthorised) {
      router.push("/login");
    }
  }, [isAuthorised]);

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);
  //states with useState()
  const authors = useSelector(state => state.Authors.authors)

  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");
  //filtered and searched array of books
  const searchedAndFilteredBooks = useSearch(searchBooks, selectBooks, books);

  //Functions
  function DeleteAuthors(id){
    dispatch(DeleteAuthor(id))
  }

  return (
    <div>
      <Main
        setBooks={setBook}
        books={searchedAndFilteredBooks}
        DeleteBook={DeleteBook}
        setAuthors={setAuthor}
        authors={authors}
        DeleteAuthor={DeleteAuthors}
        searchBooks={searchBooks}
        setSearchBooks={setSearchBooks}
        selectBooks={selectBooks}
        setSelectBooks={setSelectBooks}
      />
    </div>
  );
}
