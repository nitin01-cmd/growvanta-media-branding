import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "AI Powered Video Production", subtitle: "Cinematic. Intelligent. Conversion Focused.", label: "AI Video Creation" },
  { title: "Authentic Content That Sells", subtitle: "Real People. Real Impact.", label: "UGC Content" },
  { title: "Authority Driven Influence", subtitle: "Strategic Partnerships. Explosive Reach.", label: "Influencer Marketing" },
  { title: "Turn Attention Into Revenue", subtitle: "Engagement. Growth. Monetization.", label: "Social Media Marketing" },
  { title: "Dominate Search. Own Attention.", subtitle: "Precision Targeting. Maximum ROI.", label: "SEO & Google Ads" },
  { title: "Build Digital Assets That Convert", subtitle: "Design. Develop. Deploy.", label: "Web & App Development" },
  { title: "Automate. Nurture. Close.", subtitle: "24/7 Intelligent Conversations.", label: "WhatsApp Automation" },
];

const ServiceSlider = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((p) => (p + 1) % services.length);
  const prev = () => setCurrent((p) => (p - 1 + services.length) % services.length);

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.3em] uppercase text-center mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            className="text-center py-16 md:py-24 px-8 border border-border rounded-sm bg-background/50"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold font-body text-xs tracking-[0.4em] uppercase">
              {services[current].label}
            </span>
            <h3 className="font-heading text-3xl md:text-5xl text-foreground mt-6 mb-4 gold-glow-text">
              {services[current].title}
            </h3>
            <p className="font-body text-muted-foreground text-lg">
              {services[current].subtitle}
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-body text-sm text-muted-foreground">
              {String(current + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              className="p-3 border border-gold/30 text-gold hover:bg-gold/10 transition-colors rounded-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;
