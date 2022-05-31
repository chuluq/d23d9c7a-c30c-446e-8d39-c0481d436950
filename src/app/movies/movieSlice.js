import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDLE, LOADING, FAILED } from "app/types";
import { API_URL, API_KEY, GET } from "helpers/api";

const initialState = {
  movies: null,
  detailMovie: null,
  currentPage: 1,
  status: IDLE,
  error: null,
};

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (movie) => {
    const { keyword, page } = movie;
    const response = await GET(
      `${API_URL}/?apikey=${API_KEY}&s=${keyword}&page=${page}`
    );

    return response;
  }
);

export const getDetailMovie = createAsyncThunk(
  "movies/getDetailMovie",
  async (id) => {
    const response = await GET(
      `${API_URL}/?apikey=${API_KEY}&i=${id}&plot=full`
    );

    return response;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // search movies
      .addCase(searchMovies.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = IDLE;
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      })
      // get detail movie
      .addCase(getDetailMovie.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(getDetailMovie.fulfilled, (state, action) => {
        state.status = IDLE;
        state.detailMovie = action.payload;
      })
      .addCase(getDetailMovie.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export const { changePage } = movieSlice.actions;

export default movieSlice.reducer;
