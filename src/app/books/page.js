"use client";
import BooksList from "@/components/main/BooksList/BooksList";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const url = "https://potterapi-fedeperin.vercel.app/en/books";

  const [books, setBooks] = useState([]);

  const [searchBooks, setSearchBooks] = useState("");
  const [selectBooks, setSelectBooks] = useState("");
  const newBooks = useSearch(searchBooks, selectBooks, books);

  async function getBooks() {
    const response = await axios.get(url, {});
    setBooks(response.data);
    console.log(response.data);
  }
  function DeleteBook(index) {
    setBooks(
      [...books].filter((element) => {
        if (element.index != index) {
          return element;
        }
      })
    );
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <BooksList
      setBooks={setBooks}
      books={newBooks}
      DeleteBook={DeleteBook}
      searchBooks={searchBooks}
      setSearchBooks={setSearchBooks}
      selectBooks={selectBooks}
      setSelectBooks={setSelectBooks}
    />
  );
}
