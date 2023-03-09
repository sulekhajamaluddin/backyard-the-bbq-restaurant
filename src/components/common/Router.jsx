//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import Contact from "../../pages/user/Contact";
import Home from "../../pages/user/Home";
import Menu from "../../pages/user/Menu";
import Category from "../../pages/user/Category";
import Product from "../../pages/user/Product";

//Admin
import Layout from "../../pages/user/Layout";
import Dashboard from "../../pages/admin/Dashboard";
import Categories from "../../pages/admin/Categories";
import Products from "../../pages/admin/Products";
import AddCategory from "../../pages/admin/AddCategory";
import AddProduct from "../../pages/admin/AddProduct";
import ViewCategory from "../../pages/admin/ViewCategory";
import ViewProduct from "../../pages/admin/ViewProduct";
import EditCategory from "../../pages/admin/EditCategory";
import EditProduct from "../../pages/admin/EditProduct";
import NotFound from "../../pages/common/NotFound";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/categories/add" element={<AddCategory />} />
        <Route path="/admin/categories/:id" element={<ViewCategory />} />
        <Route path="/admin/categories/:id/edit" element={<EditCategory />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/:id" element={<ViewProduct />} />
        <Route path="/admin/products/:id/edit" element={<EditProduct />} />
        <Route path="*" element={<NotFound text={"page"} />} />
      </Routes>
    </div>
  );
}
