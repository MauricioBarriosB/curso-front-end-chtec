import { useState, useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

// Componente para el formulario de categorías

function CategoryForm() {
  // Estado para almacenar el valor
  const [newCategory, setNewCategory] = useState("");
  const { addCategory } = useContext(CategoryContext);
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      addCategory(newCategory);
      setNewCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Nueva Categoría"
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default CategoryForm;
