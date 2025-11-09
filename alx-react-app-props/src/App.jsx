import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // Data we want to share with components
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;