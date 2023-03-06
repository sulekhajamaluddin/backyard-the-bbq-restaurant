//Node Modules
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="dashboard flex-column-center">
      <Link className="card" to="/admin/categories">
        MANAGE CATEGORIES
      </Link>
      <Link className="card" to="/admin/products">
        MANAGE PRODUCTS
      </Link>
    </main>
  );
}
