import CategoryProvider from "../context/CategoryContext";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

function CategoryView() {
  return (
    <CategoryProvider>
      <div>
        <h1>Gestión de Categorías</h1>
        <CategoryForm />
        <CategoryList />
      </div>
    </CategoryProvider>
  );
}

export default CategoryView;
