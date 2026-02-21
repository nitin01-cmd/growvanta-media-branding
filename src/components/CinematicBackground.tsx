import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  connected: boolean;
}

interface DataStream {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  width: number;
}

interface FloatingGraph {
  x: number;
  y: number;
  points: number[];
  opacity: number;
  scale: number;
  vx: number;
  vy: number;
}

interface HoloRing {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  rotation: number;
  speed: number;
}

const CinematicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Particles for neural network
    const particles: Particle[] = [];
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        connected: Math.random() > 0.3,
      });
    }

    // Data streams (vertical falling lines)
    const streams: DataStream[] = [];
    for (let i = 0; i < 12; i++) {
      streams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: Math.random() * 0.4 + 0.15,
        length: Math.random() * 120 + 60,
        opacity: Math.random() * 0.08 + 0.02,
        width: Math.random() * 1 + 0.5,
      });
    }

    // Floating analytics graphs
    const graphs: FloatingGraph[] = [];
    for (let i = 0; i < 5; i++) {
      const pts = [];
      for (let j = 0; j < 8; j++) pts.push(Math.random() * 30 + 5);
      graphs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        points: pts,
        opacity: Math.random() * 0.06 + 0.02,
        scale: Math.random() * 0.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1,
      });
    }

    // Holographic rings
    const holoRings: HoloRing[] = [];
    for (let i = 0; i < 4; i++) {
      holoRings.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 60 + 30,
        opacity: Math.random() * 0.04 + 0.01,
        rotation: Math.random() * Math.PI * 2,
        speed: (Math.random() - 0.5) * 0.003,
      });
    }

    const connectionDistance = 150;
    let time = 0;

    const drawNeuralNetwork = () => {
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        if (!particles[i].connected) continue;
        for (let j = i + 1; j < particles.length; j++) {
          if (!particles[j].connected) continue;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const pulse = Math.sin(time * 0.001 + p.x * 0.01) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * pulse})`;
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
    };

    const drawDataStreams = () => {
      for (const s of streams) {
        const gradient = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.length);
        gradient.addColorStop(0, `rgba(212, 175, 55, 0)`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${s.opacity})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y + s.length);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.width;
        ctx.stroke();

        s.y += s.speed;
        if (s.y > height + s.length) {
          s.y = -s.length;
          s.x = Math.random() * width;
        }
      }
    };

    const drawFloatingGraphs = () => {
      for (const g of graphs) {
        ctx.save();
        ctx.translate(g.x, g.y);
        ctx.scale(g.scale, g.scale);
        ctx.globalAlpha = g.opacity;

        // Draw mini chart
        ctx.beginPath();
        for (let i = 0; i < g.points.length; i++) {
          const px = i * 12;
          const py = 40 - g.points[i];
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = "rgba(212, 175, 55, 1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw dots on chart
        for (let i = 0; i < g.points.length; i++) {
          ctx.beginPath();
          ctx.arc(i * 12, 40 - g.points[i], 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(212, 175, 55, 0.8)";
          ctx.fill();
        }

        // Draw axis lines
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(g.points.length * 12, 40);
        ctx.strokeStyle = "rgba(212, 175, 55, 0.3)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();

        g.x += g.vx;
        g.y += g.vy;
        if (g.x < -100) g.x = width + 50;
        if (g.x > width + 100) g.x = -50;
        if (g.y < -60) g.y = height + 30;
        if (g.y > height + 60) g.y = -30;
      }
    };

    const drawHoloRings = () => {
      for (const ring of holoRings) {
        ctx.save();
        ctx.translate(ring.x, ring.y);
        ctx.rotate(ring.rotation);
        ctx.globalAlpha = ring.opacity + Math.sin(time * 0.0008) * 0.01;

        // Elliptical ring
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.radius, ring.radius * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.radius * 0.7, ring.radius * 0.25, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(212, 175, 55, 0.3)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();
        ring.rotation += ring.speed;
      }
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      drawNeuralNetwork();
      drawDataStreams();
      drawFloatingGraphs();
      drawHoloRings();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default CinematicBackground;
