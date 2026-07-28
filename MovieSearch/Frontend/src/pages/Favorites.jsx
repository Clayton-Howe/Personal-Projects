import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../Components/MoviePosters"

function Favorites(){
  const {favorites} = useMovieContext();

  if (favorites){
    return (<div className="favorites">
      <h2>Your Favorited Movies!</h2>
    <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
      </div>
    )
  }

  return (<div className="favorites-empty">
    <h2>no favorites yet</h2>
    <p>add to your favorites to populate this</p>
  </div>
  )
}

export default Favorites