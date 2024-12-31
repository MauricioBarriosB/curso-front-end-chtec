import { useState, useContext } from "react";
import { ProfileContext } from "@context/ProfileContext";

function ProfileForm() {

  // Estado para almacenar el valor

  const [newProfile, setNewProfile] = useState("");
  const { addProfile } = useContext(ProfileContext);

  // Función para manejar el envío del formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProfile.trim()) {
      addProfile(newProfile);
      setNewProfile("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="form-group">
      <input 
        className="p-1 m-1"
        style={{maxWidth:'400px'}}
        type="text"
        value={newProfile}
        onChange={(e)=>setNewProfile(e.target.value)}
        placeholder="Nuevo perfíl"
      />
        <button className="btn btn-secondary" type="submit">Añadir</button>
      </div>
    </form>
  );
}

export default ProfileForm;
