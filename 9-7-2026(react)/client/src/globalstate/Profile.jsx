import { useContext } from "react";
import { UserContext } from "../App";

function Profile() {
  const user = useContext(UserContext);

  return <h2>Profile: {user}</h2>;
}

export default Profile;