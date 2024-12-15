// Basisinstellingen
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 200;

// Tekstconfiguratie
const textConfig = {
  opacity: 0, // Start met onzichtbare tekst
};

// Particle constructor
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.baseX = x;
    this.baseY = y;
    this.offsetX = Math.random() * 100 - 50; // willekeurige offset
    this.offsetY = Math.random() * 100 - 50;
    this.color = `rgba(255, 255, 255, ${Math.random()})`;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Deeltjes maken
function createParticles() {
  for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

// Tekst tekenen
function drawText() {
  ctx.save();
  ctx.globalAlpha = textConfig.opacity; // Opacity voor fade-in
  ctx.font = '10rem Archivo Black';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText('SCROLL', canvas.width / 2, canvas.height / 2 + 30);
  ctx.restore();
}

// Deeltjes animeren
function animateParticles() {
  particles.forEach((particle) => {
    // Gebruik GSAP om de deeltjes te bewegen
    gsap.to(particle, {
      duration: 4,
      x: particle.baseX + particle.offsetX,
      y: particle.baseY + particle.offsetY,
      repeat: -1, // oneindige herhaling
      yoyo: true, // heen en terug bewegen
      ease: 'power1.inOut',
      onUpdate: () => particle.draw(),
    });
  });
}

// Tekst animeren
function animateText() {
  // Fade-in
  gsap.to(textConfig, {
    opacity: 1,
    duration: 2,
    onComplete: () => {
      // Flikkerend effect
      gsap.to(textConfig, {
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    },
  });
}

// Canvas updaten
function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawText();
  particles.forEach((particle) => particle.draw());
  requestAnimationFrame(animateCanvas);
}

// Start de animatie
createParticles();
animateParticles();
animateText();
animateCanvas();

// Canvas herconfigureren bij venstergrootte wijzigen
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.length = 0;
  createParticles();
  animateParticles();
});
