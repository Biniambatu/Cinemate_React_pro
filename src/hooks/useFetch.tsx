import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (apiPath) => {
  
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=4bad53a04ca878afc74cf970bdc369bd`

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data.results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(true))
  },[url])

     return {data}

}