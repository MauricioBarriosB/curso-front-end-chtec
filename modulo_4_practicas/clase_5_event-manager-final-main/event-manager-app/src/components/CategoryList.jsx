import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

function CategoryList() {
  // Obtenemos las categorías del contexto
  const { categories } = useContext(CategoryContext);

  return (
    <div>
      <h3>Categorías</h3>
      <ul>
        {/* Mostramos la lista de categorías */}
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
