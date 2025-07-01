// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const typedElement = document.getElementById('typed-text');

    const photoTexts = [
    "Precious Moments.",
    "Lasting Memories.",
    "Unique Story.",
    "True Emotions.",
    "Best Angles."
];

    new Typewriter(typedElement, {
        texts: photoTexts,
        typeSpeed: 120,
        backspaceSpeed: 60,
        delayBetweenTexts: 2000
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutContainer = document.querySelector('.about-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContainer.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // adjust threshold as needed

    observer.observe(aboutContainer);
});
