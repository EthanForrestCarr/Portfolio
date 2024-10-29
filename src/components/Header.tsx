import Navigation from "./Navigation";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Ethan Carr</h1>
      { Navigation }
    </header>
  );
}

export default Header;