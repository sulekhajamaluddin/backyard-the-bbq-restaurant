// Node modules
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-page flex-column-center">
      <h1>
        <span>Sorry,something went wrong.</span>
        <span>please try again, later.</span>
      </h1>
      <Link className="back-button" to="/">
        Go back
      </Link>
    </div>
  );
}
