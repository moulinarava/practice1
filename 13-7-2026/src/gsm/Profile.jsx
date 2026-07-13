import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user}</p>

      <button onClick={() => setUser("Mouli")}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;