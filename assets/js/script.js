/* ==========================================================
   TYPING EFFECT
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

    typeEffect();

});

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Hapus baris di bawah jika ingin animasi jalan berulang kali saat di-scroll naik-turun
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.1, // Elemen akan muncul jika 10% bagiannya sudah masuk layar
            rootMargin: "0px 0px -50px 0px" // Memberikan sedikit delay sebelum memicu animasi
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
});

// Memuat metadata semantik secara dinamis dari file eksternal JSON-LD
// fetch('schema.jsonld')
//     .then(response => response.json())
//     .then(data => {
//         const script = document.createElement('script');
//         script.type = 'application/ld+json';
//         script.text = JSON.stringify(data);
//         document.head.appendChild(script);
//     })
//     .catch(error => console.error('Gagal memuat metadata semantik:', error));