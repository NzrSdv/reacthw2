import { thunk } from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

import { AuthentificationReducer } from "./AuthentificationReducer";
import { BooksReducer } from "./BooksReducer";
//nado realisovat'
// users reducer
// books reducer
// author reducer
// footer state reducer ???
const rootReducer = combineReducers({
    Authentification:AuthentificationReducer,
    Books:BooksReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;