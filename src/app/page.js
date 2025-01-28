"use client";
import React, { useEffect, useState } from "react";
import Main from "@/components/main/Main";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { useAuth } from "./context/AuthContext";
export default function Home() {
  const { isAuthorised } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorised) {
      router.push("/login");
    }
  }, [isAuthorised]);

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
  const searchedAndFilteredBooks = useSearch(searchBooks, selectBooks, books);

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
  }, []);
  return (
    <div>
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
    </div>
  );
}
