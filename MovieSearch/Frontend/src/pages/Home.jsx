import MovieCard from "../Components/MoviePosters"
import { useState } from "react";

function Home() {
  const [searchQueary, setSearchQueary] = useState ("");

  const movies = [
      { id: 1, title:"minecraft", release_date: "2020"},
      { id: 2, title:"John Wick", release_date: "2019"},
      { id: 3, title:"J Park", release_date: "1980"},            
      { id: 4, title:"Waynes world", release_date: "1970"},
    ];

  const handleSearch = () => {

  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search For Movies???" className="search-input"/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
    </div>
  );
}

export default Home