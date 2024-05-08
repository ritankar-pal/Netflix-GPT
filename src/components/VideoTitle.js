import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-[30%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm mt-1 w-1/2">{overview}</p>

      <div class="flex space-x-4 mt-4 mb-7">
        <button className="bg-white text-black px-10 py-2 rounded hover:bg-opacity-40">Play</button>
        <button className="bg-gray-500 bg-opacity-20 text-white px-10 py-2 rounded hover:bg-white hover:text-black">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
