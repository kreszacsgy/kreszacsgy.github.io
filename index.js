const backToTopButton=document.querySelector(".js-top-btn");
const hamburgerBtn=document.querySelector(".js-hamburger-btn");
const navList=document.querySelector(".js-nav-list");
const navItems=document.querySelectorAll(".js-nav-list-item");
const sections=document.querySelectorAll("main > section");
const navLinks=document.querySelectorAll(".js-nav-list a");


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



scrollTopButtonVisibility();
hamburgerMenu();
pageNavigation();