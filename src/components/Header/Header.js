import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./header.scss";

const Header = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie === "" || movie.length < 3) {
      return alert("Enter atleast 3 letters");
    }
    dispatch(fetchAsyncMovies(movie));
    setMovie("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movies.DB</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Movies"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
