'use client';
import AuthorsSection from "@/components/main/AuthorsSection/AuthorsSection";
import { useDispatch,useSelector } from "react-redux";
import { setAuthors,deleteAuthor } from "../store/Slices/AuthorSlice";
export default function Authors(){
  const dispatch = useDispatch();
  const authors = useSelector(state => state.Authors.authors)

  function setAuthor(author){
      dispatch(setAuthors(author))
    }
    function DeleteAuthors(id){
      dispatch(deleteAuthor(id))
    }
    return (<AuthorsSection authors={authors} setAuthors={setAuthor} DeleteAuthor={DeleteAuthors}></AuthorsSection>)
}