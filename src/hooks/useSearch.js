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
      book.title.toLowerCase().includes(searchBooks.toLowerCase()) ||
      book.description.toLowerCase().includes(searchBooks.toLowerCase()) ||
      book.originalTitle.toLowerCase().includes(searchBooks.toLowerCase())
      )
    }
    return newBooks;
  }, [searchBooks, selectBooks, books]);
};
