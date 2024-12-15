const canvas = document.getElementById('circleCanvas');
const ctx = canvas.getContext('2d');

// Canvas instellen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cirkel eigenschappen
const circles = [];
const numberOfCircles = 3; // Aantal cirkels

// Functie om cirkels toe te voegen
for (let i = 0; i < numberOfCircles; i++) {
    const baseRadius = 30 + i * 40; // Basisradius bepaalt de grootte van elke cirkel
    circles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        baseRadius: baseRadius, // Basisstraal
        radius: baseRadius, // Startstraal (kan worden geanimeerd)
        color: (i % 2 === 0) ? 'black' : 'white' // Wissel kleuren: zwart en wit
    });
}

// Functie om een cirkel te tekenen
function drawCircle(circle) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2); // Teken de cirkel
    ctx.fillStyle = circle.color;
    ctx.fill(); // Vul de cirkel
}

// Functie om alle cirkels te tekenen (van groot naar klein, zodat de kleinste bovenop is)
function drawAllCircles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Wis het canvas
    // Sorteer de cirkels op basis van hun basisstraal in aflopende volgorde
    circles.slice().reverse().forEach(drawCircle);
}

// GSAP animatie om de straal van de cirkels te laten groeien en krimpen
function animateCircles() {
    circles.forEach((circle, index) => {
        gsap.to(circle, {
            duration: 1, // Duur van de animatie
            radius: circle.baseRadius + 100, // Vergroot de straal tijdelijk
            repeat: -1, // Herhaal de animatie oneindig
            yoyo: true, // Laat de straal weer terugkrimpen
            ease: "power1.inOut", // Soepele overgang
            delay: index * 0.1, // Zorg voor een lichte vertraging per cirkel
            onUpdate: drawAllCircles // Teken alle cirkels opnieuw bij elke update


        });
    });
   
}

animateCircles();
