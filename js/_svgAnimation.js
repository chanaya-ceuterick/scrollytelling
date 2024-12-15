// Select the path element
const path = document.querySelector('.path');

// Get the total length of the path
const length = path.getTotalLength();

// Set initial stroke-dasharray and stroke-dashoffset values
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

// GSAP animation to animate the path
gsap.to(path, {
  strokeDashoffset: 0, // Animating the offset to 0 to reveal the path
  duration: 5,          // Animation duration in seconds
  repeat: -1,           // Repeat the animation infinitely
  yoyo: true,           // Alternate direction (creating a back-and-forth effect)
  ease: "power1.inOut"  // Ease function for smooth animation
});
