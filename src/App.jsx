import React from "react"
import NavigationBar from "./components/NavigationBar"
import { Route, Routes } from "react-router-dom"
import Whishlist from "./components/Whishlist"
import { fetchMovies } from "./redux/moviesSlice"
import { useDispatch } from "react-redux"
import Movies from "./components/Movies"
import NotFound from "./components/NotFound"
import MovieDetails from "./components/MovieDetails"


function App() {
  const dispatch = useDispatch();


  return (
    <>
    <React.Suspense fallback={<h1> Loading ...</h1>}>
      <NavigationBar />
      <Routes>
        <Route path="/movies">
          <Route index element={<Movies />} loader={dispatch(fetchMovies())} />
         
        </Route>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/wishlist" element={<Whishlist />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
    </>
  )
}

export default App
