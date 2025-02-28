import React, { useState } from "react";
import axiosInstance from "../config/axiosConfig";
import MovieCard from "./MovieCard";

const Home = () => {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apikey = import.meta.env.VITE_MOVIE_API_KEY;

  const fetchMovies = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    axiosInstance
      .get(`?apikey=${apikey}&s=${query}`)
      .then((res) => {
        console.log(res);
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
          setIsLoading(false);
          setError("");
        } else {
          setError(res.data.Error);

          setMovies([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(error);

  return (
    <div className="overflow-x-hidden">
      <form action="">
        <div className=" flex justify-center mt-11">
          <input
            className=" rounded-l-lg  w-3xl border bg-white text-black outline-none px-3 py-2"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder=" Enter the movie name to search "
            type="text"
            name="searchQuery"
            id=""
          />
          <button
            onClick={fetchMovies}
            className=" border rounded-r-lg bg-white text-black outline-none px-3 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div>
        <p className=" text-red-700 font-bold my-3">
          {error.length > 0 && error}
        </p>
      </div>
      <div className=" flex justify-center items-center gap-3">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
          {movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div key={movie.imdbID}>
                  <MovieCard movie={movie} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
