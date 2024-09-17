(() => {
    const slider = document.querySelector('#slider-stages');

    if(window.innerWidth <= 768 && !slider) {
        return;
    }

    const btnPrev = slider.querySelector('#btn-prev-stages');
    const btnNext = slider.querySelector('#btn-next-stages');
    const slides = slider.querySelectorAll('.stages__item');
    const dots = slider.querySelectorAll('#dots span');

    let firstElement = 0;
    let steps = 1;

    const hideSlides = () => {
        slides.forEach((slide) => {
            slide.classList.remove('show');
        })

        dots.forEach((slide) => {
            slide.classList.remove('active');
        })
    }

    const showSlides = () => {
        slides.forEach((slide, i) => {
            if(i === firstElement) {
                slide.classList.add('show');
                dots[i].classList.add('active');
            }

            if(firstElement >= slides.length - 1) {
                btnNext.setAttribute('disabled', true);
            } else {
                btnNext.removeAttribute('disabled');
            }

            if(firstElement <= 0) {
                btnPrev.setAttribute('disabled', true);
            } else {
                btnPrev.removeAttribute('disabled');
            }
        })
    }


    btnNext.addEventListener('click', () => {
        firstElement += steps;

        hideSlides();
        showSlides();
    });

    btnPrev.addEventListener('click', () => {
        firstElement -= steps;

        hideSlides();
        showSlides();
    })

    showSlides();
})();