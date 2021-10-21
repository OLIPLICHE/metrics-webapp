import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <NavLink exact to="/">
      <span className="material-icons-outlined">
        <i className="fal fa-chevron-square-left" />
      </span>
    </NavLink>
    <span className="navbar-title">
      Foreign Exchange Market
    </span>
    <span>
      <span className="material-icons-outlined navbar-icons">
        <i className="fal fa-microphone" />
      </span>
      <span className="material-icons-outlined navbar-icons">
        <i className="fal fa-cog" />
      </span>
    </span>
  </header>
);

export default Navbar;
