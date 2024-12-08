import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  
  const [data, setData] = useState([])
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=4bad53a04ca878afc74cf970bdc369bd`

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url)
      const json = await response.json()
      setData(json.results)
    }
    fetchMovies()
  },[url])

     return {data}

}