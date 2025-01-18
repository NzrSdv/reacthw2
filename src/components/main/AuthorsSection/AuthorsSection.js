'use client';
import { useState } from "react";
import AuthorCard from "../AuthorCard/AuthorCard";

export default function AuthorsSection({ setAuthors, authors,DeleteAuthor }) {
const [authorName,setAuthorName] = useState("");
const [famousBook,setFamousBook] = useState("");
const [authorPhoto,setAuthorPhoto] = useState("")
  return (
    <section className="section">
      <div className="container">
        <div className="inputs">
        <h2>Authors</h2>
          <div className="input_block">
            <h4>input author</h4>
            <input type="text" placeholder="input author"  onChange={(e) => {
                setAuthorName(e.target.value);
            }}/>
            <input type="text" placeholder="input his famous book"  onChange={(e) => {
                setFamousBook(e.target.value);
            }}/>
            <input type="text" placeholder="input his photo" onChange={(e) => {
                setAuthorPhoto(e.target.value);
            }} />
            <button onClick={() => {setAuthors([...authors,{id:authors.length+1,author_name:authorName,famous_book:famousBook,author_photo:authorPhoto}])}}>Add</button>
          </div>
        </div>
        <div className="Authors-flex">
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} DeleteAuthor={DeleteAuthor} />
          ))}
        </div>
      </div>
    </section>
  );
}
