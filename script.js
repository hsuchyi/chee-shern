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

document.addEventListener('DOMContentLoaded', () => {
    // Select both the about-container, gallery, & member1-introduction elements
    const fadeElements = document.querySelectorAll('.about-container, .gallery, .member1-introduction, .timeline-container, .highlight-section, .contact-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Add this line to unobserve the element
            }
        });
    }, { threshold: 0.1 });

    // Observe each selected element
    fadeElements.forEach(el => observer.observe(el));
});


