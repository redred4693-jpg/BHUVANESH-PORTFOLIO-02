/*==============================
MENU START
==============================*/
document.addEventListener("DOMContentLoaded",()=>{
const menuToggle=document.querySelector(".menu-toggle");
const menuLinks=document.querySelector(".menu-links");
const navLinks=document.querySelectorAll(".menu-links a");
if(menuToggle&&menuLinks){
menuToggle.addEventListener("click",()=>{
menuLinks.classList.toggle("active");
menuToggle.innerHTML=menuLinks.classList.contains("active")?"✕":"☰";
});
navLinks.forEach(link=>{
link.addEventListener("click",()=>{
menuLinks.classList.remove("active");
menuToggle.innerHTML="☰";
});
});
}
/*==============================
ACTIVE MENU HIGHLIGHT
==============================*/
function activeMenu(){
const sections=document.querySelectorAll("section[id],.contact-section[id]");
const scrollY=window.scrollY;
let currentId="";
let closestDistance=Infinity;
sections.forEach(section=>{
const rect=section.getBoundingClientRect();
const sectionTop=rect.top+scrollY;
const distance=Math.abs(scrollY+150-sectionTop);
if(scrollY+150>=sectionTop&&scrollY+150<=sectionTop+section.offsetHeight){
currentId=section.id;
}
});
if(currentId){
navLinks.forEach(link=>{
link.classList.remove("active");
});
const activeLink=document.querySelector('.menu-links a[href="#'+currentId+'"]');
if(activeLink){
activeLink.classList.add("active");
}
}
}
navLinks.forEach(link=>{
link.addEventListener("click",function(){
const href=this.getAttribute("href");
if(!href||href==="#")return;
navLinks.forEach(item=>{
item.classList.remove("active");
});
this.classList.add("active");
});
});
window.addEventListener("scroll",activeMenu,{passive:true});
window.addEventListener("load",activeMenu);
/*==============================
MENU END
==============================*/



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

document.addEventListener("DOMContentLoaded",()=>{
const about=document.querySelector(".about");
const aboutImg=document.querySelector(".about-img");
const aboutText=document.querySelector(".about-text");
const bioItems=document.querySelectorAll(".bio p");

if(!about)return;

let loopTimer;

const resetAbout=()=>{
clearTimeout(loopTimer);
about.classList.remove("show");
aboutImg?.classList.remove("loop");
aboutText?.classList.remove("loop");
bioItems.forEach(item=>{
item.style.transition="none";
item.style.opacity="0";
item.style.transform="translateX(-50px)";
});
};

const showAbout=()=>{
clearTimeout(loopTimer);

about.classList.add("show");

aboutImg?.classList.remove("loop");
aboutText?.classList.remove("loop");

if(aboutImg){
aboutImg.style.transition="opacity 1.2s ease,transform 1.2s cubic-bezier(.22,1,.36,1)";
aboutImg.style.opacity="0";
aboutImg.style.transform="translateX(-120px)";
}

if(aboutText){
aboutText.style.transition="opacity 1s ease,transform 1s cubic-bezier(.22,1,.36,1)";
aboutText.style.opacity="0";
aboutText.style.transform="translateX(70px)";
}

void about.offsetWidth;

if(aboutImg){
aboutImg.style.opacity="1";
aboutImg.style.transform="translateX(0)";
}

if(aboutText){
aboutText.style.opacity="1";
aboutText.style.transform="translateX(0)";
}

bioItems.forEach((item,index)=>{
item.style.transition="opacity .6s ease,transform .6s ease";
item.style.opacity="0";
item.style.transform="translateX(-50px)";

setTimeout(()=>{
if(about.classList.contains("show")){
item.style.opacity="1";
item.style.transform="translateX(0)";
}
},index*150);
});

loopTimer=setTimeout(()=>{
if(about.classList.contains("show")){
aboutImg?.classList.add("loop");
aboutText?.classList.add("loop");
}
},1300);
};

const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
showAbout();
}else{
resetAbout();
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
==============================*/

/*==============================*
* SKILLS START
*==============================*/
document.addEventListener("DOMContentLoaded",()=>{
const skills=document.querySelector(".skills");
const cards=document.querySelectorAll(".skill-card");
if(!skills||cards.length===0)return;
let current=0;
let skillInterval=null;
let entryTimer=null;
let sectionVisible=false;
let mouseCard=null;
function removeActive(){
cards.forEach(card=>{
card.classList.remove("auto-hover");
});
}
function activateCard(index){
if(index<0||index>=cards.length)return;
removeActive();
cards[index].classList.add("auto-hover");
current=index;
}
function stopLoop(){
if(skillInterval!==null){
clearInterval(skillInterval);
skillInterval=null;
}
}
function startLoop(){
stopLoop();
if(!sectionVisible||mouseCard!==null)return;
activateCard(current);
skillInterval=setInterval(()=>{
if(!sectionVisible||mouseCard!==null)return;
current++;
if(current>=cards.length)current=0;
activateCard(current);
},1800);
}
function enterSection(){
sectionVisible=true;
stopLoop();
if(entryTimer!==null){
clearTimeout(entryTimer);
entryTimer=null;
}
removeActive();
current=0;
mouseCard=null;
skills.classList.add("active");
const lastDelay=Math.min((cards.length-1)*0.15,1.5);
const entryDuration=0.75;
const waitTime=(lastDelay+entryDuration+0.05)*1000;
entryTimer=setTimeout(()=>{
if(!sectionVisible||mouseCard!==null)return;
current=0;
startLoop();
},waitTime);
}
function exitSection(){
sectionVisible=false;
stopLoop();
if(entryTimer!==null){
clearTimeout(entryTimer);
entryTimer=null;
}
mouseCard=null;
current=0;
removeActive();
skills.classList.remove("active");
}
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
if(!sectionVisible)enterSection();
}else{
if(sectionVisible)exitSection();
}
});
},{threshold:0.3});
observer.observe(skills);
cards.forEach((card,index)=>{
card.addEventListener("mouseenter",()=>{
if(!sectionVisible)return;
mouseCard=index;
stopLoop();
cards.forEach(item=>{
item.classList.remove("auto-hover");
});
card.classList.add("auto-hover");
current=index;
});
card.addEventListener("mouseleave",()=>{
if(!sectionVisible)return;
mouseCard=null;
card.classList.remove("auto-hover");
let next=index+1;
if(next>=cards.length)next=0;
current=next;
activateCard(next);
startLoop();
});
});
cards.forEach((card,index)=>{
card.addEventListener("touchstart",()=>{
if(!sectionVisible)return;
stopLoop();
mouseCard=index;
activateCard(index);
},{passive:true});
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
if(entry.isIntersecting)card.classList.add("show");
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
if(video){
video.pause();
}
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
video.play().catch(()=>{});
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
