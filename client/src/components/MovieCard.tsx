import { NavLink } from "react-router-dom";
interface MovieCardProps {
  movie: {
    id: number;
    poster_path: string;
  };
}
function MovieCard({ movie }: MovieCardProps) {
  return (
    <>
      <NavLink to={`/films/detail/${movie.id}`}>
        <img
          className="image"
          src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
          alt="poster_path"
        />
      </NavLink>
    </>
  );
}
export default MovieCard;
