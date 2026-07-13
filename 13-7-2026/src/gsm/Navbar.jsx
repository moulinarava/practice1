import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Navbar</h2>
      <p>Welcome, {user}</p>
    </div>
  );
}

export default Navbar;