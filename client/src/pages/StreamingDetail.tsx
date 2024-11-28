import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/StreamingListDetail.css";

interface StreamingDetailProps {
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
  name: string;
}

interface typeProps {
  type: string;
}

export default function StreamingDetail({ type }: typeProps) {
  const apiKey = import.meta.env.VITE_CLIENT_API_KEY;
  const [series, setSeries] = useState<StreamingDetailProps | null>(null);
  const serieId = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${type}/${serieId.id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setSeries(data))
      .catch((err) => console.error(err));
  }, [serieId.id, type]);

  return (
    <section className="maindetail">
      <div className="posterdata">
        <div>
          {series != null ? (
            <div className="affichedetail" key={series.id}>
              <img
                className="detail"
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${series.poster_path}`}
                alt="poster_path"
              />
              <div className="movie-overview">
                <h3>{series.name || series.title} </h3>
                <p>{series.overview || "pas de synopsis"}</p>
              </div>
            </div>
          ) : (
            <h1>pas de reponse </h1>
          )}
        </div>
      </div>
    </section>
  );
}
