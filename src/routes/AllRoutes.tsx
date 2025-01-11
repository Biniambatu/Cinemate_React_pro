import { Route, Router, Routes } from "react-router-dom";
import { MovieList, MovieListDetail, PageNotFound, Search } from "../pages";
import { Card, Footer, Header } from "../components";
import Favorite from "../pages/Favorite";
import LandingPage from "../UI/LandingPage";




const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
          <Route path="" element={<LandingPage/>}/>
        </Routes>
        <Routes>
            {/* <Route path="" element={<MovieList apiPath='movie/now_playing' /> }></Route> */}
            <Route path="movie/:id" element={<MovieListDetail  />}></Route>
            <Route path="movies/popular" element={<MovieList apiPath='movie/popular'/>}></Route>
            <Route path="movies/top" element={<MovieList apiPath='movie/top_rated' />}></Route>
            <Route path="movies/upcoming" element={<MovieList apiPath='movie/upcoming'/>}></Route>
            <Route path="search" element={<Search apiPath='search/movie' />}></Route>
            <Route path="/favorite" element={<Favorite/>}></Route>
            {/* <Route path="*" element={<PageNotFound/>}></Route> */}
        </Routes>
    </div>
  )
}

export default AllRoutes