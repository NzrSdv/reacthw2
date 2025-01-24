"use client";
import BookCard from "@/components/main/BookCard/BookCard";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Book() {
    const { bookIndex } = useParams();
    console.log(bookIndex)
  const url = "https://potterapi-fedeperin.vercel.app/en/books";
  
  const [book, setBook] = useState("");
  async function getB() {
    const response = await axios.get(url,{
        params:{
            index:bookIndex
        }
    });
    console.log(response.data);
    setBook(response.data);
}
    useEffect(() => {
      getB();
    }, []);
  return <div style={{display:"flex", alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
    {book && <BookCard book={book} DeleteBook={undefined}></BookCard>}
    {!book && <h1>Downloading</h1>}
  </div>;
}
