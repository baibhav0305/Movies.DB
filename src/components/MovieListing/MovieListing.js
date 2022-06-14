import React from "react";
import Slider from "react-slick";
import { Settings } from "../../utils/settings.js";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  // console.log(movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}> {renderMovies}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
