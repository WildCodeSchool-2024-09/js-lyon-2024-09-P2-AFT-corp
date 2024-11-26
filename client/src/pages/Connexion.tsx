import UserLogo from "../UserLogo.png";
import UserLogo1 from "../UserLogo1.png";
import UserLogo2 from "../UserLogo2.png";
import "../Connexion.css";
import Earth from "../assets/Earth.mp4";

export default function Connexion() {
  return (
    <html lang="fr" className="maj">
      <body>
        <video className="background-video" autoPlay muted loop>
          <source src={Earth} type="video/mp4" />
        </video>

        <div>
          <a href="http://localhost:3000/Home">
            <img id="user1" src={UserLogo} alt="utilisateur1" />
            <p>Amina</p>
          </a>

          <a href="http://localhost:3000/Home">
            <img id="user2" src={UserLogo1} alt="utilisateur2" />
            <p>Fouzy</p>
          </a>

          <a href="http://localhost:3000/Home">
            <img id="user3" src={UserLogo2} alt="utilisateur3" />
            <p>Toj</p>
          </a>
        </div>
      </body>
    </html>
  );
}
