import React from 'react'
import { MOVIE_THUMBNAIL_CDN } from '../utils/constant'


const MovieCard = (props) => {

    const { posterPath } = props;

  return (
    <div>
        <img src={MOVIE_THUMBNAIL_CDN + posterPath} alt='movie thumbnail' className='w-28 rounded-md'/>
    </div>
  )
}

export default MovieCard