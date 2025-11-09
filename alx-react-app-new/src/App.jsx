import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter"; // Import the Counter component

function App() {
  return (
    <div>
      {/* Task 2 component */}
      <Header />
      <MainContent />
      <Footer />

      {/* Task 1 component */}
      <WelcomeMessage />

      {/* Task 2: Counter component */}
      <Counter />

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
