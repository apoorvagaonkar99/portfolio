const roles = [
    "Java Developer",
    "Full Stack Developer",
    "Software Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    currentText = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent =
            currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


/* Active Navbar Highlight */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});


/* Reveal Animation */

const revealElements = document.querySelectorAll(
    ".card, .skill-card, .project-card, .summary-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

