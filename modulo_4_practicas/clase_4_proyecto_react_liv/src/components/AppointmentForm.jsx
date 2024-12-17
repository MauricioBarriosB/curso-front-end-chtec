import { useState } from "react";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log("* Form Val :", e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="card mt-5">
      <div className="card-header text-center">
        <h5 className="mt-1">Formulario de Contacto </h5>
      </div>
      <div className="card-body">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              rows="4"
              className="form-control"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-primary"
              value="Enviar Formulario"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
