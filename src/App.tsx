import FixedHero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesList from "./components/ServiceList";
import SplitFeatures from "./components/SplitFeatures";
import TestimonialSection from "./components/TestimonialSection";

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
      {/* Testimonial Section */}
      <TestimonialSection />
    </>
  );
}

export default App;
