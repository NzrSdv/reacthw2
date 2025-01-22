"use client";
import React, { useState } from "react";
import Main from "@/components/main/Main";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
export default function Home() {
  const [city, setCity] = useState("");
  const [books, setBooks] = useState([
    {
      id: 1,
      book_name: "first",
      book_review: "first_a",
      book_image:
        "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo: {
        printing_company: "Эксклюзивная классика 1",
        printing_year: 2000,
        pricing: "20$",
      },
    },
    {
      id: 2,
      book_name: "second",
      book_review: "second_b",
      book_image:
        "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo: {
        printing_company: "Эксклюзивная классика 2",
        printing_year: 2021,
        pricing: "21$",
      },
    },
    {
      id: 3,
      book_name: "third",
      book_review: "third_c",
      book_image:
        "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo: {
        printing_company: "Эксклюзивная классика 3",
        printing_year: 2005,
        pricing: "15$",
      },
    },
    {
      id: 4,
      book_name: "fourth",
      book_review: "fourth_d",
      book_image:
        "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo: {
        printing_company: "Эксклюзивная классика 4 ",
        printing_year: 1990,
        pricing: "10$",
      },
    },
  ]);
  const [authors, setAuthors] = useState([
    {
      id:1,
      author_name: "Alexander Duma",
      famous_book: "three musketeers",
      author_photo:
        "https://images.pexels.com/photos/9268697/pexels-photo-9268697.jpeg",
    },
  ]);

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
  return (
    <div>
      <Header setCity={setCity} city={city} />

      <Main
        setBooks={setBooks}
        books={books}
        DeleteBook={DeleteBook}
        setAuthors={setAuthors}
        authors={authors}
        DeleteAuthor={DeleteAuthor}
      />
      <Footer />
    </div>
  );
}
