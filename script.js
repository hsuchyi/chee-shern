// animations
document.addEventListener('DOMContentLoaded', () => {

    const typedElement = document.getElementById('typed-text');

    if (!typedElement || typeof Typewriter === 'undefined') {
        return;
    }

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

document.addEventListener('DOMContentLoaded', () => {
    const timelineSections = Array.from(document.querySelectorAll('.section-timeline'));

    if (!timelineSections.length) {
        return;
    }

    const trackedTimelines = timelineSections
        .map(section => ({
            section,
            bar: section.querySelector('.timeline-progress-bar')
        }))
        .filter(item => item.bar);

    if (!trackedTimelines.length) {
        return;
    }

    let ticking = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const updateTimelineProgress = () => {
        const viewportHeight = window.innerHeight;

        trackedTimelines.forEach(({ section, bar }) => {
            const rect = section.getBoundingClientRect();
            const totalTravel = rect.height + viewportHeight;
            const rawProgress = (viewportHeight - rect.top) / totalTravel;
            const progress = clamp(rawProgress, 0, 1);

            bar.style.height = `${progress * 100}%`;
        });

        ticking = false;
    };

    const requestTimelineUpdate = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(updateTimelineProgress);
    };

    window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
    window.addEventListener('resize', requestTimelineUpdate);
    requestTimelineUpdate();
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


