/* ==========================================================
   1. TYPING EFFECT
========================================================== */
const words = [
    "Backend Developer",
    "Laravel Developer",
    "Information System Developer"
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingText) typeEffect();
});

/* ==========================================================
   2. SCROLL REVEAL EFFECT
========================================================== */
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
});