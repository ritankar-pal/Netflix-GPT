import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);
  // console.log(nowPlayingMovies);

  return (
    <div className='bg-black'>
      <div className='-my-32 relative'>
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={nowPlayingMovies}/>
        <MovieList title={"Children"} movies={nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer