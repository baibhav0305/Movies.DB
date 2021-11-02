import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for Movies or Series"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <img src="" alt="" />
      </form>
    </div>
  );
};

export default Search;
