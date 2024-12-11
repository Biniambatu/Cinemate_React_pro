import { configureStore } from "@reduxjs/toolkit";
import { MovieState } from "./movieCart";

export const store =configureStore({
    reducer: {
        MovieReducer : MovieState
    }
})