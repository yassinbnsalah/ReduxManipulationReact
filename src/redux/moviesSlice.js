import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../service/crud";
let initialState = {
  movies: [],
  selectedMovie: {},
  errors: "",
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      populateMovies(state, action) {
        state.movies = action.payload;
      },
      selectMovies(state, action) {
        state.selectedMovie = action.payload;
      },
      unselectMovies(state) {
        state.selectedMovie = null;
      },
      deleteMoviesReducer: (state, action) => {
        const payload = action.payload;
        state.movies = state.movies.filter(
          (moviesItem) => moviesItem.id !== payload
        );
      },
      updateMoviesReducer: (state, action) => {
        const payload = action.payload;
        const index = state.movies.findIndex((item) => item.id === payload.id);
        if (index !== -1) {
          state.movies[index] = payload;
        }
      },
      addMoviesReducer: (state, action) => {
        const payload = action.payload;
        state.movies.push(payload);
      },
      setErrors(state, action) {
        state.errors = action.payload;
      },
    },
  });


  export const fetchMovies = () => async (dispatch) => {
    try {
      const moviesResult = await getAllMovies();
      dispatch(populateMovies(moviesResult.data));
      dispatch(setErrors(null));
    } catch (error) {
      dispatch(setErrors(error));
    }
  };
  export const selectedMovies = (state) => {
    return [state.movies.movies, state.errors];
  };

  export const {
    populateMovies,
    selectMovies,
    unselectMovies,
    setErrors,
    deleteMoviesReducer,
    updateMoviesReducer,
    addMoviesReducer,
  } = moviesSlice.actions;
  export default moviesSlice.reducer;
  