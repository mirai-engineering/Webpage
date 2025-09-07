// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Show/hide sections based on navigation
    function showSection(targetSection) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Show target section
        const section = document.getElementById(targetSection);
        if (section) {
            section.style.display = 'block';
            // Small delay to ensure display is set before adding active class
            setTimeout(() => {
                section.classList.add('active');
            }, 10);
        }
    }
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                // Handle anchor links (scroll to sections on same page)
                e.preventDefault();
                const targetId = href.substring(1);
                const section = document.getElementById(targetId);
                
                if (section) {
                    // Check if it's a section that should be shown/hidden (old navigation)
                    if (section.classList.contains('section')) {
                        showSection(targetId);
                    } else {
                        // For new sections, scroll to them
                        section.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                
                // Update active nav link
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            } else {
                // Allow normal navigation for external links and separate pages
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .industry-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navigation');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Initialize - ensure first section is visible
    const firstSection = document.querySelector('.section.active');
    if (firstSection) {
        firstSection.style.display = 'block';
        firstSection.style.opacity = '1';
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Handle hero CTA buttons
    const heroButtons = document.querySelectorAll('.hero-cta button');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.toLowerCase();
            
            if (buttonText.includes('what is ai') || buttonText.includes('unlock')) {
                // Scroll to What is AI section
                const targetSection = document.getElementById('what-is-ai');
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else if (buttonText.includes('case studies') || buttonText.includes('view')) {
                // Scroll to Case Studies section
                const targetSection = document.getElementById('case-studies');
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add parallax effect to hero decorative elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.geometric-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${45 + (index * 15)}deg)`;
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect on page load
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
    
    // Animated tagline with React-like state changes
    const animatedTagline = document.getElementById('animated-tagline');
    if (animatedTagline) {
        const taglineVariations = [
            "Got a project? Let's talk",
            "Ready to innovate? Let's build",
            "Need AI solutions? Let's create",
            "Want to transform? Let's start",
            "Got a challenge? Let's solve it"
        ];
        
        let currentIndex = 0;
        
        function changeTagline() {
            const currentText = animatedTagline.textContent;
            const newText = taglineVariations[currentIndex];
            
            // Fade out
            animatedTagline.style.opacity = '0';
            animatedTagline.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                // Change text
                animatedTagline.textContent = newText;
                
                // Fade in
                animatedTagline.style.opacity = '1';
                animatedTagline.style.transform = 'translateY(0)';
                
                // Move to next variation
                currentIndex = (currentIndex + 1) % taglineVariations.length;
            }, 300);
        }
        
        // Add click interaction for navigation to contact page
        animatedTagline.addEventListener('click', function(e) {
            // Allow the default link behavior to navigate to contact.html
            // The href="contact.html" will handle the navigation
        });
        
        // Auto-change every 4 seconds
        setInterval(changeTagline, 4000);
        
        // Add hover effect
        animatedTagline.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.animationDuration = '1s';
        });
        
        animatedTagline.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.animationDuration = '3s';
        });
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // Show loading state
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Preparing...';
            submitButton.disabled = true;
            
            // Show loading message
            showFormMessage('Preparing your message...', 'info');
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const company = formData.get('company') || 'Not specified';
            const industry = formData.get('industry') || 'Not specified';
            const projectType = formData.get('project-type') || 'Not specified';
            const budget = formData.get('budget') || 'Not specified';
            const timeline = formData.get('timeline') || 'Not specified';
            const message = formData.get('message');
            
            // Validate required fields
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields (Name, Email, and Message).', 'error');
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                return;
            }
            
            // Create email content
            const emailSubject = `New Contact Form Submission from ${name}`;
            const emailBody = `
New contact form submission from Mirai Engineering website:

Name: ${name}
Email: ${email}
Company: ${company}
Industry: ${industry}
Project Type: ${projectType}
Budget Range: ${budget}
Timeline: ${timeline}

Message:
${message}

---
This message was sent from the Mirai Engineering contact form.
            `.trim();
            
            // Create mailto link
            const mailtoLink = `mailto:contact@mirai-engineering.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Update button and message
            submitButton.textContent = 'Opening Email...';
            showFormMessage('Opening your email client with a pre-filled message. Please send the email to complete your inquiry.', 'info');
            
            // Open email client
            setTimeout(() => {
                window.location.href = mailtoLink;
                
                // Show success message after opening email
                setTimeout(() => {
                    showFormMessage('Thank you! Your email client should now be open with a pre-filled message. Please send the email to complete your inquiry.', 'success');
                    contactForm.reset();
                }, 1000);
            }, 500);
            
            // Reset button state
            setTimeout(() => {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Function to show form messages
function showFormMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.textContent = message;
    
    // Add styles based on message type
    let backgroundColor;
    switch(type) {
        case 'success':
            backgroundColor = 'background: linear-gradient(135deg, #10b981, #059669); color: white;';
            break;
        case 'error':
            backgroundColor = 'background: linear-gradient(135deg, #ef4444, #dc2626); color: white;';
            break;
        case 'info':
            backgroundColor = 'background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;';
            break;
        default:
            backgroundColor = 'background: linear-gradient(135deg, #6b7280, #4b5563); color: white;';
    }
    
    messageElement.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
        ${backgroundColor}
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Insert after form
    const form = document.getElementById('contactForm');
    if (form) {
        form.parentNode.insertBefore(messageElement, form.nextSibling);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => {
                    if (messageElement.parentNode) {
                        messageElement.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
}
