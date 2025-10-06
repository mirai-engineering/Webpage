// Mobile-Optimized JavaScript
class MobileApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.setupTouchOptimizations();
        this.setupPerformanceOptimizations();
        this.setupScrollOptimizations();
    }
    
    setupNavigation() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (hamburger && mobileMenu) {
            // Toggle mobile menu
            hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            });
            
            // Close menu when clicking on links
            const menuLinks = document.querySelectorAll('.mobile-menu-link');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMobileMenu();
                }
            });
        }
    }
    
    toggleMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    closeMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobile-menu');
        
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    setupTouchOptimizations() {
        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
        
        // Optimize touch scrolling
        document.addEventListener('touchstart', (e) => {
            // Add touch class for CSS optimizations
            document.body.classList.add('touch');
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            // Remove touch class after delay
            setTimeout(() => {
                document.body.classList.remove('touch');
            }, 300);
        }, { passive: true });
    }
    
    setupPerformanceOptimizations() {
        // Lazy loading for images
        this.setupLazyLoading();
        
        // Intersection Observer for animations
        this.setupScrollAnimations();
        
        // Debounced resize handler
        this.setupResizeHandler();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Optimize touch events
        this.optimizeTouchEvents();
    }
    
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    setupScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            });
            
            document.querySelectorAll('.card, .section-mobile').forEach(el => {
                animationObserver.observe(el);
            });
        }
    }
    
    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }
    
    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
    }
    
    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'styles-mobile.css',
            'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
    
    optimizeTouchEvents() {
        // Add touch-action CSS for better touch performance
        const style = document.createElement('style');
        style.textContent = `
            * {
                touch-action: manipulation;
            }
            .btn, .mobile-menu-link, .hamburger {
                touch-action: manipulation;
                -webkit-tap-highlight-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }
    
    setupScrollOptimizations() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Hide/show navigation on scroll
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        const updateNav = () => {
            const currentScrollY = window.scrollY;
            const nav = document.querySelector('.mobile-nav');
            
            if (nav) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down - hide nav
                    nav.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up - show nav
                    nav.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateNav);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }
}

// Form handling
class MobileFormHandler {
    constructor() {
        this.setupFormValidation();
        this.setupFormSubmission();
    }
    
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }
    
    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'This field is required');
                isValid = false;
            } else {
                this.clearError(input);
            }
        });
        
        return isValid;
    }
    
    showError(input, message) {
        this.clearError(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc2626';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '4px';
        input.parentNode.appendChild(errorDiv);
        input.style.borderColor = '#dc2626';
    }
    
    clearError(input) {
        const existingError = input.parentNode.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        input.style.borderColor = '';
    }
    
    setupFormSubmission() {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });
        }
    }
    
    handleFormSubmission(form) {
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS sendForm method
        emailjs.sendForm('service_j5xal3n', 'template_ex0jzsm', form)
        .then(() => {
            // Success
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#10B981';
            form.reset();
            
            // Show success message
            this.showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.', 'success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }, (error) => {
            // Error
            console.error('Email sending failed:', error);
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.background = '#EF4444';
            
            // Show error message
            this.showNotification('Sorry, there was an error sending your message. Please try again or contact us directly at contact@mirai-engineering.com', 'error');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        });
    }
    
    showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            font-weight: 500;
            animation: slideIn 0.3s ease-out;
        `;
        notification.textContent = message;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
}

// Lightweight Mobile Node Animation
class MobileNodeBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.nodes = [];
        this.connections = [];
        this.animationId = null;
        this.init();
    }

    init() {
        if (!this.container) return;
        
        // Reduced node count for mobile performance
        this.createNodes(40); // Much fewer nodes than desktop (120)
        this.createConnections();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.resize();
        });
    }

    createNodes(nodeCount = 40) {
        const containerRect = this.container.getBoundingClientRect();
        
        for (let i = 0; i < nodeCount; i++) {
            const node = {
                id: i,
                x: Math.random() * containerRect.width,
                y: Math.random() * containerRect.height,
                vx: (Math.random() - 0.5) * 0.08, // Slower for mobile
                vy: (Math.random() - 0.5) * 0.08,
                size: Math.random() * 1.5 + 2, // Smaller nodes (2-3.5px)
                opacity: Math.random() * 0.15 + 0.3, // More subtle (0.3-0.45)
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.03 + 0.02, // Slower pulse
                connections: []
            };
            this.nodes.push(node);
        }
    }

    createConnections() {
        this.connections = [];
        
        // Simplified connection strategy for mobile
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            node.connections = [];
            
            // Connect to nearby nodes only (within 120px)
            for (let j = i + 1; j < this.nodes.length; j++) {
                const targetNode = this.nodes[j];
                const distance = this.getDistance(node, targetNode);
                
                if (distance < 120) {
                    const connection = {
                        from: node,
                        to: targetNode,
                        opacity: Math.max(0.1, 1 - distance / 120) * 0.5,
                        strength: Math.max(0.2, 1 - distance / 120),
                        distance: distance
                    };
                    
                    this.connections.push(connection);
                    node.connections.push(targetNode);
                    targetNode.connections.push(node);
                }
            }
        }
    }

    getDistance(node1, node2) {
        const dx = node1.x - node2.x;
        const dy = node1.y - node2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    updateNodes() {
        const containerRect = this.container.getBoundingClientRect();
        
        this.nodes.forEach(node => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x <= 0 || node.x >= containerRect.width) {
                node.vx *= -1;
                node.x = Math.max(0, Math.min(containerRect.width, node.x));
            }
            if (node.y <= 0 || node.y >= containerRect.height) {
                node.vy *= -1;
                node.y = Math.max(0, Math.min(containerRect.height, node.y));
            }
            
            // Update pulse
            node.pulse += node.pulseSpeed;
        });
    }

    updateConnections() {
        this.connections.forEach(connection => {
            const distance = this.getDistance(connection.from, connection.to);
            connection.opacity = Math.max(0, 1 - distance / 150) * 0.4;
        });
    }

    render() {
        const containerRect = this.container.getBoundingClientRect();
        let svg = this.container.querySelector('svg');
        
        if (!svg) {
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.style.position = 'absolute';
            svg.style.top = '0';
            svg.style.left = '0';
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.pointerEvents = 'none';
            svg.style.zIndex = '1';
            this.container.appendChild(svg);
        }
        
        svg.setAttribute('width', containerRect.width);
        svg.setAttribute('height', containerRect.height);
        svg.innerHTML = '';
        
        // Render connections (simplified for mobile)
        this.connections.forEach(connection => {
            if (connection.opacity > 0.05) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', connection.from.x);
                line.setAttribute('y1', connection.from.y);
                line.setAttribute('x2', connection.to.x);
                line.setAttribute('y2', connection.to.y);
                line.setAttribute('stroke', '#8B5CF6');
                line.setAttribute('stroke-width', Math.max(0.3, connection.strength * 1.5));
                line.setAttribute('opacity', connection.opacity);
                line.setAttribute('stroke-linecap', 'round');
                svg.appendChild(line);
            }
        });
        
        // Render nodes (simplified for mobile)
        this.nodes.forEach(node => {
            const pulseSize = node.size + Math.sin(node.pulse) * 0.5;
            const nodeOpacity = node.opacity + Math.sin(node.pulse) * 0.05;
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', node.x);
            circle.setAttribute('cy', node.y);
            circle.setAttribute('r', pulseSize);
            circle.setAttribute('fill', '#8B5CF6');
            circle.setAttribute('opacity', nodeOpacity);
            svg.appendChild(circle);
        });
    }

    animate() {
        this.updateNodes();
        this.updateConnections();
        this.render();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    resize() {
        // Recreate nodes for new container size
        this.nodes = [];
        this.connections = [];
        this.createNodes();
        this.createConnections();
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize EmailJS
(function(){
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
          publicKey: "qI1ENg1mzZ8Z5OzwL",
        });
    }
})();

// Initialize mobile app
document.addEventListener('DOMContentLoaded', () => {
    new MobileApp();
    new MobileFormHandler();
    
    // Initialize mobile node backgrounds for sections with white backgrounds
    const mobileNodeBackgrounds = [
        'success-stories-section', // index-mobile.html
        'our-values-section',      // about-mobile.html  
        'ai-types-section',        // ai-service-mobile.html
        'contact-info-section',    // contact-mobile.html
        'welcome-section',         // index-mobile.html
        'what-we-offer-section',   // index-mobile.html
        'about-section',           // about-mobile.html
        'leadership-section',      // about-mobile.html
        'services-section',        // ai-service-mobile.html
        'ai-lifecycle-section',    // ai-service-mobile.html
        'contact-form-section',    // contact-mobile.html
        'faq-section',             // contact-mobile.html
        'what-we-delivered-section' // industries-mobile.html
    ];
    
    mobileNodeBackgrounds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            new MobileNodeBackground(id);
        }
    });
});

// Service Worker for caching (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
