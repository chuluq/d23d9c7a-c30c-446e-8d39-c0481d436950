import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "app/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  devTools: true,
});
