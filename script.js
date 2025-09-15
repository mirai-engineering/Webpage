// Clean expandable case study functionality
function toggleDetails(button) {
    const card = button.closest('.case-study-card');
    const details = card.querySelector('.case-study-details');
    const isExpanded = details.classList.contains('expanded');
    
    if (isExpanded) {
        details.classList.remove('expanded');
        button.textContent = 'Learn More';
    } else {
        details.classList.add('expanded');
        button.textContent = 'Show Less';
    }
}

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully');
    
    // Initialize scroll animations for about page
    initScrollAnimations();
    
    // Initialize hero buttons functionality
    initHeroButtons();
});

// Scroll-triggered animations for about page
function initScrollAnimations() {
    const paragraphSections = document.querySelectorAll('.paragraph-section');
    const scrollSeparators = document.querySelectorAll('.scroll-separator');
    
    if (paragraphSections.length === 0) return; // Only run on about page
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe paragraph sections
    paragraphSections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe scroll separators
    scrollSeparators.forEach(separator => {
        observer.observe(separator);
    });
}

// Hero buttons functionality for index page
function initHeroButtons() {
    const primaryButton = document.querySelector('.btn-primary');
    const secondaryButton = document.querySelector('.btn-secondary');
    
    if (primaryButton) {
        primaryButton.addEventListener('click', function() {
            const whatIsAiSection = document.getElementById('what-is-ai');
            if (whatIsAiSection) {
                whatIsAiSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (secondaryButton) {
        secondaryButton.addEventListener('click', function() {
            const caseStudiesSection = document.getElementById('case-studies');
            if (caseStudiesSection) {
                caseStudiesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

