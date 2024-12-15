    const shakeElement = document.querySelectorAll('.shake');
    gsap.to(shakeElement, {
        x: "+=4",
        y: "+=4",
        rotation: 3,
        duration: 0.05,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

   