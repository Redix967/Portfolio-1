document.addEventListener('DOMContentLoaded', () => {

    const highlighter = document.getElementById('nav-highlighter');
    const navLinks = document.querySelectorAll('.nav');
    const initialActiveLink = document.querySelector('.nav.active');

    function moveHighlighter(target) {
        if (!target) return;

        const targetContainer = target.parentElement;
        const targetWidth = targetContainer.offsetWidth;
        const targetLeft = targetContainer.offsetLeft;

        highlighter.style.width = `${targetWidth}px`;
        highlighter.style.transform = `translateX(${targetLeft}px) translateY(-50%)`;
    }

    moveHighlighter(initialActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const currentActive = document.querySelector('.nav.active');

            if (currentActive) {
                currentActive.classList.remove('active');
            }

            this.classList.add('active');

            moveHighlighter(this);
        });
    });
});