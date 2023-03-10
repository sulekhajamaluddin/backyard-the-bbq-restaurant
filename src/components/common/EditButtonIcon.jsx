//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditButtonIcon({ path }) {
  return (
    <Link to={path}>
      <FontAwesomeIcon
        className="edit-icon"
        icon={"fa-solid fa-pen-to-square"}
      />
    </Link>
  );
}
