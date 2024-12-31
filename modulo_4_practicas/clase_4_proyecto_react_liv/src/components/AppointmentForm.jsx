import { useState, useRef } from "react";

function AppointmentForm() {

  // * Store user name as ref:

  let refUserName = useRef('');

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
    if (formData.name.length < 4) {
      alert('Nombre debe tener al menos 3 caractéres'); return false;
    }
    if (formData.email.length < 4) {
      alert('Email debe tener al menos 3 caractéres'); return false;
    }
    if (formData.message.length < 4) {
      alert('Mensaje debe tener al menos 3 caractéres'); return false;
    }
    alert(`Datos de formulario correcto: ${formData.name} | ${formData.email} | ${formData.message}`);

    refUserName.current = formData.name;
    console.log('* refUserName : ', refUserName.current);
  };

  return (
    <div className="card mt-5">
      <div className="card-header text-center">
        <h5 className="mt-1">Formulario de Contacto</h5>
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
