import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">Proyectos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
