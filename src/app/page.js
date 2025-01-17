'use client';
import React,{useState} from "react";
import Main from "@/components/main/Main";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
export default function Home() {
  const [city, setCity] = useState("");
  const [books,setBooks] = useState([
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo:{
        printing_company:"Эксклюзивная классика",
        printing_year:2020,
        pricing:"20$"
      }
    },
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo:{
        printing_company:"Эксклюзивная классика",
        printing_year:2020,
        pricing:"20$"
      }
    },
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo:{
        printing_company:"Эксклюзивная классика",
        printing_year:2020,
        pricing:"20$"
      }
    },
    {
      book_name: "abc",
      book_review: "fff",
      book_image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg",
      book_moreInfo:{
        printing_company:"Эксклюзивная классика",
        printing_year:2020,
        pricing:"20$"
      }
    },
  ])
  return (
    <div>
     <Header setCity={setCity} city={city}/>

     <Main books={books}/>
     <Footer/>
    </div>
  );
}
