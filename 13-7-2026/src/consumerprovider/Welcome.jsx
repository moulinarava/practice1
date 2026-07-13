import { UserContext } from "./UserContext";

function Welcome() {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <h2>Welcome, {user}</h2>
      )}
    </UserContext.Consumer>
  );
}

export default Welcome;