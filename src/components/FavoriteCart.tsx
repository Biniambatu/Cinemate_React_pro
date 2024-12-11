import React from 'react'
import { remove_from_cart } from '../Store.tsx/movieCart';
import { useDispatch } from 'react-redux';

const FavoriteCart = ({movie}:any) => {
  const { overview, original_title} =  movie;
  const image =   `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const dispatch = useDispatch()
  return (
        // <div className="max-w-sm ml-7 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //     <img className="rounded-t-lg" src={image} alt="" />
        //     <div className="p-5">
        //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        //     <button onClick={()=> dispatch(remove_from_cart(movie))} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
        //         remove
        //     </button>
        //     </div>
        // </div>
        <div className="max-w-7xl mx-auto mt-6 bg-white border border-gray-300 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
        <div className="flex items-start p-6">
            <img 
                className="w-32 h-48 object-cover rounded-lg" 
                src={image} 
                alt={original_title} 
            />
            <div className="ml-6 flex-1">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
                    {original_title}
                </h5>
                <p className="mt-5 text-sm text-gray-700 dark:text-white-400 line-clamp-4">
                    {overview}
                </p>
                <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                       
                    </span>
                    <button 
                        onClick={() => dispatch(remove_from_cart(movie))} 
                        className="text-sm bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default FavoriteCart