const words = document.querySelectorAll('.word');

// Functie om de woorden te laten vallen en op de bodem te laten blijven
gsap.fromTo(words, 
    {
        y: -200, // Start boven het scherm
        opacity: 0, // Begin met 0 opacity (volledig transparant)
        x: function() { return Math.random() * window.innerWidth - window.innerWidth/3}, // Willekeurige horizontale startpositie over de volledige breedte van het scherm
    },
    {
        y: function() { return Math.random() * window.innerHeight - window.innerHeight/5},// Einde positie op de bodem (100px van de onderkant van het scherm)
        opacity: 1, // Volledige opacity
        duration: 4, // Duur van de animatie
        ease: "power4.out", // Easing voor een soepele animatie
        stagger: 0.2, // Stagger de woorden een beetje om het effect dynamischer te maken
        repeat: -1,
        onComplete: function() {
            console.log('Animatie voltooid!');
        }
    }
);
