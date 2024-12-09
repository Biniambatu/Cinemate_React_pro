import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Card } from "../components"


export const Search = ({apiPath}:any) => {
  const[searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")

  const {data: movies} = useFetch(apiPath, queryTerm)

  return (
    <main>
      <main>
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
    </main>
  )
}
