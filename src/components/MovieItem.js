import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieItem = ({ selectedMovie }) => {
  const [response, setResponse] = useState();
  // tt0120338;
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
        <div>
          <h2>{response.Title}</h2>
          <p>{response.Released}</p>
          <p>{response.Genre}</p>
          <p>{response.imdbRating}</p>
          <p>{response.BoxOffice}</p>
          <p>{response.Director}</p>
          <p>{response.Actors}</p>
          <p>{response.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
