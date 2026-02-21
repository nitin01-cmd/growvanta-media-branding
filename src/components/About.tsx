import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Who We Are
        </motion.h2>

        <div className="gold-divider mb-10" />

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Growvanta Media is a full-stack digital growth agency built for brands that refuse to stay small.
        </motion.p>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We combine AI, automation, and performance marketing to engineer predictable scaling systems.
        </motion.p>

        <motion.div
          className="gold-divider mt-10"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default About;
