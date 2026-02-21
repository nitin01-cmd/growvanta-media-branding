import { motion } from "framer-motion";
import CinematicBackground from "./CinematicBackground";

const FloatingParticles = () => {
  // Particles that float outward from the center ring
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (i / 20) * Math.PI * 2,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 4,
    size: Math.random() * 2 + 1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => {
        const startX = Math.cos(p.angle) * 170;
        const startY = Math.sin(p.angle) * 170;
        const endX = Math.cos(p.angle) * 500;
        const endY = Math.sin(p.angle) * 500;

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold"
            style={{
              width: p.size,
              height: p.size,
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [startX, endX],
              y: [startY, endY],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic canvas background */}
      <CinematicBackground />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]" />

      {/* Radial gold ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.04)_0%,transparent_60%)] z-[2]" />

      {/* Floating outward particles */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center">
        <FloatingParticles />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Gold Ring with pulse */}
        <motion.div
          className="mx-auto mb-12 relative"
          style={{ width: 340, height: 340 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Outer pulsing glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-gold/40"
            animate={{
              boxShadow: [
                "0 0 15px hsl(43 72% 52% / 0.15), inset 0 0 15px hsl(43 72% 52% / 0.05)",
                "0 0 40px hsl(43 72% 52% / 0.4), inset 0 0 30px hsl(43 72% 52% / 0.1)",
                "0 0 15px hsl(43 72% 52% / 0.15), inset 0 0 15px hsl(43 72% 52% / 0.05)",
              ],
              borderColor: [
                "hsl(43 72% 52% / 0.3)",
                "hsl(43 72% 52% / 0.7)",
                "hsl(43 72% 52% / 0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Inner thin rotating ring */}
          <motion.div
            className="absolute inset-4 rounded-full border border-gold/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Second decorative ring */}
          <motion.div
            className="absolute inset-8 rounded-full border border-gold/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{ borderStyle: "dashed" }}
          />

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
              className="font-heading text-2xl md:text-3xl font-bold tracking-[0.3em] text-foreground gold-glow-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              GROWVANTA
            </motion.h1>
            <motion.span
              className="font-heading text-sm md:text-base tracking-[0.5em] text-gold mt-2"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
