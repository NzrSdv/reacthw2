import BooksList from "./BooksList.js/BooksList";
import SalesSection from "./SalesSection/SalesSection";
export default function Main({books}) {
  return (
    <main className="main">
      <BooksList books={books}></BooksList>
    <SalesSection></SalesSection>
      </main>
  );
}
