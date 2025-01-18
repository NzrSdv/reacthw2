"use client"
import Image from "next/image";

export default function AuthorCard({ author,DeleteAuthor }) {
  return <div className="author_card">
    <Image width={100} height={100} src={author.author_photo} alt="author_photo"></Image>
    <h4>{author.author_name}</h4>
    <p>{author.famous_book}</p>
    <button onClick={() => DeleteAuthor(author.id)}>Delete</button>
  </div>;
}
