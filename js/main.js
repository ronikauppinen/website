const text = document.getElementById("scrollText");
let pos = 0;
const speed = 1;

function scroll() {
  pos -= speed;

  // When first copy fully leaves, reset smoothly
  if (pos <= -text.children[0].offsetWidth) {
    pos = 0;
  }

  text.style.transform = `translateX(${pos}px)`;

  requestAnimationFrame(scroll);
}

scroll();


const images = [
  "assets/a48.jpg",
  "assets/info13.jpg",
  "assets/info27.jpg",
  "assets/info74.jpg",
  "assets/info72.jpg",
  "assets/info47.jpg",
  "assets/info17.jpg",
  "assets/a52.jpg",
  "assets/G1.png",
  "assets/info55.jpg",
  "assets/info38.jpg",
  "assets/test.jpg",
  "assets/info77.jpg",
  "assets/info30.jpg",
  "assets/info42.jpg",
  "assets/Drawing14.jpg",
  "assets/Drawing11.jpg",
  "assets/color38.jpg"
];

let currentIndex = -1;

function setRandomBackground() {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * images.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;

  document.body.style.backgroundImage = `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.45),
      rgba(0,0,0,0.15)
    ),
    url("${images[currentIndex]}")
  `;
}

// Set one immediately on load
setRandomBackground();

// Change every 60,000 ms (1 minute)
setInterval(setRandomBackground, 30000);
