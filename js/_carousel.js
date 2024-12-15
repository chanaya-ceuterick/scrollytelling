const container = document.getElementById("container");

// Define the number of wrappers and boxes
const numWrappers = 15; // Number of vertical rows (wrappers)
const numBoxes = 25;   // Number of horizontal boxes per row

// Generate wrappers and boxes dynamically
for (let i = 0; i < numWrappers; i++) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const boxes = document.createElement("div");
  boxes.classList.add("boxes");

  for (let j = 0; j < numBoxes; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = "SCROLL";
    boxes.appendChild(box);
  }

  // Clone the boxes for seamless looping
  const clone = boxes.cloneNode(true);
  boxes.appendChild(clone);

  wrapper.appendChild(boxes);
  container.appendChild(wrapper);
}

// Apply GSAP animation to each row individually
const allBoxes = document.querySelectorAll(".boxes");
allBoxes.forEach((boxes, index) => {
  gsap.to(boxes, {
    x: `${numBoxes * 210}px`, // Scroll horizontally the total width of the boxes
    duration: 10 + index * 1.2,  // Different speeds for each row
    ease: "none",              // Constant speed
    repeat: -1   ,
    delay: index * 0.5             // Infinite loop
  });
});

