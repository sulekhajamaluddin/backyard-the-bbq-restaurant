//Node Modules
import { Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";

//Project Files
import Contact from "../../pages/user/Contact";
import Footer from "../user/Footer";
import Home from "../../pages/user/Home";
import Menu from "../../pages/user/Menu";
import Navbar from "../user/Navbar";
import Category from "../../pages/user/Category";

//Admin
import Dashboard from "../../pages/admin/Dashboard";
import Categories from "../../pages/admin/Categories";
import Products from "../../pages/admin/Products";
import AddCategory from "../../pages/admin/AddCategory";
import AddProduct from "../../pages/admin/AddProduct";
// import getExcludedRoutes from "../../scripts/utils/getExcludedRoutes";
import ViewCategory from "../../pages/admin/ViewCategory";

import NotFound from "../../pages/common/NotFound";

export default function Router() {
  // const location = useLocation();
  // const excludedRoutes = getExcludedRoutes();

  return (
    <div>
      {/* {!excludedRoutes.includes(location.pathname) && <Navbar />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/categories/:id" element={<ViewCategory />} />
        <Route path="/admin/categories/add" element={<AddCategory />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products/:id" element={<p>Product Item</p>} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="*" element={<NotFound text={"page"} />} />
      </Routes>
      {/* {!excludedRoutes.includes(location.pathname) && <Footer />} */}
    </div>
  );
}
