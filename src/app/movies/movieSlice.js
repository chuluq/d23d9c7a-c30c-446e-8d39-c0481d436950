import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDLE, LOADING, FAILED } from "app/types";
import { API_URL, API_KEY, GET } from "helpers/api";

const initialState = {
  movies: [],
  detailMovie: null,
  status: IDLE,
  error: null,
};

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (keyword, page) => {
    const response = await GET(
      `${API_URL}/?apikey=${API_KEY}&s=${keyword}&page=${page}`
    );

    return response.data;
  }
);

export const getDetailMovie = createAsyncThunk(
  "movies/getDetailMovie",
  async (id) => {
    const response = await GET(
      `${API_URL}/?apikey=${API_KEY}&i=tt2975590&plot=full`
    );

    return response.data;
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
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

export default movieSlice.reducer;
