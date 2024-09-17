(() => {
    const picture = document.querySelector('.price__pic');

    if(!picture) {
        return;
    }

    const setClass = (entries) => {
        if(entries[0].isIntersecting) {
            picture.classList.add('anim')
        }
    }

    const observer = new IntersectionObserver(setClass, {threshold: 1});

    observer.observe(picture)
})()