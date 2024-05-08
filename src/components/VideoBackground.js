import React from "react";
import { MAIN_MOVIE_YOUTUBE_URL } from "../utils/constant";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {
  const { movieId } = props;
  
  const trailer = useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={MAIN_MOVIE_YOUTUBE_URL + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
