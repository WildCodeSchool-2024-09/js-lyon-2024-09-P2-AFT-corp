import "../pages/Home.css";
import { useEffect, useState } from "react";

interface SerieListProps {
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
  name?: string;
  video?: boolean;
  vote_average?: number;
}

export default function Home() {
  const apiKey = import.meta.env.VITE_CLIENT_API_KEY;
  const [serie, setSerie] = useState<SerieListProps | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  const fetchRandomSerie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    setIsBlurred(true);

    setTimeout(() => {
      fetch(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
        options,
      )
        .then((res) => res.json())
        .then((res) => {
          const randomIndex = Math.floor(Math.random() * res.results.length);
          setSerie(res.results[randomIndex]);
          setIsBlurred(false);
        })
        .catch((err) => console.error(err));
    }, 500);
  };

  useEffect(() => {
    fetchRandomSerie();
    const intervalId = setInterval(() => {
      fetchRandomSerie();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <main className="mainHome">
      <div className={`serieHome ${isBlurred === true ? "blur" : ""}`}>
        {serie ? (
          <div className="afficheSerie" key={serie.id}>
            <img
              id="imagepagehome"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${serie.poster_path}`}
              alt={serie.name}
            />
            <div className="overview">
              <h3>{serie.name}</h3>
              <p>{serie.overview || "Pas disponible"}</p>
            </div>
          </div>
        ) : (
          <p>Element indisponible</p>
        )}
      </div>
    </main>
  );
}
