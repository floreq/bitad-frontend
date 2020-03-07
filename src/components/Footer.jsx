import React from "react";
import { HashLink as Link } from "react-router-hash-link";

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
        </div>
        <div>
          <h3>Dane kontaktowe</h3>
        </div>
        <div>
          <h3>Dołącz do nas</h3>
          <p className="small-p">
            Zarejestruj się i zostań uczestników konferencji Beskid IT Academic
            Day już teraz. Nie zwlekaj miejsca są ograniczone.
          </p>
          <Link to="/rejestracja" className="nav-link button">
            Rejestracja
          </Link>
        </div>
        <div>
          <h3>Poznaj nas bliżej!</h3>
          <p>Znajdziesz nas również w mediach społecznościowych.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
