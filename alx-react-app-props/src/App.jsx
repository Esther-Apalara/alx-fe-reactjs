import React from "react";
import UserContext from "./components/UserContext"; // default import
import UserProfile from "./components/UserProfile";

function App() {
  const userData = { name: "Jane Doe", age: 25, bio: "Loves hiking" };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
      {/* Other components that need userData */}
    </UserContext.Provider>
  );
}

export default App;