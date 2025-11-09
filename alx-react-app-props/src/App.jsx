import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import UserContext from "./UserContext";

function App() {
  // User data moved to Context
  const userData = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        {/* Task 2 components */}
        <Header />
        <MainContent />
        <Footer />

        {/* Task 1 component */}
        <WelcomeMessage />

        {/* Task 3 component */}
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
