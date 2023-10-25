// index.html
// CAROUSEL
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

// Scroll to element
 function scrollToElement(targetId) {
    let targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({behaviour: 'smooth'});
 }

 // plantShelfTool.html
// ADD PLANT 3


 // FUNCTIONS
 // + BUTTON TO OPEN CONTAINER
 

 
 // X BUTTON TO CLOSE CONTAINER -- WORKS!!!
 function toggleContainer () {
    var x = document.getElementById("add_plant_3_container");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }

 }

 
 // PLANT OBJECTS
 var houseplants = {
    caladium: {
        name: "Caladium",
        imagePath: "Assets/Plants/Caladium.svg"
    },
    chineseMoneyPlant: {
        name: "Chinese Money Plant",
        imagePath: "Assets/Plants/ChineseMoneyPlant.svg"
    },    
    parlourPalm: {
        name: "Parlour Palm",
        imagePath: "Assets/Plants/ParlourPalm.svg"
    },
    polkaDotBegonia: {
        name: "Polka Dot Begonia",
        imagePath: "Assets/Plants/PolkaDotBegonia.svg"
    },
    swissCheesePlant: {
        name: "Swiss Cheese Plant",
        imagePath: "Assets/Plants/SwissCheesePlant.svg"
    }
 }

function updateShelf() {
    //get correct shelf space for image
    let imageForUpdate = document.getElementById('image_shelf_3');
    //get plant name for display
    let selectedPlant = document.getElementById('houseplant');
    let plant = selectedPlant.value;
    // change shelf img src to display houseplant
    imageForUpdate.src ="Assets/Plants/" + plant + ".svg";
}

function removeAddPlantButton() {
    let addPlantButton = document.getElementById('add_plant_3');
    addPlantButton.style.display = "none";
}

 // SHELF OBJECTS
 
  //EVENT LISTENERS
