gsap.fromTo(".second .bg", {
    backgroundSize: "100%", 
}, {
    backgroundSize: "130%", 
    duration: 5, 
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true, 
});
