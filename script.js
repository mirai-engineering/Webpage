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
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Initialize scroll animations for about page
    initScrollAnimations();
    
    // Initialize hero buttons functionality
    initHeroButtons();
    
    // Initialize hide-on-scroll navigation
    initHideOnScrollNavigation();
});

// Mobile navigation functionality
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

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

// Hide-on-scroll navigation functionality
function initHideOnScrollNavigation() {
    const navigation = document.querySelector('.navigation');
    let lastScrollTop = 0;
    let scrollTimeout;
    
    if (!navigation) return;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Only hide/show if scrolled more than 100px
        if (Math.abs(scrollTop - lastScrollTop) > 5) {
            if (scrollDirection === 'down' && scrollTop > 100) {
                // Scrolling down - hide navigation
                navigation.classList.add('hidden');
            } else if (scrollDirection === 'up' || scrollTop <= 100) {
                // Scrolling up or near top - show navigation
                navigation.classList.remove('hidden');
            }
        }
        
        lastScrollTop = scrollTop;
        
        // Set a timeout to ensure navigation shows when scrolling stops
        scrollTimeout = setTimeout(() => {
            if (scrollTop <= 100) {
                navigation.classList.remove('hidden');
            }
        }, 150);
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
            setTimeout(() => { ticking = false; }, 16); // ~60fps
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

