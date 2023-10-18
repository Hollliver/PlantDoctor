// initialise array to contain slides
let slides = document.getElementsByClassName("slider__slide");
// array storing breadcrumbs
 let navlinks = document.getElementsByClassName("slider__navlink");
// which slide is active
let currentSlide = 0;


// event listeners for nav buttons
document.getElementsById("next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("previous").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});


// function to change slides
function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}


// breadcrumb function
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

