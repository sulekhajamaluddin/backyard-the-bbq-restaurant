//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <footer className="footer flex-column-center">
      <h2>Follow us on</h2>
      <section>
        <FontAwesomeIcon className="brands" icon={brands("twitter")} />
        <FontAwesomeIcon className="brands" icon={brands("facebook")} />
        <FontAwesomeIcon className="brands" icon={brands("square-instagram")} />
      </section>
      <small>&copy; 2023.SulekhaJamaluddin</small>
    </footer>
  );
}
