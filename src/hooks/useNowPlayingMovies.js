import React, { useEffect } from "react";
import { API_OPTIONS, MOVIES_NOW_PLAYING } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(MOVIES_NOW_PLAYING, API_OPTIONS);
    const json = await data.json();
    console.log(json);

    //Fetching and then Adding the "Now Playing Movies" to the store:
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, [nowPlayingMovies]);


};

export default useNowPlayingMovies;
