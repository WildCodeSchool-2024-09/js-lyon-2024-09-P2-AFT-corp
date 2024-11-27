import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/SerieDetail.css"
interface SeriesListProps {
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
export default function SerieDetail() {
  const apiKey = import.meta.env.VITE_CLIENT_API_KEY;
  const [series, setSeries] = useState<SeriesListProps[]>([]);
  const serieId = useParams();
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/${serieId.id}?language=en-US`;
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
  }, [serieId.id]);
  return (
<section className="maindetail"> 

    <div className="posterdata">

        <div> 

          <div className="affichedetail" key={series.id}>
          
            <img
              className="posterdetail"
              src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${series.poster_path}`}
              alt="poster_path"
            />
                 <div className="serie-overview" > 
                    <h3>{series.name} </h3>
                    <p>{series.overview || "pas de synopsis"}</p>
                </div>
          
          </div>

        </div>

    </div>

</section>

);
}