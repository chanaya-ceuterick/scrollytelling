gsap.registerPlugin(Observer);

let animating = false;  // Flag to track animation state
let section1To2 = true;  // Flag to track transition between sections
let section2To3 = false; // Flag to track transition from section 2 to 3
let section3To4 = false; // Flag to track transition from section 3 to 4
let section4To5 = false; // Flag to track transition from section 4 to 5
let section5To6 = false; // Flag to track transition from section 5 to 6

// Set up the Observer to detect wheel, touch, or pointer events
Observer.create({
  type: "wheel,touch,pointer",  // Observe wheel, touch, or pointer events
  wheelSpeed: 1,                // Speed of wheel scroll (optional)
  tolerance: 10,                // Minimum scroll distance before triggering the action
  preventDefault: true,         // Prevent default scrolling behavior

  onDown: () => {               // When the user scrolls down (wheel/touch down)
    console.log("Scrolling Down...");  // Debugging: Log when scrolling down
    if (!animating) {           // Only trigger if not animating
      animating = true;         // Prevent other scroll events during animation

      if (section1To2) {  // Transition from Section 1 to Section 2 (Slide up)
        gsap.to(".upScroll", {
          opacity: 1,             // Make sure the section is visible
          y: 0,                    // Move the section up (from below)
          duration: 1,             // Duration of the scroll animation
          ease: "power2.out",      // Easing for smooth animation
          onComplete: () => {
            section1To2 = false;  // Set flag to false after this transition
            section2To3 = true;  // Enable transition to section 3
            animating = false;    // Reset the animating flag
          },
        });
      } else if (section2To3) {  // Transition from Section 2 to Section 3 (Fade-in)
        gsap.to(".stepIntoWorld", {
          opacity: 1,             // Fade in the section
          duration: 1,             // Duration of fade-in animation
          ease: "power2.out",      // Easing for smooth animation
          onComplete: () => {
            section2To3 = false;  // Set flag to false after this transition
            section3To4 = true;  // Enable transition to Section 4
            animating = false;    // Reset the animating flag
          },
        });
      } else if (section3To4) {  // Transition from Section 3 to Section 4 (Circles expanding)
        gsap.to(".pulse-circles", {
          scale: 15,  // Increase the scale of the circles so they fill the screen
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(".heartRace", {
          opacity: 1,
          pointerEvents: "all",  // Make Section 4 interactive
          duration: 1,
          ease: "power2.out",
        });

        // Optionally, fade-out the previous section (optional)
        gsap.to(".stepIntoWorld", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            section3To4 = false;  // Reset flag after transition
            section4To5 = true;   // Set flag for transition to Section 5
            animating = false; // Reset the animating flag
          },
        });
      } else if (section4To5) {  // Transition from Section 4 to Section 5 (Fade-in)
        gsap.to(".burden", {
          opacity: 1,             // Make sure the section is visible
          y: 0,                    // Move the section up (from below)
          duration: 1,             // Duration of the scroll animation
          ease: "power2.out",      // Easing for smooth animation
          onComplete: () => {
            section4To5 = false;  // Reset flag after transition
            section5To6 = true;  // Set flag for transition to Section 6
            animating = false;    // Reset the animating flag
          },
        });
      } else if (section5To6) {  // Transition from Section 5 to Section 6 (Fade-in)
        gsap.to(".final", {
          opacity: 1,             // Fade in the section
          duration: 1,             // Duration of fade-in animation
          ease: "power2.out",      // Easing for smooth animation
          onComplete: () => {
            section5To6 = false;  // Reset flag after transition
            animating = false;    // Reset the animating flag
          },
        });
      }
    }
  },

  onUp: () => {  // When the user scrolls up (wheel/touch up)
    console.log("Scrolling Up...");  // Debugging: Log when scrolling up
    if (!animating) {  // Only trigger if not animating
      animating = true;  // Prevent other scroll events during animation
  
      if (section2To3) {  // Transition from Section 2 back to Section 1 (Fade out and in)
        gsap.to(".stepIntoWorld", {
          opacity: 0,  // Fade out Section 2
          duration: 1,
          ease: "power2.out",
        });
  
        gsap.to(".upScroll", {
          opacity: 1,  // Fade in Section 1
          y: 0,  // Ensure it moves to its correct position
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            section2To3 = false;  // Reset flag after transition
            section1To2 = true;  // Set flag for Section 1 to Section 2 transition
            animating = false;  // Reset the animating flag
          },
        });
      } else if (section3To4) {  // Transition back from Section 3 to Section 2
        gsap.to(".heartRace", {
          opacity: 0,  // Fade out Section 3
          duration: 1,
          ease: "power2.out",
        });
  
        gsap.to(".stepIntoWorld", {
          opacity: 1,  // Fade in Section 2
          duration: 1,
          ease: "power2.out",
        });
  
        section3To4 = false;  // Reset flag
        section2To3 = true;   // Allow transition back to Section 2
        animating = false;
      } else if (section4To5) {  // Transition back from Section 4 to Section 3
        gsap.to(".burden", {
          opacity: 0,  // Fade out Section 4
          duration: 1,
          ease: "power2.out",
        });
  
        gsap.to(".heartRace", {
          opacity: 1,  // Fade in Section 3
          duration: 1,
          ease: "power2.out",
        });
  
        section4To5 = false;  // Reset flag
        section3To4 = true;   // Allow transition back to Section 3
        animating = false;
      } else if (section5To6) {  // Transition back from Section 5 to Section 4
        gsap.to(".final", {
          opacity: 0,  // Fade out Section 5
          duration: 1,
          ease: "power2.out",
        });
  
        gsap.to(".burden", {
          opacity: 1,  // Fade in Section 4
          duration: 1,
          ease: "power2.out",
        });
  
        section5To6 = false;  // Reset flag
        section4To5 = true;   // Allow transition back to Section 4
        animating = false;
      }
    }
  },
  
});
