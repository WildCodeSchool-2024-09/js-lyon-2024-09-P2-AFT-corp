import CORP from "../CORP.png";
export default function NavBar() {
  return (
    <div className="navbar">
      <img id="logo" src={CORP} alt="" />
      <ul>
        <li>Acceuil</li>
        <li>Film</li>
        <li>Serie</li>
        <input type="text" />
      </ul>
      <nav />
    </div>
  );
}
