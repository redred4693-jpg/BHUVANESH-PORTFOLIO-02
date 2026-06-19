


  // this is for hero or home section
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            hero.classList.add("show");
        }else{
            hero.classList.remove("show");
        }

    });

},{
    threshold:0.3
});

observer.observe(hero);
//end hero or home section



//this is for about section
document.addEventListener("DOMContentLoaded", function () {

    const aboutSection = document.querySelector(".about");
    const aboutText = document.querySelector(".about-text");
    const aboutImg = document.querySelector(".about-img");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Existing animations
                aboutSection.classList.add("show");
                aboutText.classList.add("show");

                // Image left-right movement
                aboutImg.classList.add("animate");

            } else {

                aboutSection.classList.remove("show");
                aboutText.classList.remove("show");

                // Stop image movement when section leaves screen
                aboutImg.classList.remove("animate");

            }

        });

    }, {
        threshold: 0.3
    });

    observer.observe(aboutSection);

});
//end about sec



//this script for skills section

const skillsSection = document.querySelector('.skills');
const cards = document.querySelectorAll('.skill-card');

/* SECTION ANIMATION */
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        } else {
            entry.target.classList.remove('show-section');
        }

    });
}, {
    threshold: 0.2
});

sectionObserver.observe(skillsSection);


/* CARDS ANIMATION */
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);

        } else {
            entry.target.classList.remove('show');
        }

    });
}, {
    threshold: 0.3
});

cards.forEach(card => {
    cardObserver.observe(card);
});
//end skill sec


//this script for service section
const section = document.querySelector(".my-services");
const boxes = document.querySelectorAll(".service-box");

function checkAnimation() {
    let trigger = window.innerHeight * 0.85;
    let sectionTop = section.getBoundingClientRect().top;

    // IF IN VIEW → SHOW
    if (sectionTop < trigger && sectionTop > -section.offsetHeight) {
        section.classList.add("show");

        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add("show");
            }, index * 150);
        });
    }

    // IF OUT OF VIEW (TOP or BOTTOM) → RESET
    if (sectionTop > window.innerHeight || sectionTop < -section.offsetHeight) {
        section.classList.remove("show");

        boxes.forEach(box => {
            box.classList.remove("show");
        });
    }
}
//end service sec

// this script for my project
window.addEventListener("scroll", checkAnimation);
//
const projectSection = document.querySelector(".project-showcase");
const thumbnail = document.querySelector(".project-thumb");
const video = document.querySelector(".project-video");

// scroll animation
window.addEventListener("scroll", () => {

    let trigger = window.innerHeight * 0.85;
    let top = projectSection.getBoundingClientRect().top;

    if(top < trigger){
        projectSection.classList.add("show");
    } else {
        projectSection.classList.remove("show");
    }

});

// click to show video
thumbnail.addEventListener("click", () => {

    thumbnail.style.display = "none";
    video.style.display = "block";

    setTimeout(() => {
        video.classList.add("show");
        video.play();
    }, 50);

});
//end project sec


//this script for contect section 
const contact = document.querySelector(".contact-section");

window.addEventListener("scroll", () => {

    let trigger = window.innerHeight * 0.85;
    let top = contact.getBoundingClientRect().top;

    // IN animation
    if(top < trigger && top > -contact.offsetHeight){
        contact.classList.add("show");
    }

    // OUT animation (reset when leaving view)
    else{
        contact.classList.remove("show");
    }

});
//end contect sec

//this script for footer

const footer = document.querySelector(".portfolio-footer");

window.addEventListener("scroll", () => {

    let trigger = window.innerHeight * 0.9;
    let footerTop = footer.getBoundingClientRect().top;

    if(footerTop < trigger){
        footer.classList.add("show");
    }else{
        footer.classList.remove("show");
    }

});
//end footer js