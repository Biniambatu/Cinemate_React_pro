
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { add_to_cart, remove_from_cart } from "../Store.tsx/movieCart"
import { useDispatch, useSelector } from "react-redux"



export const MovieListDetail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const [movie, setMovie] = useState({})
  const movieList = useSelector( state => state.MovieReducer.MovieList )
  const [ InCart, setIsInCart ] = useState(false)
  const image =   `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
 
  useEffect(() => {
   async function fetchMovie() {
     const response  = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=4bad53a04ca878afc74cf970bdc369bd`);
     const datas = await response.json()
     setMovie(datas)
   }
     fetchMovie()
  },[])

  useEffect(() => {
    const isInCart = movieList.find(item => item.id === movie.id)
     if(isInCart){
        setIsInCart(true)
     }else{
        setIsInCart(false)
     }
  },[movieList])

  return (
    
     <div className="flex flex-col md:flex-row bg-gray-900 text-white p-6 md:p-12 dark:bg-white-900 dark:border-white-700 dark:text-white-400">
        <div className="md:w-1/2 flex justify-center">
          <img src={image} alt={movie.title} className="rounded-lg shadow-lg max-h-[500px] w-auto"/>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8 flex flex-col">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">{movie.title}</h1>
          <p className="text-gray-300 mb-6 dark:text-white-400 ">
           {movie.overview}
          </p>
          {movie.genres ? (  
              <div className="flex gap-2 mt-6">
                { movie.genres.map((genre:any) =>  (
               <span className="px-3 py-1 bg-blue-700 text-sm rounded-lg" key={genre.id}>{genre.name}</span>
            ))}</div>
               ) : "" }
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-400">
              <span className="material-icons">star</span>
              <span className="ml-1 text-lg font-bold">{movie.vote_average}</span>
            </div>
            <span className="ml-4 text-gray-400">{movie.vote_count} reviews</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <span className="font-semibold">Runtime:</span>
              <span className="ml-1">{movie.runtime} min.</span>
            </div>
            <div>
              <span className="font-semibold">Budget:</span>
              <span className="ml-1">${movie.budget}</span>
            </div>
            <div>
              <span className="font-semibold">Revenue:</span>
              <span className="ml-1">{movie.revenue}</span>
            </div>
            <div>
              <span className="font-semibold">Release Date:</span>
              <span className="ml-1">{movie.release_date}</span>
            </div>
            <div>
              <span className="font-semibold">IMDB Code:</span>
              <span className="ml-1">{movie.imdb_id}</span>
            </div>
            {InCart ? ( <button className="w-32 text-white py-2 px-4 rounded bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={() => dispatch(remove_from_cart(movie))}>Remove</button>) 
            : ( <button className="w-32 text-white py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={() => dispatch(add_to_cart(movie))}>Favorite</button>)}
            </div>
         </div> 
      </div>
  )
}
