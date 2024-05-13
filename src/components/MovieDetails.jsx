import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllMovies } from "../service/crud";
import Movie from "./Movie";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    const FetchMovieData = async () => {
        const movieResult = await getAllMovies(id);
        console.log(movieResult);
        setMovie(movieResult.data);
      };
    FetchMovieData();
  }, []);
  return (
    <div>
     <Movie movie={movie}   ></Movie>
    </div>
  );
}

export default MovieDetails;
