'use client';
import { useMemo } from "react";

export const useSearch = (searchBooks, selectBooks, books) => {
  return useMemo(() => {
    let newBooks = books;
    if (selectBooks) {
      newBooks = newBooks.sort((a, b) => {
        if(typeof a[selectBooks] === "number"){
          return a[selectBooks] - b[selectBooks];
        }
        else{
          return a[selectBooks].localeCompare(b[selectBooks]);
        }
      });
    }
    if (searchBooks.length > 0) {
      newBooks = books.filter((book) => 
      book.book_name.toLowerCase().includes(searchBooks.toLowerCase()) ||
      book.book_review.toLowerCase().includes(searchBooks.toLowerCase()) ||
      book.printing_company.toLowerCase().includes(searchBooks.toLowerCase())
      )
    }
    return newBooks;
  }, [searchBooks, selectBooks, books]);
};
