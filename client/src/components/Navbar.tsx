import CORP from "../CORP.png";
import utilisateur from "../utilisateur.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <img id="logo" src={CORP} alt="" />
      <ul>
        <li>Acceuil</li>
        <li>Films</li>
        <li>Série</li>
      </ul>
      <input type="text" />
      <img id="avatar" src={utilisateur} alt="" />
      <nav />
    </div>
  );
}
