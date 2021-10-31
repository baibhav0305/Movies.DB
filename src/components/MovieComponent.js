import React from "react";

const MovieComponent = ({ items, isLoading, setSelectedMovie }) => {
  //   const { Title, Year, imdbID, Type, Poster } = props.movie;

  return isLoading ? (
    // <Loader />
    <h1>pls enter a valid movie or series name...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <div
          className="movie-card"
          key={Math.random()}
          onClick={() => {
            setSelectedMovie(item.imdbID);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h1 className="underline">{item.Title}</h1>
          <img src={item.Poster} alt="poster" />
          <div className="movie-info">
            <span>
              <em>{item.Year}</em>
            </span>
            <span>
              <em>{item.Type}</em>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MovieComponent;
