import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import MovieComponent from "./components/MovieComponent";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.omdbapi.com/?apikey=cb3c2a6&s=${query}`
      );

      console.log(result);

      if (result.data.Search) {
        setItems(result.data.Search);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <header>
        <h1>Movies.DB</h1>
        <Search getQuery={(q) => setQuery(q)} />
      </header>
      <MovieComponent isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
