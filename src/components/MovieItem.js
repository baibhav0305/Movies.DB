import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieItem = ({ selectedMovie }) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      const result = await axios(
        `https://www.omdbapi.com/?i=${selectedMovie}&apikey=cb3c2a6`
      );

      console.log(result.data);
      setResponse(result.data);
    };
    fetchDetails();
  }, [selectedMovie]);

  return (
    <div>
      {response && (
        <div className="item">
          {response.Poster === "N/A" ? (
            <img src="/img/unavailable2.jpg" alt="poster" />
          ) : (
            <img src={response.Poster} alt="poster" />
          )}
          <div className="item-component">
            <h1 className="underline">{response.Title}</h1>
            <p>
              <strong>Release Date:</strong> {response.Released}
            </p>
            <p>
              <strong>Genre:</strong> {response.Genre}
            </p>
            <p>
              <strong>IMDb:</strong> {response.imdbRating}
            </p>
            <p>
              <strong>Box Office:</strong> {response.BoxOffice}
            </p>
            <p>
              <strong>Director:</strong> {response.Director}
            </p>
            <p>
              <strong>Cast:</strong> {response.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {response.Plot}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
