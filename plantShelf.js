// index.html

// Change Carousel Images
let slides = document.querySelectorAll('.slider__slide');
let slideText = document.querySelectorAll('.slide_text');
let navLinks = document.querySelectorAll('.slider__navlink');
let currentSlide = 0;

// next button
document.getElementById('next').addEventListener('click', () => {
changeSlide(currentSlide + 1);
});
// previous button
document.getElementById('previous').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) {
    slides[currentSlide].classList.remove('active');
    slideText[currentSlide].classList.remove('active');
    navLinks[currentSlide].classList.remove('active');
    currentSlide = (moveTo + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    slideText[currentSlide].classList.add('active');
    navLinks[currentSlide].classList.add('active');
}

// Change breadcrumbs
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if(currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})



// Scroll to element
 function scrollToElement(targetId) {
    let targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({behaviour: 'smooth'});
 }

// plantShelfTool.html
 
 // toggle add plant container
 function toggleContainer (containerId) {
    var x = document.getElementById(containerId);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
 }

 function toggleGrid (shelfDisplayId) {
    var y = document.getElementById(shelfDisplayId);
    if (y.style.display === "grid") {
        y.style.display = "none";
    }
    else {
        y.style.display = "grid";
    }
 }
// update shelf with image for plant selection
function updateShelf(imageId, dropdownId) {
    //get correct shelf space for image
    let imageForUpdate = document.getElementById(imageId);
    //get plant name for display
    let selectedPlant = document.getElementById(dropdownId);
    let plant = selectedPlant.value;
    // change shelf img src to display houseplant
    imageForUpdate.src ="Assets/Plants/" + plant + ".svg";
}

// remove add plant button once selection is made
function removeAddPlantButton(addButtonId) {
    let addPlantButton = document.getElementById(addButtonId);
    addPlantButton.style.display = "none";
}


