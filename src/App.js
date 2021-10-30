import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <div className="container">
      <Navbar />
      <Search getQuery={(q) => setQuery(q)} />
    </div>
  );
}

export default App;
