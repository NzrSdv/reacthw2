import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "./Slices/BooksSlice";
import AuthentificationReducer from "./Slices/AuthentificationSlice";
import AuthorReducer from "./Slices/AuthorSlice";
import { asyncBookSlice } from "./Slices/AsyncBookSlice";
const store = configureStore({
  reducer: {
    Books: BooksReducer,
    Authentification: AuthentificationReducer,
    Authors: AuthorReducer,
    [asyncBookSlice.reducerPath]:asyncBookSlice.reducer,
  },
  middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(asyncBookSlice.middleware),
});
export default store;
