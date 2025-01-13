import ProfileProvider from "@context/ProfileContext";
import ProfileForm from "@components/ProfileForm";
import ProfileList from "@components/ProfileList";

function ProfileView() {

  return (
    <ProfileProvider>
      <div className="card mt-5">
        <div className="card-header text-center">
          <h5 className="mt-1"> Administración de Perfiles de Usuario LIV Hospital</h5>
        </div>
        <div className="card-body">
          <ProfileForm />
          <ProfileList />
        </div>
      </div>
    </ProfileProvider>
  );
}
export default ProfileView;
