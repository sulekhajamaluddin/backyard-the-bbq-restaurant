//Node Modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function BackButtonIcon({ path }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(path)}>
      <FontAwesomeIcon className="back-icon" icon={"fa-solid fa-circle-left"} />
    </button>
  );
}
