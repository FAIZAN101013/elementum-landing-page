import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BetterToday from "./components/BetterToday/BetterToday";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-glow"></div>
      <BetterToday />
      <Services />
    </>
  );
}

export default App;