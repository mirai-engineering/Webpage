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
    
    // Optimized scroll event handling
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }
    
    // Use passive listener for better performance
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Optimized animated tagline functionality
function initAnimatedTagline() {
    const taglineElement = document.getElementById('animated-tagline');
    
    if (!taglineElement) return;
    
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
    
    // Clean up interval when page unloads
    window.addEventListener('beforeunload', () => {
        if (intervalId) clearInterval(intervalId);
    });
}

