import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { add_to_cart, remove_from_cart } from "../Store.tsx/movieCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const dispatch = useDispatch()
  const [isInCart, SetIsInCart] = useState(false)
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
  const movieList = useSelector(state => state.MovieReducer.MovieList)
  
  useEffect(() => {
     const MovieInCart = movieList.find(item => item.id === id)
     if(MovieInCart){
        SetIsInCart(true)
     }else{
         SetIsInCart(false)
     }
  },[movieList, id])

  return (
        <div>
            <div className="max-w-sm ml-7  mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/movie/${id}`}>
                    <img className="rounded-t-lg " src={image} alt="" />
                </Link>
                <div className="p-5">
                    <Link to={`/movie/${id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                    {isInCart ? (<button onClick={() => dispatch(remove_from_cart(movie))} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                       Remove
                    </button>) : ( <button onClick={() => dispatch(add_to_cart(movie))} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                       Favorite
                    </button>)}
                </div>
            </div>
        </div>
  )
}
