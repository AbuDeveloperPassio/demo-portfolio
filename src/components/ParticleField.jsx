import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let raf = null;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const PARTICLE_SIZE = 4;
    const LINK_DIST = 200;
    const CLEAR_RADIUS = 50;
    const PUSH_STRENGTH = 5;

    function resize() {
      width = canvas.width = wrap.offsetWidth;
      height = canvas.height = wrap.offsetHeight;

      init();
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

       this.vx = (Math.random() - 0.5) * 15;
this.vy = (Math.random() - 0.5) * 15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) {
          this.vx *= -1;
        }

        if (this.y < 0 || this.y > height) {
          this.vy *= -1;
        }

        // Keep particles inside canvas
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));

        // Mouse push effect
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CLEAR_RADIUS && dist > 0) {
            const angle = Math.atan2(dy, dx);

            const force = (1 - dist / CLEAR_RADIUS) * PUSH_STRENGTH;

            this.vx += Math.cos(angle) * force;
            this.vy += Math.sin(angle) * force;
          }
        }

        // Damping - minimal so particles keep moving forever
     this.vx *= 0.98;
this.vy *= 0.98;

        // Random energy boost to keep particles moving
      if (Math.random() < 0.09) {
       this.vx += (Math.random() - 0.5) * 2.5;
this.vy += (Math.random() - 0.5) * 2.5;
        }

        // Prevent particles from becoming too fast
       const maxSpeed = 20;

        this.vx = Math.max(-maxSpeed, Math.min(maxSpeed, this.vx));

        this.vy = Math.max(-maxSpeed, Math.min(maxSpeed, this.vy));
      }

      draw() {
        // LIGHTER GRAY PARTICLES
        ctx.fillStyle = "rgba(150, 150, 150, 0.8)";

        ctx.beginPath();

        ctx.arc(this.x, this.y, PARTICLE_SIZE, 0, Math.PI * 2);

        ctx.fill();
      }
    }

    function init() {
      particles = [];

      const particleCount = Math.floor((width * height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;

          const dy = particles[i].y - particles[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DIST) {
            const opacity = (1 - dist / LINK_DIST) * 0.6;

            // LIGHTER CONNECTING LINES
            ctx.strokeStyle = `rgba(160, 160, 160, ${opacity})`;

            ctx.lineWidth = 1.5;

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Very subtle white fade
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)";

      ctx.fillRect(0, 0, width, height);

      // Update + draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      // Draw connections
      drawLines();

      raf = requestAnimationFrame(animate);
    }

    // Mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;

      mouse.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;

      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Initial setup
    resize();
    animate();

    // Events
    wrap.addEventListener("mousemove", handleMouseMove);

    wrap.addEventListener("mouseenter", handleMouseEnter);

    wrap.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", resize);

    // Cleanup
    return () => {
      wrap.removeEventListener("mousemove", handleMouseMove);

      wrap.removeEventListener("mouseenter", handleMouseEnter);

      wrap.removeEventListener("mouseleave", handleMouseLeave);

      window.removeEventListener("resize", resize);

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 w-full h-full"
      style={{
        cursor: "crosshair",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: "block",
        }}
      />
    </div>
  );
}