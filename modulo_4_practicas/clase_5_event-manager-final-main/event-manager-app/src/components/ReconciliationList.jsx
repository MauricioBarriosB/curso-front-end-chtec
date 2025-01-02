import { useState } from "react";

function ReconciliationList() {
  const [items, setItems] = useState([
    { id: 1, text: "Elemento 1" },
    { id: 2, text: "Elemento 2" },
    { id: 3, text: "Elemento 3" },
  ]);

    const addItem = () => {
    const newItem = { id: Math.random(), text: `Elemento ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  const shuffleItems = () => {
    setItems((prevItems) => [...prevItems].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <h3>Lista de Reconciliación</h3>
      <button onClick={addItem}>Añadir Elemento</button>
      <button onClick={shuffleItems}>Mezclar Elementos</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReconciliationList;
