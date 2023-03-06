//Node Modules
import { Link } from "react-router-dom";

//Project Files
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar flex-center">
      <Link to="/">
        <img className="logo" src={logo} alt="A bbq grill in yellow color" />
      </Link>
      <div className="links">
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
