import { createSlice } from "@reduxjs/toolkit";
import { MovieList } from "../pages";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        MovieList: [],
        Total: 0
    },
    reducers: {
        add_to_cart(state,action){
          const updatedList = state.MovieList.concat(action.payload)
          return {...state, MovieList: updatedList}
        },
        remove_from_cart(state, action){
            const updatedList = state.MovieList.filter(item => item.id !== action.payload.id)
            return {...state, MovieList: updatedList}
        }
    }

})

export const {add_to_cart, remove_from_cart} =   MovieSlice.actions;
export const MovieState = MovieSlice.reducer;