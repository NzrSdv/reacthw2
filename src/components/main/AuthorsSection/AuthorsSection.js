"use client";
import { useState } from "react";
import AuthorCard from "../AuthorCard/AuthorCard";
import styles from "./AuthorSection.module.css";

export default function AuthorsSection({ setAuthors, authors, DeleteAuthor }) {
  const [authorName, setAuthorName] = useState("");
  const [famousBook, setFamousBook] = useState("");
  const [authorPhoto, setAuthorPhoto] = useState("");
  const [addAuthor, setAddAuthor] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <div className={styles.titleRow}>
          <h2>Authors</h2>
          <button className={styles.openButton} onClick={() => setAddAuthor(!addAuthor)}>
            {addAuthor ? "-" : "+"}
          </button>
        </div>
        {addAuthor && (
          <div className={styles.inputs}>
            <div className={styles.inputBlock}>
              <h4>input author</h4>
              <input
                type="text"
                placeholder="input author"
                value={authorName}
                onChange={(e) => {
                  setAuthorName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="input his famous book"
                value={famousBook}
                onChange={(e) => {
                  setFamousBook(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="input his photo"
                value={authorPhoto}
                onChange={(e) => {
                  setAuthorPhoto(e.target.value);
                }}
              />
              <button
                className="button"
                onClick={() => {
                  setAuthors([
                    ...authors,
                    {
                      id: authors.length + 1,
                      author_name: authorName,
                      famous_book: famousBook,
                      author_photo: authorPhoto,
                    },
                  ]);
                  setAuthorName("");
                  setFamousBook("");
                  setAuthorPhoto("");
                }}
              >
                Add
              </button>
            </div>
          </div>
        )}
        <div className="Authors-flex">
          {authors.map((author, index) => (
            <AuthorCard
              key={index}
              author={author}
              DeleteAuthor={DeleteAuthor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
