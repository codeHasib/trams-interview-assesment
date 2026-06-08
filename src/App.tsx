import FixedHero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesList from "./components/ServiceList";
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
      {/* Services List */}
      <ServicesList />
    </>
  );
}

export default App;
