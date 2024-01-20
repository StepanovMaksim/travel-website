const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const getVideo = document.getElementsByTagName('video');
const textAdv = document.getElementsByClassName('description');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;

let slideNumber = 0;

const textCenter = 'Забудьте о привычных маршрутах и окунитесь в мир незабываемых приключений! Мы предлагаем вам путешествие вашей жизни - тур по самым живописным лесам нашей страны. Отправляйтесь с нами в увлекательное путешествие по густым сибирским лесам, насладитесь красотой многовековых лесов Алтая или раскройте тайны могучих лесов Карелии.';

let i = 0,
    str = [];

nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.classList.remove('active1')
    });

    slideNumber++;
    
    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
    clearInterval(anim);
}

prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.classList.remove('active1');
    });

    slideNumber--;
    
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}

function textPlay(text) {
    i = 0;
    str = [];
    let anim = setInterval(function() {
        str[i] = text[i]; 
        if (i < text.length) {
           textAdv[0].textContent = str.join('');
            i++;        
        } else clearInterval(anim);
    }, 100);
    
}

const playVideo = () => {
    slides[slideNumber].classList.remove('active');
    slides[slideNumber].classList.add('active1');
    getVideo[0].classList.add('active');
    textPlay(textCenter);
};



