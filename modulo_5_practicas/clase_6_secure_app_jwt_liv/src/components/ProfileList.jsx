import { useContext } from "react";
import { ProfileContext } from "@context/ProfileContext";

function ProfileList() {

  // * Get profiles from context :

  const {profiles} = useContext(ProfileContext);

  return (
    <div className="mt-3">
      <ul>
        {profiles.map((profile, index) => (
          <li key={index}>{profile}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;