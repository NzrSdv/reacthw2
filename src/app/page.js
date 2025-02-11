"use client";
import React, { useEffect, useState } from "react";
import Main from "@/components/main/Main";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";
import { deleteAuthor, setAuthors } from "./store/Slices/AuthorSlice";
import { removeBook, setBooks } from "./store/Slices/BooksSlice";
import { useGetBookQuery, useGetBooksQuery } from "./store/Slices/AsyncBookSlice";
import { setIsAuthorised } from "./store/Slices/AuthentificationSlice";
// const url = "https://potterapi-fedeperin.vercel.app/en/books";
// import axios from "axios";
export default function Home() {
  //needed variables constants and etc.
  const dispatch = useDispatch();
  const router = useRouter();
  //states with redux
  const isAuthorised = useSelector((state) => state.Authentification.isAuthorised);
  console.log(isAuthorised);

  const books = useSelector((state) => state.Books.books);

  const {data,error,isLoading} = useGetBooksQuery()
    if(error){
      alert(error);
    }
    else if(!isLoading){
      setBook(data);
    }
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
  //states with useState()
  const authors = useSelector(state => state.Authors.authors)

  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");
  //filtered and searched array of books
  const searchedAndFilteredBooks = useSearch(searchBooks, selectBooks, books);

  //Functions
  function DeleteAuthors(id){
    dispatch(deleteAuthor(id))
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
