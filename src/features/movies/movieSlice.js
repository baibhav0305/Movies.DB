import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../utils/apis/movieApi";
import { APIKey } from "../../utils/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movie) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movie}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  selectMovie: {},
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectMovie = {};
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      console.log("FulFilled");
      return { ...state, movies: action.payload };
    });
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected");
    });
    builder.addCase(fetchAsyncMovieDetail.fulfilled, (state, action) => {
      console.log("Fulfilled");
      return { ...state, selectMovie: action.payload };
    });
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectMovie;
export default movieSlice.reducer;
