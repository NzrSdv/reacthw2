'use client';
import AuthorsSection from "@/components/main/AuthorsSection/AuthorsSection";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setAuthors,DeleteAuthor } from "../store/AuthorReducer";
export default function Authors(){
  const dispatch = useDispatch();
  const authors = useSelector(state => state.Authors.authors)

  function setAuthor(author){
      dispatch(setAuthors(author))
    }
    function DeleteAuthors(id){
      dispatch(DeleteAuthor(id))
    }
    return (<AuthorsSection authors={authors} setAuthors={setAuthor} DeleteAuthor={DeleteAuthors}></AuthorsSection>)
}