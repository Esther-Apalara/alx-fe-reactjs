import { useContext } from "react";
import UserContext from "../UserContext"; // make sure the path is correct

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;