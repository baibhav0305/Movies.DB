import React from "react";
// import Loader from "./Loader";
// import MovieItem from "./MovieItem";

const MovieComponent = ({ items, isLoading }) => {
  //   const { Title, Year, imdbID, Type, Poster } = props.movie;

  return isLoading ? (
    // <Loader />
    <h1>pls enter a valid movie or series name...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <h1 key={Math.random()}>{item.Title}</h1>
      ))}
    </section>
  );
};

export default MovieComponent;
