
import { useEffect, useState } from "react"
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"

export const MovieList = ({apiPath}:any) => {
 
 const {data: movies} = useFetch(apiPath)

  return (
    <main>
     
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}

