import { thunk } from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

import { AuthentificationReducer } from "./AuthentificationReducer";
import { BooksReducer } from "./BooksReducer";
import { AuthorReducer } from "./AuthorReducer";
//nado realisovat'
// users reducer x 
// books reducer check
// author reducer check
// footer state reducer ??? x
const rootReducer = combineReducers({
    Authentification:AuthentificationReducer,
    Books:BooksReducer,
    Authors:AuthorReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;