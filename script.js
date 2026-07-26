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

/* ABOUT START */
const about=document.querySelector(".about");
const aboutText=document.querySelector(".about-text");
const aboutImg=document.querySelector(".about-img");
if(about){
const aboutObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
about.classList.add("show");
if(aboutText)aboutText.classList.add("show");
if(aboutImg)aboutImg.classList.add("animate");
}else{
about.classList.remove("show");
if(aboutText)aboutText.classList.remove("show");
if(aboutImg)aboutImg.classList.remove("animate");
}
});
},{threshold:.3});
aboutObserver.observe(about);
}
/* ABOUT END */

/* SKILLS START */
const skills=document.querySelector(".skills");
const skillCards=document.querySelectorAll(".skill-card");
if(skills){
const skillObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
skills.classList.add("show-section");
skillCards.forEach((card,index)=>{
setTimeout(()=>{
card.classList.add("show");
},index*200);
});
}else{
skills.classList.remove("show-section");
skillCards.forEach(card=>{
card.classList.remove("show");
});
}
});
},{threshold:.25});
skillObserver.observe(skills);
}
/* SKILLS END */

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
