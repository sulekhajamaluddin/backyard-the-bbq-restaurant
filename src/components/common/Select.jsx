// //Project Files

// export default function Select({ categories, setSelectedCategory }) {
//   const options = categories.map((category) => (
//     <option key={category.id} value={category.id}>
//       {category.title}
//     </option>
//   ));

//   return (
//     <label>
//       Choose a category:
//       <select
//         name="categories"
//         id="categories"
//         onChange={(e) => {
//           setSelectedCategory(e.target.value);
//         }}
//       >
//         <option value="">--Please choose an option--</option>
//         {options}
//       </select>
//     </label>
//   );
// }
