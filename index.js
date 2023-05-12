const prev = document.querySelector('#left-arrow');
const next = document.querySelector('#right-arrow');
const img = document.querySelector('.image');

const firstRect = document.querySelector('.first-rect');
const secondRect = document.querySelector('.second-rect');
const thirdRect = document.querySelector('.third-rect');

const firstSlide = document.querySelector('#first-slide');
const secondSlide = document.querySelector('#second-slide');
const thirdSlide = document.querySelector('#third-slide');

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const repair = document.querySelector('.repair');

const entities = [
    {
        img: './assets/img1.png'
    },
    {
        img: './assets/img2.png'
    },
    {
        img: './assets/img3.png'
    }
]

const setEntity = (index) => {
    img.style.backgroundImage = `url(${entities[index].img})`;

    let rect = document.querySelector('.rectangle-active');
    rect.classList.remove("rectangle-active");

    const sliderActive = document.querySelector('.slider-active');
    sliderActive.classList.remove("slider-active");

    if (index === 0) {
        firstRect.classList.add('rectangle-active');
        firstSlide.classList.add('slider-active');
        city.innerHTML = 'Rostov-on-Don LCD admiral';
        area.innerHTML = '81 m2';
        repair.innerHTML = '3.5 months';
    } else if (index === 1) {
        secondRect.classList.add('rectangle-active');
        secondSlide.classList.add('slider-active');
        city.innerHTML = 'Sochi Thieves';
        area.innerHTML = '105 m2';
        repair.innerHTML = '4 months';
    } else if (index === 2) {
        thirdRect.classList.add('rectangle-active');
        thirdSlide.classList.add('slider-active');
        city.innerHTML = 'Rostov-on-Don Patriotic';
        area.innerHTML = '93 m2';
        repair.innerHTML = '3 months';
    }

}

let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex - 1 !== -1) {
        currentIndex -= 1;
    }

    else {
        currentIndex = 2;
    }

    setEntity(currentIndex);

});
next.addEventListener('click', () => {
    if (currentIndex + 1 !== 3) {
        currentIndex += 1;
    }

    else {
        currentIndex = 0;
    }

    setEntity(currentIndex);
});

firstRect.addEventListener('click', () => {
    currentIndex = 0;
    setEntity(currentIndex);
});

firstSlide.addEventListener('click', () => {
    currentIndex = 0;
    setEntity(currentIndex);
});

secondRect.addEventListener('click', () => {
    currentIndex = 1;
    setEntity(currentIndex);
});


secondSlide.addEventListener('click', () => {
    currentIndex = 1;
    setEntity(currentIndex);
});


thirdRect.addEventListener('click', () => {
    currentIndex = 2;
    setEntity(currentIndex);
});

thirdSlide.addEventListener('click', () => {
    currentIndex = 2;
    setEntity(currentIndex);
});