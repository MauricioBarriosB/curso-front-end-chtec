import { useState } from "react";
import { create } from "../services/PostApi";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ title, body }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log("Post Creado: ", data))
  //     .catch((error) => console.error("Error:", error));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts", { title, body })
  //     .then((response) => console.log("Post Creado:", response.data))
  //     .catch((error) => console.error("Error: ", error));
  // };

  const handleSubmit = (e) => {
    const createOne = async () => {
      try {
        const response = await create(title, body);
        console.log("Post creado:", response);
      } catch (error) {
        console.error(error);
      }
    };
    e.preventDefault();
    createOne();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear un nuevo post</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Contenido"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit">Publicar</button>
    </form>
  );
}
