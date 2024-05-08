import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  console.log(movies);

  return (
    <div className="">
      <div class="text-left mt-8 ml-4 mb-3 py-4">
        <h1 class="text-3xl font-bold text-white">{title}</h1>
      </div>

      <div className="overflow-x-scroll whitespace-nowrap py-4">
        {movies?.map((elem) => (
          <div key={elem.id} className="inline-block mr-4 ml-4">
            <MovieCard
              title={elem.original_title}
              posterPath={elem.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
