"use client";
import BookCard from "@/components/main/BookCard/BookCard";
import { useGetBookQuery } from "@/app/store/Slices/AsyncBookSlice";
import { useParams } from "next/navigation";
import { setBook } from "@/app/store/Slices/BooksSlice";

import { useDispatch, useSelector } from "react-redux";

export default function Book() {
  const { bookIndex } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.Books.book);
  const { data, error, isLoading } = useGetBookQuery(bookIndex);
  if (error) {
    alert(error);
  } else if (!isLoading) {
    dispatch(setBook(data));
  }
  // const url = "https://potterapi-fedeperin.vercel.app/en/books";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {!isLoading && <BookCard book={book} DeleteBook={undefined}></BookCard>}
      {isLoading && <h1>Downloading</h1>}
    </div>
  );
}
