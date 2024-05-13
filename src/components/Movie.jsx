import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addItemToWishlist } from '../redux/wishlistSlice';

function Movie({ movie }) {
    const [rating , setRating] = useState();
    const [visible , setVisible] = useState(false);
    const dispatch = useDispatch(); 
    const addItemToWish =  (movie) =>{
        dispatch(addItemToWishlist(movie));
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
          }, 3000);
      
          return () => clearTimeout(timer);
    }
  return (
    <div>
        <p hidden={!visible}> Movie added with Success </p>
        <img src="http://placehold.it/" alt="placeholder"></img><br></br>
        <Link to={"/movie/"+movie?.id} >movie Name : { movie?.title}<br></br></Link>
        movie Genre : { movie?.genre}  <br></br>
        movie Year : { movie?.year}<br></br>
        movie Description : { movie?.description}<br></br>
        <button onClick={() => addItemToWish(movie)}>Add To Maissa List</button>
        <hr></hr>
    </div>
  )
}

export default Movie
