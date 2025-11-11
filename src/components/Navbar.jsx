import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link inactive"
            }
            to="/"
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link inactive"
            }
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link inactive"
            }
            to="/certifications"
          >
            Certifications
          </NavLink>
        </li>
        {/* <li className="navbar-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link inactive"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
