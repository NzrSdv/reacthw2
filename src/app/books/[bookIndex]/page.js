"use client";
import BookCard from "@/components/main/BookCard/BookCard";
import { fetchBook } from "@/app/store/asyncActions/BooksAsyncAction";
import { useParams } from "next/navigation";
import { useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";

export default function Book() {
    const { bookIndex } = useParams();
    const dispatch = useDispatch();
    const book = useSelector((state) => state.Books.book)
    useEffect(() => {
dispatch(fetchBook(bookIndex))
    },[])
  // const url = "https://potterapi-fedeperin.vercel.app/en/books";

  return <div style={{display:"flex", alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
    {book && <BookCard book={book} DeleteBook={undefined}></BookCard>}
    {!book && <h1>Downloading</h1>}
  </div>;
}
