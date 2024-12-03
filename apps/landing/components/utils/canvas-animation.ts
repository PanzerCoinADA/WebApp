interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export function initCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particlesArray: Particle[] = [];
  const particleCount = 100;
  const connectionDistance = 100;
  const mouseRadius = 100;

  let mouseX = 0;
  let mouseY = 0;

  function createParticle(): Particle {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    };
  }

  for (let i = 0; i < particleCount; i++) {
    particlesArray.push(createParticle());
  }

  function drawParticles() {
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";

    particlesArray.forEach((particle, i) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRadius) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouseRadius - distance) / mouseRadius;
        particle.vx += forceDirectionX * force * 0.6;
        particle.vy += forceDirectionY * force * 0.6;
      }

      for (let j = i + 1; j < particlesArray.length; j++) {
        const dx = particle.x - particlesArray[j].x;
        const dy = particle.y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
        }
      }
    });
  }

  function animate() {
    drawParticles();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  canvas.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
}
