import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BetterToday from "./components/BetterToday/BetterToday";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-glow"></div>
      <BetterToday />
      <Services />
      <Testimonials />
    </>
  );
}

export default App;