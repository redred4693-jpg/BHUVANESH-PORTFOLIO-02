/*==============================
MENU START
Understanding:
Mobile Menu
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

const menuToggle=document.querySelector(".menu-toggle");
const menuLinks=document.querySelector(".menu-links");

if(menuToggle&&menuLinks){

menuToggle.addEventListener("click",()=>{

menuLinks.classList.toggle("active");
menuToggle.innerHTML=menuLinks.classList.contains("active")?"✕":"☰";

});

document.querySelectorAll(".menu-links a").forEach(link=>{

link.addEventListener("click",()=>{

menuLinks.classList.remove("active");
menuToggle.innerHTML="☰";

});

});

}

/*==============================
ACTIVE MENU HIGHLIGHT
==============================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu-links a");

function activeMenu() {

let scrollY = window.pageYOffset;

sections.forEach(section => {

const sectionHeight = section.offsetHeight;
const sectionTop = section.offsetTop - 120;
const sectionId = section.getAttribute("id");

if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + sectionId){

link.classList.add("active");

}

});

}

});

}

window.addEventListener("scroll", activeMenu);
window.addEventListener("load", activeMenu);

/*==============================
MENU CLICK ACTIVE
==============================*/

navLinks.forEach(link=>{

link.addEventListener("click",function(){

navLinks.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});




/*==============================
HERO START
Understanding:
Hero Animation
==============================*/

const hero=document.querySelector(".hero");
const social=document.querySelector(".social");
const socialIcons=document.querySelectorAll(".social a");
const heroImage=document.querySelector(".hero-img img");

if(hero){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

hero.classList.add("show");

}else{

hero.classList.remove("show");

}

});

},{
threshold:.15
});

observer.observe(hero);

}

/*==============================
SOCIAL ICONS
Understanding:
Loop Animation
==============================*/

socialIcons.forEach((icon,index)=>{

const logo=icon.querySelector("i");

icon.style.animation="circleFloat 3s ease-in-out infinite";
icon.style.animationDelay=`${index*.25}s`;

if(logo){

logo.style.animation="logoWave 3s ease-in-out infinite";
logo.style.animationDelay=`${index}s`;

}

});

/*==============================
HOVER PAUSE
Understanding:
Pause Animation
==============================*/

socialIcons.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.animationPlayState="paused";

const logo=icon.querySelector("i");

if(logo){

logo.style.animationPlayState="paused";

}

});

icon.addEventListener("mouseleave",()=>{

icon.style.animationPlayState="running";

const logo=icon.querySelector("i");

if(logo){

logo.style.animationPlayState="running";

}

});

});

/*==============================
IMAGE LOAD
Understanding:
Image Fade
==============================*/

if(heroImage){

heroImage.style.opacity="0";

const showImage=()=>{

heroImage.style.opacity="1";

};

if(heroImage.complete){

showImage();

}else{

heroImage.onload=showImage;

}

}

/*==============================
SMOOTH SCROLL
Understanding:
Page Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

});

});

/*==============================
BUTTON EFFECT
Understanding:
Button Hover
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

});

/*==============================
HERO END // END JAVASCRIPT
==============================*/

/*==============================
ABOUT START
==============================*/
/*==============================
ABOUT PREMIUM ENTRY ANIMATION
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

const about=document.querySelector(".about");
const aboutImg=document.querySelector(".about-img");
const aboutText=document.querySelector(".about-text");
const bioItems=document.querySelectorAll(".bio p");

if(!about)return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

about.classList.add("show");

aboutImg?.classList.remove("animate");
void aboutImg?.offsetWidth;
aboutImg?.classList.add("animate");

aboutText?.classList.remove("show");
void aboutText?.offsetWidth;
aboutText?.classList.add("show");

bioItems.forEach((item,index)=>{

item.style.transition="none";
item.style.opacity="0";
item.style.transform="translateY(60px) scale(.92)";

requestAnimationFrame(()=>{

setTimeout(()=>{

item.style.transition="all .8s cubic-bezier(.22,1,.36,1)";
item.style.opacity="1";
item.style.transform="translateY(0) scale(1)";

},index*150);

});

});

}else{

about.classList.remove("show");

aboutImg?.classList.remove("animate");
aboutText?.classList.remove("show");

bioItems.forEach(item=>{

item.style.transition="none";
item.style.opacity="0";
item.style.transform="translateY(60px) scale(.92)";

});

}

});

},{
threshold:.25,
rootMargin:"0px 0px -15% 0px"
});

observer.observe(about);

});

/*==============================
ABOUT END
==============================*//*==============================*
* SKILLS START
*==============================*/

document.addEventListener("DOMContentLoaded", () => {

    const skills = document.querySelector(".skills");
    const cards = document.querySelectorAll(".skill-card");

    if (!skills || cards.length === 0) return;

    let current = 0;
    let skillInterval = null;
    let entryTimer = null;
    let sectionVisible = false;
    let mouseCard = null;

    /*==============================*
    * REMOVE ACTIVE
    *==============================*/

    function removeActive() {
        cards.forEach(card => {
            card.classList.remove("auto-hover");
        });
    }

    /*==============================*
    * ACTIVATE CARD
    *==============================*/

    function activateCard(index) {

        if (index < 0 || index >= cards.length) return;

        removeActive();

        cards[index].classList.add("auto-hover");

        current = index;
    }

    /*==============================*
    * STOP LOOP
    *==============================*/

    function stopLoop() {

        if (skillInterval !== null) {
            clearInterval(skillInterval);
            skillInterval = null;
        }
    }

    /*==============================*
    * START LOOP
    *==============================*/

    function startLoop() {

        stopLoop();

        if (!sectionVisible) return;

        if (mouseCard !== null) return;

        /*
        Entry animation முடிந்ததும்
        first card immediately front
        */

        activateCard(current);

        skillInterval = setInterval(() => {

            if (!sectionVisible) return;

            if (mouseCard !== null) return;

            current++;

            if (current >= cards.length) {
                current = 0;
            }

            activateCard(current);

        }, 1800);
    }

    /*==============================*
    * ENTER SECTION
    *==============================*/

    function enterSection() {

        sectionVisible = true;

        stopLoop();

        if (entryTimer !== null) {
            clearTimeout(entryTimer);
            entryTimer = null;
        }

        removeActive();

        current = 0;
        mouseCard = null;

        skills.classList.add("active");

        /*
        10 cards maximum:
        last delay = 1.5s
        animation = .7s
        */

        const lastDelay = Math.min(
            (cards.length - 1) * 0.15,
            1.5
        );

        const entryDuration = 0.75;

        const waitTime =
            (lastDelay + entryDuration + 0.05) * 1000;

        entryTimer = setTimeout(() => {

            if (!sectionVisible) return;

            if (mouseCard !== null) return;

            current = 0;

            startLoop();

        }, waitTime);
    }

    /*==============================*
    * EXIT SECTION
    *==============================*/

    function exitSection() {

        sectionVisible = false;

        stopLoop();

        if (entryTimer !== null) {
            clearTimeout(entryTimer);
            entryTimer = null;
        }

        mouseCard = null;
        current = 0;

        removeActive();

        /*
        Section completely hide
        */

        skills.classList.remove("active");
    }

    /*==============================*
    * INTERSECTION OBSERVER
    *==============================*/

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    if (!sectionVisible) {
                        enterSection();
                    }

                } else {

                    if (sectionVisible) {
                        exitSection();
                    }

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    observer.observe(skills);

    /*==============================*
    * FAST CURSOR HOVER
    *==============================*/

    cards.forEach((card, index) => {

        card.addEventListener("mouseenter", () => {

            if (!sectionVisible) return;

            /*
            Automatic loop STOP
            */

            mouseCard = index;

            stopLoop();

            /*
            Previous card immediately remove
            */

            cards.forEach(item => {
                item.classList.remove("auto-hover");
            });

            /*
            Current cursor card immediately front
            */

            card.classList.add("auto-hover");

            current = index;

        });

        /*==============================*
        * CURSOR LEAVE
        *==============================*/

        card.addEventListener("mouseleave", () => {

            if (!sectionVisible) return;

            mouseCard = null;

            /*
            Current card remove
            */

            card.classList.remove("auto-hover");

            /*
            Next card immediately front
            */

            let next = index + 1;

            if (next >= cards.length) {
                next = 0;
            }

            current = next;

            activateCard(next);

            /*
            Continue loop
            */

            startLoop();

        });

    });

    /*==============================*
    * TOUCH SUPPORT
    *==============================*/

    cards.forEach((card, index) => {

        card.addEventListener(
            "touchstart",
            () => {

                if (!sectionVisible) return;

                stopLoop();

                mouseCard = index;

                activateCard(index);

            },
            {
                passive: true
            }
        );

    });

});

/*==============================*
* SKILLS END
*==============================*/


/* SERVICES START */
const services=document.querySelector(".my-services");
const serviceCards=document.querySelectorAll(".service-box");
if(services){
const serviceObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
services.classList.add("show");
serviceCards.forEach((card,index)=>{
setTimeout(()=>{
card.classList.add("show");
},index*250);
});
}else{
services.classList.remove("show");
serviceCards.forEach(card=>{
card.classList.remove("show");
});
}
});
},{threshold:.25});
serviceObserver.observe(services);
}
/* SERVICES END */

/* PROJECT START */
const project=document.querySelector(".project-showcase");
const thumbnail=document.querySelector(".project-thumb");
const video=document.querySelector(".project-video");
if(project){
const projectObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
project.classList.add("show");
}else{
project.classList.remove("show");
}
});
},{threshold:.3});
projectObserver.observe(project);
}
if(thumbnail&&video){
thumbnail.addEventListener("click",()=>{
thumbnail.style.display="none";
video.style.display="block";
setTimeout(()=>{
video.classList.add("show");
video.play();
},100);
});
}
/* PROJECT END */

/* CONTACT START */
const contact=document.querySelector(".contact-section");
if(contact){
const contactObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
contact.classList.add("show");
}else{
contact.classList.remove("show");
}
});
},{threshold:.3});
contactObserver.observe(contact);
}
/* CONTACT END */

/* FOOTER START */
const footer=document.querySelector(".portfolio-footer");
if(footer){
const footerObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
footer.classList.add("show");
}else{
footer.classList.remove("show");
}
});
},{threshold:.4});
footerObserver.observe(footer);
}
/* FOOTER END */
