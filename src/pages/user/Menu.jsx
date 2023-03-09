//Project Files
import plates from "../../assets/plates-on-table.jpg";
import { useCategories } from "../../state/CategoriesProvider";
import CategoryItem from "../../components/user/CategoryItem";

export default function Menu() {
  const { categories } = useCategories();

  const categoryList = categories.map((category) => (
    <CategoryItem key={category.id} item={category} />
  ));

  return (
    <div className="menu">
      <img src={plates} alt="Black plates arranged on a table" />
      <section className="details flex-column-center">
        <h1>MENU</h1>
        {categoryList}
      </section>
    </div>
  );
}
