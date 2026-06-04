import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BetterToday from "./components/BetterToday/BetterToday";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-glow"></div>
      <BetterToday />
    </>
  );
}

export default App;