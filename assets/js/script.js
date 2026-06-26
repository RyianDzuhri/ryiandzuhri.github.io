/* ==========================================================
   1. TYPING EFFECT (Animasi Teks Perkenalan)
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
            setTimeout(typeEffect, 1500); // Durasi berhenti saat kata selesai diketik
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
    setTimeout(typeEffect, isDeleting ? 50 : 100); // Kecepatan mengetik & menghapus
}

// Jalankan typing effect saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    if (typingText) {
        typeEffect();
    }
});


/* ==========================================================
   2. SCROLL REVEAL EFFECT (Animasi Muncul Saat Di-scroll)
========================================================== */
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Elemen hanya dianimasikan sekali saat pertama kali terlihat
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.1,             // Aktif jika 10% elemen masuk layar
            rootMargin: "0px 0px -50px 0px" // Delay jarak pemicu animasi
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
});


/* ==========================================================
   3. DYNAMIC SCHEMA INJECTION (Sinkron & Lolos Validator)
========================================================== */
// Mengambil variabel global window.mySchemaData yang dimuat dari data/schema.jsonld 
// lalu menyuntikkannya ke tag <head> HTML agar terbaca instan oleh validator.schema.org
if (window.mySchemaData) {
    const scriptSchema = document.createElement('script');
    scriptSchema.type = 'application/ld+json';
    scriptSchema.text = JSON.stringify(window.mySchemaData);
    document.head.appendChild(scriptSchema);
} else {
    console.warn("Metadata Semantik (window.mySchemaData) belum termuat. Pastikan data/schema.jsonld dipanggil di HTML.");
}