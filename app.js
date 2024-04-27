// Get references to the carousel elements
const carousel = document.querySelector('.wrapper');
const slides = Array.from(carousel.querySelectorAll('.slide'));
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Track the index of the current slide
let currentSlideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to navigate to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Function to navigate to the previous slide
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Show the initial slide
showSlide(currentSlideIndex);




// TESTIMONIAL CARAOUSEL

// Get references to the carousel elements
const carousel2 = document.querySelector('.wrapper2');
const slides2 = Array.from(carousel2.querySelectorAll('.slide2'));
const nextBtn2= document.querySelector('.next-btn2');
const prevBtn2 = document.querySelector('.prev-btn2');

// Track the index of the current slide
let currentSlideIndex2 = 0;

// Function to show a specific slide
function showSlide2(index2) {
  slides2.forEach((slide, i) => {
    if (i === index2) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Function to navigate to the next slide
function nextSlide2() {
  currentSlideIndex2 = (currentSlideIndex2 + 1) % slides2.length;
  showSlide2(currentSlideIndex2);
}

// Function to navigate to the previous slide
function prevSlide2() {
  currentSlideIndex2 = (currentSlideIndex2 - 1 + slides2.length) % slides2.length;
  showSlide2(currentSlideIndex2);
}

// Event listeners for navigation buttons
nextBtn2.addEventListener('click', nextSlide2);
prevBtn2.addEventListener('click', prevSlide2);

// Show the initial slide
showSlide2(currentSlideIndex2);



// SLIDER IMAGE SECTION BUTTON FUNCTIONALITY


const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".left-right-cont .img-slider-btn");
    
    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const direction= button.id === "left" ?-1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left : scrollAmount, behavior : "smooth"});


            if (direction === 1 && imageList.scrollLeft + imageList.clientWidth >= imageList.scrollWidth) {
                // If scrolled to the end, scroll to the first image
                imageList.scrollTo({ left: 0, behavior: "smooth" });
            } else if (direction === -1 && imageList.scrollLeft === 0) {
                // If scrolled to the beginning, scroll to the last image
                imageList.scrollTo({ left: imageList.scrollWidth, behavior: "smooth" });
            }
        })
    })
}

window.addEventListener("load",initSlider);