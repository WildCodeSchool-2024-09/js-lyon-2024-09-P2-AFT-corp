import UserLogo from "../UserLogo.png";
import UserLogo1 from "../UserLogo1.png";
import UserLogo2 from "../UserLogo2.png";
import "../components/Connexion.css"
import { Link } from "react-router-dom";
import Video from "../Video.mp4";
export default function Connexion() {
  return (
    <div className="background">
      <video className="video-background" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="profil">
        <Link to="/accueil">
          <img src={UserLogo} alt="profil1" />
        </Link>
        <Link to="/accueil">
          <img src={UserLogo1} alt="profil2" />
        </Link>
        <Link to="/accueil">
          <img src={UserLogo2} alt="profil3" />
        </Link>
      </div>
    </div>
  );
}