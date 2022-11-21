import { List } from "./List"
import ListItem from "./ListItem"


export default function Render({ movies }) {
    return (
      <div className="divide-y divide-slate-100 w-2/4 rounded-lg bg-gray- border-gray-700">
       
        <List>
          {movies.map((movie) => (
            <ListItem key={movie.id}  cast={movie.cast} image={movie.image} rating={movie.rating} runtime={movie.runtime} starRating={movie.starRating} title={movie.title} />
          ))}
        </List>
      </div>
    )
  }
  