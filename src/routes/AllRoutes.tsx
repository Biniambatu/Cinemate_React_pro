import { Route, Router, Routes } from "react-router-dom";
import { MovieList, MovieListDetail, PageNotFound, Search } from "../pages";
import { Card, Footer, Header } from "../components";



const AllRoutes = () => {
  return (
    <main>
       <Header></Header>
        <Routes>
            <Route path="/" element={<MovieList/>}></Route>
            <Route path="movie/:id" element={<MovieListDetail/>}></Route>
            <Route path="movie/:popular" element={<MovieList/>}></Route>
            <Route path="movie/:top" element={<MovieList/>}></Route>
            <Route path="movie/:upcoming" element={<MovieList/>}></Route>
            <Route path="search" element={<Search/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      <Footer></Footer>
    </main>
  )
}

export default AllRoutes