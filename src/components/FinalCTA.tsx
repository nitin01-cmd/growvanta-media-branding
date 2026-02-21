import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-background mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Ready to Scale Smarter?
        </motion.h2>

        <motion.p
          className="font-body text-lg text-background/60 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Let's build your digital growth engine.
        </motion.p>

        <motion.a
          href="#"
          className="inline-block px-10 py-4 bg-gold text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          Book Your Growth Strategy Call
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
