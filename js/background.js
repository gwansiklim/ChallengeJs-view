const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png"
]
const body = document.querySelector("body");
const image = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `images/${image}`;
bgImage.classList.add("bg-image");
document.body.prepend(bgImage);