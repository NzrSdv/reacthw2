import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const asyncBookSlice = createApi({
    reducerPath:"booksApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://potterapi-fedeperin.vercel.app/en/"}),
    endpoints:(builder) => ({
        getBooks:builder.query({
            query:() => `/books`
        })
        ,
        getBook:builder.query({
            query:(bookIndex) => `/books?index=${bookIndex}`
        })
    })
})

export const {useGetBooksQuery,useGetBookQuery} = asyncBookSlice;