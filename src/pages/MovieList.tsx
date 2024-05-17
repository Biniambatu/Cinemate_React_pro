
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"

export const MovieList = ({apiPath}) => {
 
  const{ data } = useFetch(apiPath)
 
  return (
    <main>
      <section className="max-w-7x1 mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {data.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
