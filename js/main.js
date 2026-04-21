const text = document.getElementById("scrollText");
let pos = 0;
const speed = 1;

function scroll() {
  pos -= speed;
  if (pos <= -text.children[0].offsetWidth) {
    pos = 0;
  }

  text.style.transform = `translateX(${pos}px)`;

  requestAnimationFrame(scroll);
}

scroll();


const images = [
  "/assets/a48.jpg",
  "/assets/info13.jpg",
  "/assets/info27.jpg",
  "/assets/info74.jpg",
  "/assets/info72.jpg",
  "/assets/info47.jpg",
  "/assets/info17.jpg",
  "/assets/a52.jpg",
  "/assets/G1.png",
  "/assets/info55.jpg",
  "/assets/info80.jpg",
  "/assets/info38.jpg",
  "/assets/test.jpg",
  "/assets/info77.jpg",
  "/assets/info30.jpg",
  "/assets/info42.jpg",
  "/assets/Drawing14.jpg",
  "/assets/color38.jpg",
  "/assets/info86.jpg",
  "/assets/info90.jpg",
  "/assets/info91.jpg",
  "/assets/info89.jpg"
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
setRandomBackground();
setInterval(setRandomBackground, 30000);

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

document.querySelectorAll(".gallery img").forEach(img => {
  img.style.cursor = "pointer";
  img.onclick = () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
};