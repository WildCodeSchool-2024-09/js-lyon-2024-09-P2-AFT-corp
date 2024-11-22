import { Link } from "react-router-dom";
import CORP from "../CORP.png";
import UserLogo from "../UserLogo.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <img id="logo" src={CORP} alt="" />
      <ul>
        <li>
          <Link to="/accueil">Accueil</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/series">Séries</Link>
        </li>
      </ul>
      <input type="text" className="input" />
      <img id="avatar" src={UserLogo} alt="logo de l'avatar" />
      <nav />
    </div>
  );
}
