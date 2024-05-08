import React, { useEffect } from "react";
import { API_OPTIONS, MAIN_MOVIE } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch();
  const trailer = useSelector((state) => state?.movies?.trailerVideo);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    //finding the object from the array haing type: Trailer::
    const trailerList = json.results.filter((elem) => elem.type === "Trailer");

    const firstTrailer = trailerList.length ? trailerList[0] : json.results[0]; //if trailer exist take that else take the first video
    // console.log(firstTrailer);
    dispatch(addTrailerVideo(firstTrailer)); //storing the trailer video in the store:
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return trailer;
};

export default useMovieTrailer;
