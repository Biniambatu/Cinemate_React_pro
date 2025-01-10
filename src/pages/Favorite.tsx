
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteCart from '../components/FavoriteCart'

const Favorite = () => {
  const movieList = useSelector(state => state.MovieReducer.MovieList)
  return (
    <div className=' max-w-7x1 mx-auto py-7'>    
          {movieList.map((movie:any) => (
        <FavoriteCart key={movie.id} movie={movie}/>
      ))
      }
    </div>
  )
}

export default Favorite