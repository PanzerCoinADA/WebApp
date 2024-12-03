export const calculateMouseEffect = (e: MouseEvent, element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  return { deltaX, deltaY };
};

export const createParticles = (container: HTMLElement, count: number) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--y", `${Math.random() * 100}%`);
    particle.style.setProperty("--duration", `${Math.random() * 20 + 10}s`);
    particle.style.setProperty("--delay", `${Math.random() * 10}s`);
    container.appendChild(particle);
  }
};
