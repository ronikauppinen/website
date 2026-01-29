const text = document.getElementById("scrollText");
let pos = 0;
const speed = 1;

function scroll() {
  pos -= speed;
  text.style.transform = `translateX(${pos}px)`;

  if (pos <= -text.offsetWidth) {
    pos = window.innerWidth;
  }

  requestAnimationFrame(scroll);
}

scroll();