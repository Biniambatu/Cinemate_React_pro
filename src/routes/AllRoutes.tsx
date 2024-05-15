import { Route, Router, Routes } from "react-router-dom";
import { MovieList, MovieListDetail, PageNotFound, Search } from "../pages";
import { Card, Footer, Header } from "../components";



const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<MovieList/>}></Route>
            <Route path="movie/:id" element={<MovieListDetail/>}></Route>
            <Route path="movie/:popular" element={<MovieList/>}></Route>
            <Route path="movie/:top" element={<MovieList/>}></Route>
            <Route path="movie/:upcoming" element={<MovieList/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes