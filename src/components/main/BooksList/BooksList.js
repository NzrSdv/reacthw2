"use client";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";
export default function BooksList({ setBooks,books,DeleteBook }) {
  const [addBook, setAddBook] = useState(false);
  const [bookName,setBookName] = useState("");
  const [bookReview,setBookReview] = useState("");
  const [bookImg,setBookImg] = useState("");
  const [bookCompany,setBookCompany] = useState("");
  const [bookYear,setBookYear] = useState("");
  const [bookPrice,setBookPrice] = useState("")

  return (
    <section className="section">
      <div className="container">
        <div className="title_row">
          <div className="upper_line">
            <h1>Booksy nashi</h1>
            <button
              className="btn"
              onClick={() => {
                setAddBook(!addBook);
              }}
            >
              {addBook && "-"} {!addBook && "+"}
            </button>
          </div>
          {addBook && (
            <div className="inputs">
              <div className="input_block">
                <h4>Main info</h4>
                <input type="text" placeholder="book name" onChange={(e) => {setBookName(e.target.value)}} />
                <input type="text" placeholder="book review"  onChange={(e) => {setBookReview(e.target.value)}}/>
                <input type="text" placeholder="book image src" onChange={(e) => {setBookImg(e.target.value)}} />
              </div>

              <div className="input_block">
                <h4>More info</h4>
                <input type="text" placeholder="book company"  onChange={(e) => {setBookCompany(e.target.value)}}/>
                <input type="number" placeholder="book year"  onChange={(e) => {setBookYear(e.target.value)}}/>
                <input type="number" placeholder="book pricing"  onChange={(e) => {setBookPrice(e.target.value)}}/>
              </div>
              <button
               className="addBtn"
                onClick={() => {
                  setBooks([...books, {
                    id:books.length+1,
                    book_name:bookName,
                    book_review:bookReview,
                    book_image:bookImg,
                    book_moreInfo:{
                      printing_company:bookCompany,
                      printing_year:bookYear,
                      pricing:bookPrice,
                    }
                  }]);
                }}
              >
                Add new Book
              </button>
            </div>
          )}
        </div>
        <div className="book-flex">
          {books.map((book, index) => (
            <BookCard key={index} book={book} DeleteBook={DeleteBook} />
          ))}
        </div>
      </div>
    </section>
  );
}
