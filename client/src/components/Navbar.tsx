import { Link } from "react-router-dom";
import CORP from "../CORP.png";
import utilisateur from "../utilisateur.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <img id="logo" src={CORP} alt="" />
      <ul>
        <Link to="/">Acceuil</Link>
        <Link to="/films">Films</Link>
        <Link to="/series">Série</Link>
      </ul>
      <input type="text" className="input" />
      <img id="avatar" src={utilisateur} alt="" />
      <nav />
    </div>
  );
}
