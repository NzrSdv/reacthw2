"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./BookCard.module.css";

export default function BookCard({ book, DeleteBook }) {
  const [moreState, setMoreState] = useState(false);
  return (
    <div>
      <div className={styles.bookCard}>
        <Image
          className={styles.bookImage}
          src={book.cover}
          width={250}
          height={250}
          alt="book image"
        />
        <div className={styles.Information}>
          <h3>{book.title}</h3>
        </div>
        {moreState && (
          <div className={styles.Information}>
            <p>{book.description}</p>
            <p>{book.originalTitle}</p>
            <p>{book.releasedDate}</p>
            <p>{book.pages}</p>
          </div>
        )}
        <div className={styles.buttons}>
          <button
            className={`button ${styles.button}`}
            onClick={() => {
              setMoreState(!moreState);
            }}
          >
            {!moreState && "more"}
            {moreState && "less"}
          </button>
          <button
            className={`button ${styles.deleteButton}`}
            onClick={() => {
              DeleteBook(book.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
