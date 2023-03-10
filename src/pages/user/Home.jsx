//Project Files
import halfBowl from "../../assets/half-bowl.png";
import bowl from "../../assets/bowl.jpg";
import { useCategories } from "../../state/CategoriesProvider";
import CategoryItem from "../../components/user/CategoryItem";

export default function Home() {
  const { categories } = useCategories();
  const categoriesList = categories.map((category) => (
    <CategoryItem
      key={category.id}
      item={category}
      content={category.short_description}
    />
  ));

  return (
    <div className="home">
      <section className="hero flex-column-center">
        <h1>Backyard BBQ</h1>
        <h2>The best in town!!</h2>
        <picture>
          <source className="bbq" media="(min-width:750px)" srcSet={bowl} />
          <img className="bbq" src={halfBowl} alt="A bowl with bbq chicken" />
        </picture>
      </section>
      <section className="highlights flex-column-center">
        <p className="title">What makes us unique??</p>
        {categoriesList}
      </section>
    </div>
  );
}
