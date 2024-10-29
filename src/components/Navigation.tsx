import { NavLink } from 'react-router-dom';
import "./Navigation.css"

function Navigation() {
    return (
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
    );
}

export default Navigation();