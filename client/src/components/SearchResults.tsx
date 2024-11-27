import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

// Définir un type pour le film
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  // Ajoutez d'autres propriétés nécessaires en fonction de la réponse de l'API
}
const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState<Movie[]>([]); // Typage des résultats
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = "33baccb4b233351d7a7238564c5c282f";
  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        setError(null);
        try {
          // Requête API pour récupérer les résultats de la recherche
          const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;
          const movieResponse = await fetch(url);
          const movieData = await movieResponse.json();
          if (movieData.results && movieData.results.length > 0) {
            setResults(movieData.results);
          } else {
            setResults([]);
          }
        } catch (error) {
          setError("Erreur lors de la récupération des résultats");
        } finally {
          setLoading(false);
        }
      };
      fetchResults();
    }
  }, [query]);
  return (
    <div>
      <h1 style={{ color: "white" }}>Résultats pour: {query}</h1>
      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      <div className="movie">
        {results.length > 0 ? (
          results.map((item: Movie) => <MovieCard movie={item} key={item.id} />)
        ) : (
          <p style={{ color: "white" }}>Aucun résultat trouvé.</p>
        )}
      </div>
    </div>
  );
};
export default SearchResults;
