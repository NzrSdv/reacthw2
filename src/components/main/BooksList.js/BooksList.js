import BookCard from "../BookCard/BookCard";
export default function BooksList({books}) {
  return (
    <section className="section">
      <div className="container">
      <h1>Booksy nashi</h1>
      <div className="book-flex">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      </div>
    </section>
  );
}
