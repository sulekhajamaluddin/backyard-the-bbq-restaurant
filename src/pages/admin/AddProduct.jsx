//Project Files
import ProductForm from "../../components/common/ProductForm";

export default function AddProduct() {
  return (
    <div className="flex-column-center add-category">
      <ProductForm collectionName={"categories"} />
    </div>
  );
}
