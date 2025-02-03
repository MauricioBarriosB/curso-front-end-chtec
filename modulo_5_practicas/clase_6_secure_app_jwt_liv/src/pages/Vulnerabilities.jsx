import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import DOMPurify from "dompurify";

const Vulnerabilities = () => {
  const [origin, setOrigin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("origen: ", origin);
    const sanitized = DOMPurify.sanitize(origin);
    console.log("sanitizado: ", sanitized);


  };

  return (
    <MainLayout>
      <h1>Demostración de Vulnerabilidades</h1>
      <section>
        <h2>Clickjacking</h2>
        <p>
          Intenta cargar esta página en un iframe para ver como se puede evitar
          este ataque con el encabezado <code>X-Frame-Options</code>
        </p>
        <iframe
          src="./"
          style={{ width: "100%", height: "200px", border: "1px solid black" }}
          title="Clickjacking Example"
        ></iframe>
      </section>
      <section>
        <h2>Cross-Site Scripting (XSS)</h2>
        <p>Ingresa un script malicioso para ver como lo sanitizamos.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Entrada:
            <input
              type="text"
              placeholder="Escribe con malicia..."
              onChange={(e) => setOrigin(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </MainLayout>
  );
};

export default Vulnerabilities;
