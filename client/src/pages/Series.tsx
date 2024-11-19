import { useEffect, useState } from "react";
interface SeriesListProps {
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
export default function SeriesList() {
  const apiKey = import.meta.env.VITE_CLIENT_API_KEY;
  const [series, setSeries] = useState<SeriesListProps[]>([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((res) => setSeries(res.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <main className="movie">
        {series.map((serie) => (
          <div key={serie.id}>
            <img
              className="image"
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${serie.poster_path}`}
              alt="poster_path"
            />
          </div>
        ))}
      </main>
    </>
  );
}
