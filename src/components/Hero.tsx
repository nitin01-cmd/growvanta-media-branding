import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.05)_0%,transparent_70%)]" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 400 + i * 200,
              height: 400 + i * 200,
              border: "1px solid hsl(var(--gold) / 0.05)",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Gold Ring */}
        <motion.div
          className="mx-auto mb-12 relative"
          style={{ width: 320, height: 320 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-gold/60 animate-ring-glow" />
          <motion.div
            className="absolute inset-2 rounded-full border border-gold/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
              className="font-heading text-2xl md:text-3xl font-bold tracking-[0.3em] text-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              GROWVANTA
            </motion.h1>
            <motion.span
              className="font-heading text-sm md:text-base tracking-[0.5em] text-gold mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              MEDIA
            </motion.span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-heading text-xl md:text-3xl text-foreground mb-4 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          We Build. We Market. We Scale.
        </motion.p>

        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Helping businesses scale faster using smarter digital systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-gold text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)] transition-all duration-300"
          >
            Book Strategy Call
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-gold text-gold font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-gold/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
