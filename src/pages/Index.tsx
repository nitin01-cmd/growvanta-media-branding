import Hero from "@/components/Hero";
import InfiniteScrollText from "@/components/InfiniteScrollText";
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
      <InfiniteScrollText />
      <ServiceSlider />
      <div className="w-full bg-white">
        <div className="overflow-hidden py-8 border-y border-gray-200">
          <div className="flex whitespace-nowrap animate-infinite-scroll">
            {Array(20).fill("GrowVanta Media").map((item, index) => (
              <span
                key={index}
                className="font-heading text-2xl md:text-4xl text-black mx-8 inline-block"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <About />
      <WhyChooseUs />
      <Results />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
