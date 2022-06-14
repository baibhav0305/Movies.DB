import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movie = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movie));
  }, [dispatch]);

  return (
    <div>
      <div className="home-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
