import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "constants/icons/menu";
import { links } from "constants/links";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">Ningali</h1>
      </Link>
      <div className="menu" onClick={handleToggleMenu}>
        <Menu />
      </div>
      <div
        className={`links ${isMenuOpen ? "active" : ""}`}
        onClick={handleToggleMenu}
      >
        {links.map((link) => {
          return (
            <Link key={link.id} to={link.url}>
              <span className="link_item">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
