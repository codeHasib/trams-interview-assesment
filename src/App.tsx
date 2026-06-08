import FixedHero from "./components/Hero";
import Navbar from "./components/Navbar";
import SplitFeatures from "./components/SplitFeatures";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <FixedHero />
      {/* Split Features */}
      <SplitFeatures />
    </>
  );
}

export default App;
