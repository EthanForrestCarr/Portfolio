import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Ethan Carr</h1>
      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          About Me
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;