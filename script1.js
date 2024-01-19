const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const getVideo = document.getElementsByTagName('video');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;

let slideNumber = 0;

nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;
    
    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
    console.log(slides[slideNumber].style.zIndex)
}

prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;
    
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}


const playVideo = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    getVideo[0].style.zIndex = 101;
    console.log(getVideo[0].style.zIndex)
};

