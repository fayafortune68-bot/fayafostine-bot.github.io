// ============================
// MENU MOBILE
// ============================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.replace("fa-bars", "fa-xmark");

    } else {

        icon.classList.replace("fa-xmark", "fa-bars");

    }

});


// Fermer le menu après un clic

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// ============================
// ANIMATION TEXTE
// ============================

const typingText = document.querySelector(".typing-text");

const words = [

    "Biotechnologie",
    "Bio-industrie",
    "Sciences du vivant",
    "Innovation scientifique"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingText.textContent = currentWord.substring(0, charIndex);


    let speed = deleting ? 60 : 110;


    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        speed = 1400;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// ============================
// ANIMATION AU SCROLL
// ============================

const revealElements = document.querySelectorAll(
    ".about-card, .timeline-item, .skill-card, .project-card, .contact-grid"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});


revealElements.forEach(element => {

    observer.observe(element);

});


// ============================
// FILTRAGE DES PROJETS
// ============================

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;


        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


// ============================
// FORMULAIRE DE CONTACT
// ============================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent = "Veuillez remplir tous les champs.";

        return;

    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        formMessage.textContent = "Veuillez entrer une adresse email valide.";

        return;

    }


    // Remplacer par ton adresse email personnelle

    const destinationEmail = "tonemail@example.com";


    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(

        "Nom : " + name +
        "\nEmail : " + email +
        "\n\nMessage :\n" + message

    );


    const mailLink =

        `mailto:${destinationEmail}?subject=${mailSubject}&body=${mailBody}`;


    formMessage.textContent = "Ouverture de votre application email...";


    window.location.href = mailLink;

});


// ============================
// ANNEE AUTOMATIQUE
// ============================

document.getElementById("year").textContent =

    new Date().getFullYear();


// ============================
// NAVIGATION ACTIVE
// ============================

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});