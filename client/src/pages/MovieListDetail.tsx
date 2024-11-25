import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css"
interface MoviesListProps {
  id: number;
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video: boolean;
  vote_average?: number;
}
export default function MovieListDetail() {
  const apiKey = import.meta.env.VITE_CLIENT_API_KEY;
  const [movies, setMovies] = useState<MoviesListProps[]>([]);
  const movieId = useParams();
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId.id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, [movieId.id]);
  
  return (
    <main className="maindetail">
      <div className="image data"/>
        <div>
          <article className="affichedetail" key={movies.id}>
            <img
              className="imagedetail"
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movies.poster_path}`}
              alt="poster_path"
            />
            <div className="movie-overview"/>
            <h3>{movies.title} </h3>
            <p>{movies.overview || "pas de synopsis"}</p>
          </article>
        </div>
      </main>
  );
}











