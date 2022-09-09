import React from 'react'
import { useLocation } from 'react-router-dom';

const MovieInfos = () => {
   
const location = useLocation()

console.log(location.state);

  return (
    <div>movieInfos</div>
  )
}

export default MovieInfos