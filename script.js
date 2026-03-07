// animations
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
    const fadeElements = document.querySelectorAll('.about-container, .gallery, .member1-introduction, .timeline-container, .highlight-section, .contact-container, .shen-introduction');

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

// mobile responsive dropdown

// Add click functionality to dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown.querySelector('.nav-item');
    
    // Toggle dropdown on click
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Close dropdown when clicking on a dropdown item
    const dropdownItems = document.querySelectorAll('.dropdown-content a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    });
    
    // Your existing fade animation code...
    const fadeElements = document.querySelectorAll('.about-container, .gallery, .member1-introduction, .timeline-container, .highlight-section, .contact-container, .shen-introduction');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});


