import Image from "next/image";
import { useState } from "react";
import styles from "./BookCard.module.css";

export default function BookCard({ book }) {
  const [moreState, setMoreState] = useState(false);
  return (
    <div>
      <div className={styles.book_card}>
        <Image
          src={book.book_image}
          width={100}
          height={100}
          alt="book image"
        />
        <div>
          <h3>{book.book_name}</h3>
          <p>{book.book_review}</p>
        </div>
        {moreState && (
          <div className={styles.moreInfo}>
            <h3>{book.book_moreInfo.printing_company}</h3>
            <h3>{book.book_moreInfo.printing_year}</h3>
            <h3>{book.book_moreInfo.pricing}</h3>
          </div>
        )}
        <button className={styles.btn}
          onClick={() => {
            setMoreState(!moreState);
          }}
        >
          {!moreState && "more"}
          {moreState && "less"}
        </button>
      </div>
    </div>
  );
}
