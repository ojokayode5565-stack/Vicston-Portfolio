/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(() => {
            preloader.remove();
        }, 600);

    }, 1200);
});


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MENU ON LINK CLICK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor = document.querySelector(".cursor");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }

    if(cursorOutline){

        cursorOutline.style.left = e.clientX + "px";
        cursorOutline.style.top = e.clientY + "px";

    }

});


/* ==========================================
   CURSOR HOVER EFFECT
========================================== */

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .service-card"
);

hoverElements.forEach(item => {

    item.addEventListener("mouseenter", () => {

        if(cursorOutline){
            cursorOutline.style.transform =
                "translate(-50%, -50%) scale(1.8)";
        }

    });

    item.addEventListener("mouseleave", () => {

        if(cursorOutline){
            cursorOutline.style.transform =
                "translate(-50%, -50%) scale(1)";
        }

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .service-card"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){
            el.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ==========================================
   ADD REVEAL CLASS AUTOMATICALLY
========================================== */

document.querySelectorAll(
    ".section, .project-card, .service-card"
).forEach(el => {

    el.classList.add("reveal");

});


/* ==========================================
   SKILL BARS ANIMATION
========================================== */

const skillBars = document.querySelectorAll(
    ".progress div"
);

const animateSkills = () => {

    skillBars.forEach(bar => {

        const top = bar.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            const width = bar.getAttribute("data-width");

            bar.style.width = width;
        }

    });

};

window.addEventListener("scroll", animateSkills);
animateSkills();


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if(
            link.getAttribute("href") ===
            "#" + current
        ){
            link.classList.add("current");
        }

    });

});


/* ==========================================
   STATS COUNTER
========================================== */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    if(!statsSection) return;

    const top =
        statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter => {

            let value =
                counter.innerText.replace(/\D/g,'');

            if(value === "") return;

            let target = parseInt(value);

            let count = 0;

            let speed =
                Math.ceil(target / 80);

            let update = () => {

                count += speed;

                if(count >= target){

                    counter.innerText =
                    target + "+";

                }else{

                    counter.innerText =
                    count + "+";

                    requestAnimationFrame(update);
                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);


/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer =
    item.querySelector("p");

    if(answer){
        answer.style.display = "none";
    }

    item.addEventListener("click", () => {

        const isVisible =
        answer.style.display === "block";

        document
        .querySelectorAll(".faq-item p")
        .forEach(p => {
            p.style.display = "none";
        });

        if(!isVisible){
            answer.style.display = "block";
        }

    });

});


/* ==========================================
   CONTACT FORM
========================================== */

const form =
document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs =
        form.querySelectorAll(
            "input, textarea"
        );

        let valid = true;

        inputs.forEach(input => {

            if(
                input.value.trim() === ""
            ){
                valid = false;
                input.style.borderColor =
                "red";
            }else{
                input.style.borderColor =
                "";
            }

        });

        if(valid){

            alert(
                "Thank you! Your message has been sent."
            );

            form.reset();
        }

    });

}


/* ==========================================
   HERO PARALLAX
========================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if(!hero) return;

    const scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.5 + "px";

});


/* ==========================================
   PROJECT HOVER TILT
========================================== */

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateX =
            ((y / rect.height) - 0.5) * -12;

            const rotateY =
            ((x / rect.width) - 0.5) * 12;

            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
            `;

        }
    );

});


/* ==========================================
   SMOOTH SCROLLING
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                window.scrollTo({
                    top:
                    target.offsetTop - 80,
                    behavior:"smooth"
                });

            }

        }
    );

});


/* ==========================================
   FLOATING BACKGROUND PARTICLES
========================================== */

for(let i = 0; i < 20; i++){

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.top =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    5 + Math.random() * 10 + "s";

    document.body.appendChild(
        particle
    );

}


/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(`
==================================
 VICSTON CINEMATIC PORTFOLIO
 Web Developer & Graphic Designer
==================================
`);