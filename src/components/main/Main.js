import Image from "next/image";

export default function Main() {
  let list = [
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
    },
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
    },
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
    },
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
    },
  ];
  return (
    <main>
      <section>
        <h1>Booksy nashi</h1>
        <div>
            {list.map(book => (
                <div className="book-card">
                    <Image src={book.book_image} width={100} height={100}/>
                    <h3>{book.book_name}</h3>
                    <p>{book.book_review}</p>
                </div>
            ))}
        </div>
      </section>
    </main>
  );
}
