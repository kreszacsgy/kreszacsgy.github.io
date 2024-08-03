const backToTopButton=document.querySelector(".js-top-btn");


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


scrollTopButtonVisibility();