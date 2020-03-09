import React from "react";
import ListOfPatrons from "../components/ListOfPatrons";
import { HashLink as Link } from "react-router-hash-link";
import Fb from "../assets/images/fb-logo.svg";
import Yt from "../assets/images/yt-logo.svg";
import Tw from "../assets/images/tw-logo.svg";

const listPatrons = [
  {
    id: 1,
    location: "/images/patrons/ath-logo.svg",
    alt: "Ath",
    link: "/"
  },
  {
    id: 2,
    location: "/images/patrons/wbmii-logo.svg",
    alt: "Wbmii",
    link: "/"
  }
];

function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h3>Reset</h3>
          <Link to="/" className="nav-link">
            O konferencji
          </Link>
          <Link to="/#sponsors" className="nav-link">
            Sponsorzy
          </Link>
          <Link to="/agenda" className="nav-link">
            Agenda
          </Link>
        </div>
        <div>
          <h3>Patroni</h3>
          <ListOfPatrons listPatrons={listPatrons} />
        </div>
        <div>
          <h3>Dane kontaktowe</h3>
          <div className="adress">Reset,</div>
          <div className="adress">Willowa 2,</div>
          <div className="adress">Bielsko-Biała 43-300</div>
          <a href="mailto:reset@ath.bielsko.pl" className="mail">
            reset@ath.bielsko.pl
          </a>
        </div>
        <div>
          <h3>Dołącz do nas</h3>
          <p className="small-p">
            Zarejestruj się i zostań uczestników konferencji Beskid IT Academic
            Day już teraz. Nie zwlekaj miejsca są ograniczone.
          </p>
          <Link to="/rejestracja#registration" className="nav-link button">
            Rejestracja
          </Link>
        </div>
        <div>
          <h3>Poznaj nas bliżej!</h3>
          <p className="small-p">
            Znajdziesz nas również w mediach społecznościowych.
          </p>
          <div className="social-icons">
            <a href="/">
              <img src={Fb} alt="Facebook" />
            </a>
            <a href="/">
              <img src={Yt} alt="YouTube" />
            </a>
            <a href="/">
              <img src={Tw} alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="copyrights-links">
          <Link to="/" className="nav-link">
            Polityka prywatności
          </Link>
          <Link to="/" className="nav-link">
            Regulamin
          </Link>
        </div>
        <span className="copyrights-text">
          © 2020 Reset. Wszelkie prawa zastrzeżone
        </span>
      </div>
    </footer>
  );
}

export default Footer;
