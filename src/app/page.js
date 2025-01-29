"use client";
import React, { useEffect, useState } from "react";
import Main from "@/components/main/Main";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";



import { fetchBooks } from "./store/asyncActions/BooksAsyncAction";
import { removeBook, setBooks } from "./store/BooksReducer";



// import axios from "axios";
export default function Home() {
  //needed variables constants and etc.
  const dispatch = useDispatch();
  const router = useRouter();
  //states with redux
  const { isAuthorised } = useSelector((state) => state.Authentification);

  const books = useSelector((state) => {
    state.Books.books;
  });

  //dispatch Functions

  function setBook(newBooks) {
    dispatch(setBooks(newBooks));
  }
  function DeleteBook(index) {
    dispatch(removeBook(index));
  }
  //useEffects

  useEffect(() => {
    if (!isAuthorised) {
      router.push("/login");
    }
  }, [isAuthorised]);
  useEffect(() => {
    dispatch(fetchBooks())
  }, []);

  //states with useState()

  const [authors, setAuthors] = useState([
    {
      id: 1,
      author_name: "Alexander Duma",
      famous_book: "three musketeers",
      author_photo:
        "https://images.pexels.com/photos/9268697/pexels-photo-9268697.jpeg",
    },
  ]);
  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");

  //filtered and searched array of books
  const searchedAndFilteredBooks = useSearch(searchBooks, selectBooks, books);

  //Functions
  function DeleteAuthor(id) {
    setAuthors(
      [...authors].filter((element) => {
        if (element.id != id) {
          return element;
        }
      })
    );
  }

  return (
    <div>
      <Main
        setBooks={setBook}
        books={searchedAndFilteredBooks}
        DeleteBook={DeleteBook}
        setAuthors={setAuthors}
        authors={authors}
        DeleteAuthor={DeleteAuthor}
        searchBooks={searchBooks}
        setSearchBooks={setSearchBooks}
        selectBooks={selectBooks}
        setSelectBooks={setSelectBooks}
      />
    </div>
  );
}
