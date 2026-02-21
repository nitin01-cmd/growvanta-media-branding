import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 300, suffix: "%+", label: "ROAS" },
  { value: 5, suffix: "M+", label: "Organic Reach" },
  { value: 200, suffix: "+", label: "Funnels Built" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-heading text-4xl md:text-6xl text-gold gold-glow-text">
      {count}{suffix}
    </span>
  );
};

const Results = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.3em] uppercase text-center mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Proven Results
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Numbers That Speak
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <Counter target={m.value} suffix={m.suffix} inView={inView} />
              <p className="font-body text-sm text-muted-foreground mt-3 tracking-wider uppercase">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
