import Hero from "@/components/Hero";
import ServiceSlider from "@/components/ServiceSlider";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Results from "@/components/Results";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ServiceSlider />
      <About />
      <WhyChooseUs />
      <Results />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
