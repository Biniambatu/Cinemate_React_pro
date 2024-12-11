import axios from "axios"
import { log } from "console"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const MovieListDetail = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  const image =   `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
 
  useEffect(() => {
   async function fetchMovie() {
     const response  = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=4bad53a04ca878afc74cf970bdc369bd`);
     const datas = await response.json()
     setMovie(datas)
   }
     fetchMovie()
  },[])

  return (
        // <main>
        //   <section className="flex justify-around flex-wrap py-5">
        //      <div className="max-w-sm">
        //        <img className="rounded" src={image} alt={movie.title}/>
        //      </div>
        //      {movie.title}
        //   </section>
        // </main>

    
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
          </div>
           
         </div>
      </div>

    
  )
}
