import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Zap, Brain, Palette, Settings } from "lucide-react";

const reasons = [
  { icon: BarChart3, text: "Data-Driven Growth Systems" },
  { icon: Zap, text: "Performance-Based Execution" },
  { icon: Brain, text: "AI-Integrated Marketing" },
  { icon: Palette, text: "Conversion-First Design" },
  { icon: Settings, text: "End-to-End Automation" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.3em] uppercase text-center mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          The Growvanta Advantage
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Why Choose Growvanta?
        </motion.h2>

        <div className="grid gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-6 p-6 border border-border rounded-sm hover:border-gold/40 transition-colors group"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-sm group-hover:bg-gold/10 transition-colors">
                <r.icon size={22} className="text-gold" />
              </div>
              <span className="font-body text-lg text-foreground">{r.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
