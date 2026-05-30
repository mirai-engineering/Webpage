// Removed unused toggleDetails function - functionality is handled in ai-service.html

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Removed unused scroll animations - no paragraph-section elements exist
    
    // Initialize hero buttons functionality
    initHeroButtons();
    
    // Initialize hide-on-scroll navigation
    initHideOnScrollNavigation();
    
    // Initialize animated tagline
    initAnimatedTagline();
});

// Mobile navigation functionality - usa solo el nav del header (nav.navigation)
function initMobileNavigation() {
    const nav = document.querySelector('nav.navigation');
    if (!nav) return;
    const hamburger = nav.querySelector('.hamburger');
    const navMenu = nav.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Cerrar menú al redimensionar a desktop (breakpoint 992px)
        function closeMenuIfDesktop() {
            if (window.innerWidth > 992) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
        window.addEventListener('resize', closeMenuIfDesktop);
        
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.classList.contains('active')) return;
            if (hamburger.contains(event.target) || navMenu.contains(event.target)) return;
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    }
}

// Removed unused initScrollAnimations function - no paragraph-section elements exist

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
    
    if (!navigation) return;
    
    // Simple, direct scroll handler that works
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        
        if (scrollDirection === 'down' && scrollTop > 50) {
            // Scrolling down - hide navigation
            navigation.classList.add('hidden');
        } else if (scrollDirection === 'up' || scrollTop <= 50) {
            // Scrolling up or near top - show navigation
            navigation.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Optimized animated tagline functionality
function initAnimatedTagline() {
    const taglineElement = document.getElementById('animated-tagline');
    
    if (!taglineElement) return;
    
    // Prevent multiple initializations
    if (taglineElement.dataset.initialized === 'true') return;
    
    const taglines = [
        "Got a project? Let's talk",
        "Ready to transform your business?",
        "Let's build the future together",
        "AI solutions that work",
        "Your success is our mission",
        "Innovation starts here"
    ];
    
    let currentIndex = 0;
    let intervalId;
    
    function updateTagline() {
        taglineElement.textContent = taglines[currentIndex];
        currentIndex = (currentIndex + 1) % taglines.length;
    }
    
    // Start animation
    updateTagline(); // Show first tagline immediately
    intervalId = setInterval(updateTagline, 3000);
    
    // Mark as initialized to prevent multiple initializations
    taglineElement.dataset.initialized = 'true';
    
    // Clean up interval when page unloads
    window.addEventListener('beforeunload', () => {
        if (intervalId) clearInterval(intervalId);
    });
}

// Footer-specific initialization function called by components.js
function initializeFooterScripts() {
    // Initialize the animated tagline when footer is loaded
    initAnimatedTagline();
}

// General animations initialization function called by components.js
function initializeAnimations() {
    // Re-initialize any animations that might need to run after dynamic content loads
    initAnimatedTagline();
}

