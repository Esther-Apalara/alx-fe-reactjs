import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      {/* Task 2 components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 1 component */}
      <WelcomeMessage />

      {/* Task 3 component */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;