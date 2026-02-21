import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { title: "AI Powered Video Production", subtitle: "Cinematic. Intelligent. Conversion Focused.", label: "AI Video Creation" },
  { title: "Authentic Content That Sells", subtitle: "Real People. Real Impact.", label: "UGC Content" },
  { title: "Authority Driven Influence", subtitle: "Strategic Partnerships. Explosive Reach.", label: "Influencer Marketing" },
  { title: "Turn Attention Into Revenue", subtitle: "Engagement. Growth. Monetization.", label: "Social Media Marketing" },
  { title: "Dominate Search. Own Attention.", subtitle: "Precision Targeting. Maximum ROI.", label: "SEO & Google Ads" },
  { title: "Build Digital Assets That Convert", subtitle: "Design. Develop. Deploy.", label: "Web & App Development" },
  { title: "Automate. Nurture. Close.", subtitle: "24/7 Intelligent Conversations.", label: "WhatsApp Automation" },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="group flex-shrink-0 w-[340px] md:w-[420px] p-8 bg-secondary border border-border rounded-sm relative overflow-hidden hover:border-gold/40 transition-all duration-500 cursor-default">
    {/* Gold accent line on top */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent group-hover:via-gold transition-all duration-500" />
    
    {/* Soft gold glow on hover */}
    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.03] transition-all duration-500" />

    <div className="relative z-10">
      <span className="font-body text-xs tracking-[0.3em] uppercase text-gold/70 group-hover:text-gold transition-colors duration-300">
        {service.label}
      </span>
      <h3 className="font-heading text-xl md:text-2xl text-foreground mt-4 mb-3 leading-tight">
        {service.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {service.subtitle}
      </p>

      {/* Decorative mini data viz */}
      <div className="mt-6 flex gap-1 items-end h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
        {[40, 65, 45, 80, 55, 70, 90, 50, 75, 60].map((h, i) => (
          <div
            key={i}
            className="w-1.5 bg-gold/60 rounded-t-sm"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ServiceSlider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Double the array for seamless loop
  const doubled = [...services, ...services];

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
        <motion.p
          className="text-gold font-body text-sm tracking-[0.3em] uppercase text-center mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.p>
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
      </div>

      {/* Continuous marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="marquee-container group/marquee relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-8 group-hover/marquee:[animation-play-state:paused] hover:[animation-duration:120s]">
            {doubled.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSlider;
