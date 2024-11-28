import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CORP from "../CORP.png";
import UserLogo from "../UserLogo.png";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState(""); // Gérer la saisie de l'utilisateur
  const navigate = useNavigate(); // Utiliser navigate pour rediriger après la recherche

  // Gérer la modification de l'input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Gérer la soumission de la recherche
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Rediriger vers la page des films ou des séries avec la query
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="navbar">
      <img id="logo" src={CORP} alt="Logo" />
      <ul>
        <li>
          <Link to="/home">Accueil</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/series">Série</Link>
        </li>
      </ul>

      {/* Formulaire de recherche */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="input"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Rechercher un film ou une série"
        />
        <button type="submit">Rechercher</button>
      </form>

      <img id="avatar" src={UserLogo} alt="Utilisateur" />
    </div>
  );
}
