import { createContext, useState } from "react";
import PropTypes from "prop-types";

// * Create Context

export const ProfileContext = createContext();

// * Create provider

export default function ProfileProvider({ children }) {

  const [profiles, setProfiles] = useState([
    'Administrador',
    'Supervisor',
    'Moderador',
    'Colaborador',
  ]);

  const addProfile = (profile) => {
    setProfiles((prev) => [...prev, profile]);
  };
  
  return (
    <ProfileContext.Provider value={{profiles, addProfile}}>
      {children}
    </ProfileContext.Provider>
  );
}

// * Validate Children prop as html "node"

ProfileProvider.propTypes = {
  children: PropTypes.node
};
