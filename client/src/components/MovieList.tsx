import { useEffect, useState } from "react";
interface MovieListProps {
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
}
export default function MovieList() {
  const apiKey = import.meta.env.VITE_CLIENT_API_KEY;
  const [movies, setMovies] = useState<MovieListProps[]>([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options,
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <main className="movie">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              className="image"
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
              alt="poster_path"
            />
          </div>
        ))}
      </main>
    </>
  );
}
