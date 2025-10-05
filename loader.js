document.addEventListener('DOMContentLoaded', () => {

    const loader = document.querySelector('.loader-holder');

    setTimeout(() => {
        loader.classList.add('fade-out');
        loader.addEventListener('transitionend', () => {
            loader.style.display = 'none';
        });
    }, 2500);
});