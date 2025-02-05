const buttons = document.querySelectorAll("button");
const selectedButtons = Array.from(buttons).slice(0, 2);
selectedButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("contact.html", "_blank");
  });
});

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  window.open("contact.html", "_blank");
});

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  window.open("index.html", "_blank");
});

const button = document.querySelector(".home");
home.addEventListener("click", () => {
  window.open("about.html", "_blank");
});


const heroImages = [
  './img/hero1-1.jpg',
  './img/hero1-2.jpg',
  './img/hero1-3.jpg'
];

let currentHeroIndex = 0;

function changeHeroImage() {
  const imgElement = document.querySelector('.img1');
  imgElement.src = heroImages[currentHeroIndex]; 
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length; 
}

setInterval(changeHeroImage, 2000); 
changeHeroImage(); 


const shapeImages = [
  './img/shape-slide-1.png',
  './img/shape-slide-2.png',
  './img/shape-slide-3.png'
];

let currentShapeIndex = 0; 

const shapeImage = document.querySelector('.shape');
const prevBtn = document.querySelector('.svgleft');
const nextBtn = document.querySelector('.svgright');

function updateShapeImage() {
  shapeImage.src = shapeImages[currentShapeIndex]; 
}

prevBtn.addEventListener('click', () => {
  currentShapeIndex = (currentShapeIndex - 1 + shapeImages.length) % shapeImages.length; 
  updateShapeImage();
});

nextBtn.addEventListener('click', () => {
  currentShapeIndex = (currentShapeIndex + 1) % shapeImages.length; 
  updateShapeImage();
});


updateShapeImage();