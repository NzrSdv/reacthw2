'use client';
import Image from "next/image";
import { useState } from "react";
import styles from "./BookCard.module.css";

export default function BookCard({ book ,DeleteBook}) {
  const [moreState, setMoreState] = useState(false);
  return (
    <div>
      <div className={styles.bookCard}>
        <Image
        className={styles.bookImage}
          src={book.book_image}
          width={250}
          height={250}
          alt="book image"
        />
        <div className={styles.Information}>
          <h3>{book.book_name}</h3>
        </div>
        {moreState && (
          <div className={styles.Information}>
            <p>{book.book_review}</p>
            <p>{book.book_moreInfo.printing_company}</p>
            <p>{book.book_moreInfo.printing_year}</p>
            <p>{book.book_moreInfo.pricing}</p>
          </div>
        )}
       <div className={styles.buttons}>
       <button className={`button ${styles.button}`}
          onClick={() => {
            setMoreState(!moreState);
          }}
        >
          {!moreState && "more"}
          {moreState && "less"}
        </button>
        <button className={`button ${styles.deleteButton}`} onClick={() => {DeleteBook(book.id)}}>Delete</button>
       </div>
      </div>
    </div>
  );
}
