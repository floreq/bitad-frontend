import React from "react";
import ListOfPatrons from "../components/ListOfPatrons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Fb from "../assets/images/fb-logo.svg";
import Yt from "../assets/images/yt-logo.svg";
import Tw from "../assets/images/tw-logo.svg";

const listPatrons = [
  {
    id: 1,
    image: "/images/patrons/ath-logo.svg",
    alt: "Ath",
    link: "/",
  },
  {
    id: 2,
    image: "/images/patrons/wbmii-logo.svg",
    alt: "Wbmii",
    link: "/",
  },
];

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-list">
          <div>
            <h3>Reset</h3>
            <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>
              O konferencji
            </Link>
            <HashLink
              className="nav-link"
              to={process.env.PUBLIC_URL + "/#sponsors"}
            >
              Sponsorzy
            </HashLink>
            <HashLink
              className="nav-link"
              to={process.env.PUBLIC_URL + "/agenda#timeline"}
            >
              Agenda
            </HashLink>
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
              Zarejestruj się i zostań uczestnikiem konferencji Beskid IT
              Academic Day już teraz. Nie zwlekaj, miejsca są ograniczone.
            </p>
            <Link
              to={process.env.PUBLIC_URL + "/rejestracja"}
              className="nav-link button"
            >
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
        </div>
        <div className="copyrights">
          <div className="copyrights-links">
            <Link to="/" className="nav-link">
              Polityka prywatności
            </Link>
            <Link to="/" className="nav-link">
              Regulamin
            </Link>
          </div>
          <div className="copyrights-text small-span">
            © 2020 Reset. Wszelkie prawa zastrzeżone
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
