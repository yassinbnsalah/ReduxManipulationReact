import { combineReducers } from "redux";
import movies from "./moviesSlice.js";
import wishlist from "./wishlistSlice.js";
const reducers = combineReducers({
    movies,
    wishlist
});

export default reducers;
