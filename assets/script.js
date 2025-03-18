const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0
const Flechegauche = document.getElementById("gauche")
const Flechedroite = document.getElementById("droite")
const slide = document.querySelector(".banner-img")
const descriptionSlide = document.getElementById("descriptionSlide")
const dots = document.querySelectorAll(".dot")



function dotslide(i) {
	const dots = document.querySelectorAll(".dot");
	dots.forEach(dot => {
		dot.classList.remove("dot_selected");
	});
	const currentdot = document.querySelector(`.dot[data-index="${i}"]`);
	currentdot.classList.add("dot_selected");
}

function updateslide() {
	slide.src = slides[i].image
	descriptionSlide.innerHTML = slides[i].tagLine
}


Flechegauche.addEventListener("click", function () {
	i = (i - 1 + slides.length) % slides.length;
	updateslide();
	dotslide(i);
	console.log(i)
})
Flechedroite.addEventListener("click", function () {
	i = (i + 1) % slides.length;
	updateslide();
	dotslide(i);
	console.log(i)
})

dots.forEach(dot => {
    dot.addEventListener("click", function () {
        i = parseInt(dot.dataset.index);
        updateslide();
    });
});








