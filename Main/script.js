// script.js

let currentSlide = 0;
let isTransitioning = false;

function setupSlides() {
    const slides = document.querySelector('.slides');
    const firstSlide = slides.children[0].cloneNode(true);
    const lastSlide = slides.children[slides.children.length - 1].cloneNode(true);

    slides.appendChild(firstSlide);
    slides.insertBefore(lastSlide, slides.children[0]);

    slides.style.transform = `translateX(-100%)`;
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    
    if (isTransitioning) return;
    isTransitioning = true;

    const totalSlides = slides.length;
    const actualSlidesCount = totalSlides - 2;

    if (index >= actualSlidesCount) {
        currentSlide = 0;
        const offset = -(index + 1) * 100;
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(-100%)`;
            isTransitioning = false;
        }, 500);
    } else if (index < 0) {
        currentSlide = actualSlidesCount - 1;
        const offset = 0;
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(-${actualSlidesCount * 100}%)`;
            isTransitioning = false;
        }, 500);
    } else {
        currentSlide = index;
        const offset = -(index + 1) * 100;
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(${offset}%)`;
        setTimeout(() => isTransitioning = false, 500);
    }
}

// Auto slide
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

function changeSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    setupSlides();
    showSlide(currentSlide);
});

// // script.js
// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }
//     const offset = -currentSlide * 100;
//     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// }

// // Auto slide
// setInterval(() => {
//     showSlide(currentSlide + 1);
// }, 3000);

// function changeSlide(step) {
//     showSlide(currentSlide + step);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
// });

// slide up
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');

    function checkVisibility() {
        gridItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the element is in the viewport
            if (itemTop < windowHeight - 100) {
                // Add delay based on the position of the item
                item.style.transitionDelay = `${index * 0.2}s`; // Adjust the delay as needed
                item.classList.add('visible');
            }
        });
    }

    // Initial check
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
});

// //our collage, lab, library
let currentSlide2 = 0;
const lslides = document.querySelectorAll('.lslide');

function showSlide2(index) {
    // Reset all slides to be hidden
    lslides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove 'active' class from all slides
        if (i === index) {
            slide.classList.add('active'); // Add 'active' class to the current slide
        }
    });
}

function changeSlide2(direction) {
    currentSlide2 += direction;
    if (currentSlide2 < 0) {
        currentSlide2 = lslides.length - 1;
    } else if (currentSlide2 >= lslides.length) {
        currentSlide2 = 0;
    }
    showSlide2(currentSlide2);
}

// Initialize the first slide as active
document.addEventListener('DOMContentLoaded', () => {
    showSlide2(currentSlide2);
});


// Optionally, you can add auto-slide functionality
setInterval(() => changeSlide2(1), 3000); 


// chief
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adding a slight delay to the appearance for a smoother effect
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, 400); // Adjust the delay if needed, but 200ms should work well
            }
        });
    });

    // Observe all elements with the class "hidden"
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});



//dark mode
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    // Check for saved theme in local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Dark Mode';
    }

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Apply dark mode to other sections if body has dark-mode class
        document.querySelectorAll('nav, header, footer, .hero, .slider, .container, .lslider-container').forEach(section => {
            section.classList.toggle('dark-mode');
        });

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});


// mission and vision
document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    function handleScrollAnimation() {
        animatedElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                element.classList.add("scrolled");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimation);
});

