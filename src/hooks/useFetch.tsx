import axios from "axios";
import { useState, useEffect } from "react";


export const useFetch = (apiPath, queryTerm="") => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`
  
  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data.results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(true))
      setLoading(false)
  },[url])
    // if(loading){
    //    return <section>
    //     <h1>Loading...</h1>
    //    </section>
    // }
     return {data}

}