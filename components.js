// components.js - Dynamic Component Loader
class ComponentLoader {
    static async loadComponent(containerId, htmlFile) {
        try {
            const response = await fetch(htmlFile);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
                // Re-initialize any scripts that need to run after content loads
                this.initializeScripts();
            }
        } catch (error) {
            console.warn(`Failed to load footer from ${htmlFile}:`, error.message);
            // Fallback: use embedded footer content
            this.loadEmbeddedFooter(containerId);
        }
    }
    
    static loadEmbeddedFooter(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.getEmbeddedFooterHTML();
            this.initializeScripts();
        }
    }
    
    static getEmbeddedFooterHTML() {
        return `<footer class="footer">
    <div class="container">
        <!-- SVG Gradients for Contact Icons -->
        <svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
            <defs>
                <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6B46C1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="contactGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#60A5FA;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
        
        <div class="footer-content">
            <div class="footer-brand">
                <a href="index.html" class="footer-logo">
                    <img src="assets/images/logos/logo.png" alt="Mirai Engineering" class="footer-logo-image">
                </a>
                <a href="contact.html" class="footer-tagline" id="animated-tagline">Got a project? Let's talk</a>
            </div>
            
            <div class="footer-links">
                <h3 class="footer-title">Quick Links</h3>
                <ul class="footer-nav">
                    <li><a href="about.html" class="footer-link">Who we are</a></li>
                    <li><a href="ai-service.html" class="footer-link">AI as a Service</a></li>
                    <li><a href="industries.html" class="footer-link">Case Studies</a></li>
                    <li><a href="ai-tech-stack.html" class="footer-link">AI Tech Stack</a></li>
                    <li><a href="blog.html" class="footer-link">Blog</a></li>
                    <li><a href="contact.html" class="footer-link">Get in Touch</a></li>
                </ul>
            </div>
            
            <div class="footer-contact">
                <h3 class="footer-title">Contact Us</h3>
                <div class="contact-item">
                    <span class="contact-label">Delivery:</span>
                    <span class="contact-text">Fully remote services with the possibility of meeting & working in person</span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Headquarters:</span>
                    <span class="contact-text">Ahtri tn 12, 15551 Tallinn, Estonia</span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Email:</span>
                    <span class="contact-text">contact@mirai-engineering.com</span>
                </div>
            </div>
            
            <div class="footer-social">
                <h3 class="footer-title">Connect With Us</h3>
                <a href="https://www.linkedin.com/company/mirai-engineering-ou" target="_blank" class="social-link">
                    <div class="linkedin-icon">
                        <svg viewBox="0 0 24 24" class="linkedin-svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </div>
                    <span class="social-text">LinkedIn</span>
                </a>
                <a href="https://miraiengineering.substack.com/subscribe?next=https%3A%2F%2Fmiraiengineering.substack.com%2F&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true" class="social-link" target="_blank">
                    <span class="social-icon">📰</span>
                    <span class="social-text">Our Newsletter</span>
                </a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p class="footer-copyright">&copy; 2025 Mirai Engineering OÜ. All rights reserved.</p>
        </div>
    </div>
</footer>`;
    }
    
    static initializeScripts() {
        // Re-initialize any scripts that depend on the loaded content
        // This is where you'd call any footer-specific initialization
        if (typeof initializeFooterScripts === 'function') {
            initializeFooterScripts();
        }
        
        // Re-initialize any other scripts that might be affected
        if (typeof initializeAnimations === 'function') {
            initializeAnimations();
        }
    }
}

// Auto-load footer on all pages when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load footer if container exists
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        ComponentLoader.loadComponent('footer-container', 'footer.html');
    } else {
        console.warn('Footer container not found!');
    }
});

// Export for use in other scripts if needed
window.ComponentLoader = ComponentLoader;
