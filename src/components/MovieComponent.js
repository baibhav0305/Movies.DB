import React from "react";

const MovieComponent = ({ items, isLoading, setSelectedMovie }) => {
  //   const { Title, Year, imdbID, Type, Poster } = props.movie;

  return isLoading ? (
    // <Loader />
    <div className="center">
      <h1>pls enter a valid movie or series name...</h1>
      <img src="/img/waiting.jpg" alt="loading" />
    </div>
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
          {item.Poster === "N/A" ? (
            <img src="/img/unavailable2.jpg" alt="poster" />
          ) : (
            <img src={item.Poster} alt="poster" />
          )}
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
