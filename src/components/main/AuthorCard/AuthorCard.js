'use client'
import Image from "next/image";
import styles from "./AuthorCard.module.css";

export default function AuthorCard({ author,DeleteAuthor }) {
  return <div className={styles.authorCard}>
    <Image className={styles.imageAuthor} width={250} height={300} src={author.author_photo} alt="author_photo"></Image>
    <h4>{author.author_name}</h4>
    <p>{author.famous_book}</p>
    <button className={`button ${styles.deleteButton}`} onClick={() => DeleteAuthor(author.id)}>Delete</button>
  </div>;
}
