"use client";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.css";
import Select from "@/components/select/Select";
export default function BooksList({
  setBooks,
  books,
  DeleteBook,
  searchBooks,
  setSearchBooks,
  selectBooks,
  setSelectBooks,
}) {
  const [addBook, setAddBook] = useState(false);
  const [bookName, setBookName] = useState("");
  const [bookReview, setBookReview] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [bookCompany, setBookCompany] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookPrice, setBookPrice] = useState("");
console.log(books)
  function defaultKa() {
    setBookName("");
    setBookReview("");
    setBookImg("");
    setBookCompany("");
    setBookYear("");
    setBookPrice("");
  }
  return (
    <section className="section">
      <div className="container">
        <div className={styles.upperLine}>
          <div className={styles.titleRow}>
            <h1>Booksy nashi</h1>
            <button
              className={styles.openButton}
              onClick={() => {
                setAddBook(!addBook);
              }}
            >
              {addBook && "-"} {!addBook && "+"}
            </button>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
              value={
                searchBooks != undefined || searchBooks != null
                  ? searchBooks
                  : ""
              }
              onInput={(e) => {
                setSearchBooks(e.target.value);
                console.log(searchBooks);
              }}
            />
            <Select selectBooks={selectBooks} setSelectBooks={setSelectBooks} />
          </div>
          {addBook && (
            <div className={styles.inputs}>
              <div className={styles.inputBlock}>
                <h4>Main info</h4>
                <input
                  type="text"
                  placeholder="book title"
                  value={bookName}
                  onChange={(e) => {
                    setBookName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="book description"
                  value={bookReview}
                  onChange={(e) => {
                    setBookReview(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="book cover"
                  value={bookImg}
                  onChange={(e) => {
                    setBookImg(e.target.value);
                  }}
                />
              </div>

              <div className={styles.inputBlock}>
                <h4>More info</h4>
                <input
                  type="text"
                  placeholder="book original Title"
                  value={bookCompany}
                  onChange={(e) => {
                    setBookCompany(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="book releasDate"
                  value={bookYear}
                  onChange={(e) => {
                    setBookYear(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="book pages"
                  value={bookPrice}
                  onChange={(e) => {
                    setBookPrice(e.target.value);
                  }}
                />
              </div>
              <button
                className="button"
                onClick={() => {
                  setBooks([
                    ...books,
                    {
                      index: books.length + 1,
                      title: bookName,
                      description: bookReview,
                      cover: bookImg,
                      originalTitle: bookCompany,
                      releaseDate: bookYear,
                      pages: bookPrice,
                    },
                  ]);
                  defaultKa();
                }}
              >
                Add new Book
              </button>
            </div>
          )}
        </div>
        <div className={styles.booksFlex}>
          {books?.length > 0 &&
            books.map((book) => (
              <BookCard key={book.index} book={book} DeleteBook={DeleteBook} />
            ))}
          {books?.length == 0 && <h3>No data</h3>}
        </div>
      </div>
    </section>
  );
}
