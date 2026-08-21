/* =========================================
   SUNIL'S GENTS PARLOUR
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("show");
    }

}


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("#navMenu a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            const nav = document.getElementById("navMenu");

            if (nav) {
                nav.classList.remove("show");
            }

        });

    });

});


/* =========================================
   SCROLL REVEAL EFFECT
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .service-category, .contact-card, .value-card, .about-card"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================================
   CURRENT YEAR IN FOOTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const year = new Date().getFullYear();

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.innerHTML =
            "© " + year +
            " Sunil's Gents Parlour. All Rights Reserved.";

    }

});
