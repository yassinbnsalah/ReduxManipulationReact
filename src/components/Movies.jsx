import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector from react-redux
import Movie from "./Movie";
import {  selectedMovies } from "../redux/moviesSlice";
import { IncrementalLike, decrementalLike, getLikes } from "../redux/dataSlice";

function Movies() {
    const [searchMovies, setSearchMovies] = useState("");
  const [likescount] = useSelector(getLikes) ;
  const [movies] = useSelector(selectedMovies);
  const [filteredMovies, setFilteredMovies] = useState([]);
    const Searching = () =>{
      console.log(searchMovies);
        if (searchMovies.length>0){
            setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchMovies.toLowerCase())));
        }
       
    }
  const dispatch = useDispatch();
  const AddLike1 = () =>{
    dispatch(IncrementalLike())
  }
  const minisLike1 = () =>{
    dispatch(decrementalLike())
  }
  //   useEffect(() => {
  //     dispatch(fetchMovie());
  //   }, []);
  return (
    <div>
      <h1> Movies </h1>
      <h2> List of Movies </h2>
      <h3> Likes : {likescount}</h3>
      <input
        type="text"
        id="search"
        placeholder="searching"
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      <button type="button" onClick={Searching}>Search </button>
      {filteredMovies.length > 0 ? (<>{filteredMovies?.map((item, index) => (
        <>
          <Movie movie={item} key={index}></Movie>
        </>
      ))}</>) :(<>{movies?.map((item, index) => (
        <>
          <Movie movie={item} key={index}></Movie>
        </>
      ))}</>)}
    <button type="button" onClick={AddLike1}>Add Like</button>
    <button type="button" onClick={minisLike1}>Min Like</button>
    </div>
  );
}

export default Movies;
