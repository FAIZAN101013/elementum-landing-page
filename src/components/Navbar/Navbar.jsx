import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={logo} alt="Elementum" className="logo" />

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Studio</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
      </nav>

      <img src={menu} alt="Menu" className="menu-icon" />
    </header>
  );
};

export default Navbar;