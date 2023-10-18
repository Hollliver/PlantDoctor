
// change slide on next and previous button click
let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {changeSlide(currentSlide + 1)});
document.getElementById("previous").addEventListener("click", () => {changeSlide(currentSlide - 1)});

function changeSlide(moveTo) {
    if(moveTo >= slides.length) {
        moveTo = 0;
    }

    if(moveTo < 0) {
        moveTo = slides.length - 1;
    }

    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");

    currentSlide = moveTo;
}
// click breadcrumbs to change slide
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if(currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})