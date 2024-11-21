const backToTopButton=document.querySelector(".js-top-btn");
const hamburgerBtn=document.querySelector(".js-hamburger-btn");
const navList=document.querySelector(".js-nav-list");
const navItems=document.querySelectorAll(".js-nav-list-item");
const sections=document.querySelectorAll("main > section");
const navLinks=document.querySelectorAll(".js-nav-list a");
const dynamicText = document.querySelector(".about-type");
const words = [ "Creator","Designer", "Developer"];


//scroll top button

function scrollTopButtonVisibility() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    );
};

//hamburger menu

function hamburgerMenu() {

    hamburgerBtn.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        hamburgerBtn.classList.toggle("hamburger-active");
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {
            navList.classList.remove("nav-active");
            hamburgerBtn.classList.remove("hamburger-active");
        })
    });

    document.addEventListener("click", (e) => {
        if(!navList.contains(e.target) && !hamburgerBtn.contains(e.target)){
        navList.classList.remove("nav-active");
        hamburgerBtn.classList.remove("hamburger-active");
        }
    });
};

//navbar link stays highlighted 

function pageNavigation() {
    window.addEventListener("scroll",()=>{
        let current="";
        sections.forEach( section=> {
            const sectionTop=section.offsetTop;            
            const sectionHeight=section.clientHeight;            
            if(scrollY >= (sectionTop-sectionHeight/3)){
            current=section.getAttribute("id");
            }            
        })
        navLinks.forEach (link =>
            {link.classList.remove("active");
            if (link.classList.contains(current)){
                link.classList.add("active");
            }
        });
    });
};

//typing effect on about page

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = ()=> {
    const currentWord = words[wordIndex];
    const currentChar =currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    // type the next character
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect,200);
    // remove the next character
    } else if (isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect,100);
    //switch to the next word
    } else {
        isDeleting=!isDeleting;
        wordIndex= !isDeleting? (wordIndex+1) % words.length :wordIndex;
        setTimeout(typeEffect,1200);
    }
}


scrollTopButtonVisibility();
hamburgerMenu();
pageNavigation();
typeEffect();