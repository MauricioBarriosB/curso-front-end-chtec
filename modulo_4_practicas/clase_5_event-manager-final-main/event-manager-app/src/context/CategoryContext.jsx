import { createContext, useState } from "react";

// Creamos el contexto
export const CategoryContext = createContext();

// Creamos el provider
export default function CategoryProvider({ children }) {
  // Estado para almacenar las categorías
  const [categories, setCategories] = useState([
    "Reuniones",
    "Proyectos",
    "Social",
  ]);

  // Función para agregar una categoría
  const addCategory = (category) => {
    setCategories((prev) => [...prev, category]);
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
