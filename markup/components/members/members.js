(() => {
    const members = document.querySelector('#members');

    if(!members) {
        return;
    }

    const btnPrev = members.querySelector('#btn-prev');
    const btnNext = members.querySelector('#btn-next');
    const num = members.querySelector('#nums span:first-of-type');
    const sliderItems = members.querySelectorAll('#slider-members .members__item');

    let firstElement = 0;
    let lastElement = 2;
    let steps = 3;
    let lastLoopElement = 2;
    let firstLoopElement = 3;
    let interval = null;

    if(window.innerWidth <= 1024) {
        lastLoopElement = 1;
        firstLoopElement = 2;
        lastElement = 1;
        steps = 2;
    }

    if(window.innerWidth <= 768) {
        lastLoopElement = 0;
        firstLoopElement = 1;
        lastElement = 0;
        steps = 1;
    }

    const hideSlides = () => {
        sliderItems.forEach((slide) => {
            slide.classList.remove('show');
        })
    }

    const switchSlider = () => {
        interval = setInterval(() => {
            btnNext.click();
        }, 4000);
    } 

    const showSlides = () => {
        sliderItems.forEach((slide, i) => {
            if(i >= firstElement && i <= lastElement) {
                slide.classList.add('show');
            }
        })
    }

    const setNumerSlides = () => {
        num.textContent = lastElement + 1;
    }

    const setupSlider = () => {
        hideSlides();
        showSlides();
        setNumerSlides();
        clearInterval(interval);
        switchSlider();
    }

    btnNext.addEventListener('click', () => {
        if(lastElement >= sliderItems.length - 1) {
            firstElement = 0;
            lastElement = lastLoopElement;
        } else {
            firstElement += steps;
            lastElement += steps;
        }

        setupSlider();
    });

    btnPrev.addEventListener('click', () => {
        if(firstElement <= 0) {
            firstElement = sliderItems.length - firstLoopElement;
            lastElement = sliderItems.length - 1;
        } else {
            firstElement -= steps;
            lastElement -= steps;
        }

        setupSlider();
    })

    switchSlider();
    setNumerSlides();
    showSlides();
})();