'use client';
import AuthorsSection from "@/components/main/AuthorsSection/AuthorsSection";
import { useState } from "react";

export default function Authors(){
    const [authors, setAuthors] = useState([
        {
          id: 1,
          author_name: "Alexander Duma",
          famous_book: "three musketeers",
          author_photo:
            "https://images.pexels.com/photos/9268697/pexels-photo-9268697.jpeg",
        },
      ]);
    function DeleteAuthor(id) {
        setAuthors(
          [...authors].filter((element) => {
            if (element.id != id) {
              return element;
            }
          })
        );
      }
    return (<AuthorsSection authors={authors} setAuthors={setAuthors} DeleteAuthor={DeleteAuthor}></AuthorsSection>)
}