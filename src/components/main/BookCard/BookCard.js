"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./BookCard.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BookCard({ book, DeleteBook }) {
  const [moreState, setMoreState] = useState(false);
  const { bookIndex } = useParams();
  return (
    <div>
      <div className={styles.bookCard}>
        <Image
          className={styles.bookImage}
          src={book.cover}
          width={300}
          height={400}
          alt="book image"
        />
        <div className={styles.Information}>
          <h3>{book.title}</h3>
        </div>
        {moreState && (
          <div className={styles.Information}>
            <p>{book.description}</p>
            <p>{book.originalTitle}</p>
            <p>{book.releaseDate}</p>
            <p>{book.pages} pages</p>
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
          {!bookIndex && <Link className={styles.link} href={`/books/${book.index}`}>Details</Link>}
          {DeleteBook != undefined && (
            <button
              className={`button ${styles.deleteButton}`}
              onClick={() => {
                DeleteBook(book.index);
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
