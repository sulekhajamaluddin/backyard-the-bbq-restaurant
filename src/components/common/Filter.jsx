import getFilteredProducts from "../../scripts/utils/getFilteredProducts";

export default function Filter({ items, products, setDisplayList }) {
  const options = items.map((item) => (
    <option key={item.id} value={item.id}>
      {item.title}
    </option>
  ));
  return (
    <div className="filter">
      <label>Filter: </label>
      <select
        id="category"
        onChange={(e) => {
          const categoryID = e.target.value;
          const fileteredProducts = getFilteredProducts(products, categoryID);
          setDisplayList(fileteredProducts);
        }}
      >
        <option value="">Choose a category</option>
        {options}
      </select>
    </div>
  );
}
