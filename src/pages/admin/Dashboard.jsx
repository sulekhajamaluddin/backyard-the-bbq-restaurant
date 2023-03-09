//Node Modules
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Welcome to Admin dashboard</h1>
      <div className="link-holder flex-column">
        <Link className="card" to="/admin/categories">
          MANAGE CATEGORIES
        </Link>
        <Link className="card" to="/admin/products">
          MANAGE PRODUCTS
        </Link>
      </div>
    </main>
  );
}
