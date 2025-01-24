"use client";
import React, {  useEffect, useState } from "react";
import Main from "@/components/main/Main";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import axios from "axios";

import { useSearch } from "@/hooks/useSearch";
export default function Home() {
  const [city, setCity] = useState("");
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([
    {
      id: 1,
      author_name: "Alexander Duma",
      famous_book: "three musketeers",
      author_photo:
        "https://images.pexels.com/photos/9268697/pexels-photo-9268697.jpeg",
    },
  ]);
  const url = "https://potterapi-fedeperin.vercel.app/en/books";
  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");
  const searchedAndFilteredBooks = useSearch(searchBooks,selectBooks,books);


  async function getBooks(){
    const response = await axios.get(url,{})
    setBooks(response.data)
  }
  function DeleteBook(id) {
    setBooks(
      [...books].filter((element) => {
        if (element.id != id) {
          return element;
        }
      })
    );
  }
  function DeleteAuthor(id) {
    setAuthors(
      [...authors].filter((element) => {
        if (element.id != id) {
          return element;
        }
      })
    );
  }
  useEffect(() => {
    getBooks();
  },[])
  return (
    <div>
      <Header setCity={setCity} city={city} />

      <Main
        setBooks={setBooks}
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
      <Footer />
    </div>
  );
}
