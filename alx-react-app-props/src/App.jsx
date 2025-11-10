// src/App.jsx
import { UserContext } from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 25,
    bio: "Loves hiking and photography",
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;