/**
 * Created by Jacob on 2018-01-31.
 */
const sliderWithNone = document.querySelectorAll('.mySlides');
const slider1 = document.querySelector('#slider1');

const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');

const slidersArray = Array.from(sliderWithNone);
slidersArray.unshift(slider1);
function next() {
    let currentSlide = slidersArray.findIndex(slider => !(slider.classList.contains('mySlides')));

    if(currentSlide == slidersArray.length - 1) {
        currentSlide = 1;
        slidersArray[currentSlide-1].classList.remove('mySlides');
        slidersArray[slidersArray.length - 1].classList.add('mySlides');
        slidersArray[currentSlide-1].children[0].style.width = '100%'


    }else {
        slidersArray[currentSlide + 1].classList.remove('mySlides');
        slidersArray[currentSlide].classList.add('mySlides');
        console.log(slidersArray[currentSlide + 1].children[0].style.width = '100%');
    }
}

function previous() {
    let currentSlide = slidersArray.findIndex(slider => !(slider.classList.contains('mySlides')));

    if(currentSlide == 0) {
        currentSlide = 0;
        slidersArray[currentSlide].classList.add('mySlides');
        slidersArray[slidersArray.length - 1].classList.remove('mySlides');
        slidersArray[slidersArray.length - 1].children[0].style.width = '100%'


    }else {
        slidersArray[currentSlide - 1].classList.remove('mySlides');
        slidersArray[currentSlide].classList.add('mySlides');
        console.log(slidersArray[currentSlide - 1].children[0].style.width = '100%');
    }
}


buttonNext.addEventListener('click', next);
buttonPrev.addEventListener('click', previous);
