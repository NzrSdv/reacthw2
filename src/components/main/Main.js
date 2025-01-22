'use client';
import AuthorsSection from "./AuthorsSection/AuthorsSection";
import BooksList from "./BooksList/BooksList";
import SalesSection from "./SalesSection/SalesSection";
export default function Main({setBooks,books,DeleteBook,setAuthors,authors,DeleteAuthor}) {
  return (
    <main className="main">
      <BooksList setBooks = {setBooks} books={books} DeleteBook={DeleteBook}></BooksList>
    <SalesSection></SalesSection>
    <AuthorsSection setAuthors={setAuthors} authors={authors} DeleteAuthor = {DeleteAuthor}></AuthorsSection>
      </main>
  );
}
