// Device Detection & Mobile Routing - Enhanced with Safety Measures
class DeviceDetector {
    constructor() {
        this.isMobile = this.detectMobile();
        this.isDesktop = this.detectDesktop();
        this.init();
    }
    
    detectMobile() {
        // Check user agent
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileKeywords = [
            'mobile', 'android', 'iphone', 'ipad', 'ipod', 
            'blackberry', 'windows phone', 'opera mini'
        ];
        
        const isMobileUA = mobileKeywords.some(keyword => 
            userAgent.includes(keyword)
        );
        
        // Check screen size
        const isMobileScreen = window.innerWidth <= 768;
        
        // Check touch capability
        const isTouchDevice = 'ontouchstart' in window || 
                              navigator.maxTouchPoints > 0;
        
        // Mobile if any condition is true
        return isMobileUA || (isMobileScreen && isTouchDevice);
    }
    
    detectDesktop() {
        // Explicitly detect desktop to prevent false mobile detection
        const userAgent = navigator.userAgent.toLowerCase();
        const desktopKeywords = [
            'windows nt', 'macintosh', 'linux', 'x11'
        ];
        
        const isDesktopUA = desktopKeywords.some(keyword => 
            userAgent.includes(keyword)
        );
        
        // Desktop if screen is large and has desktop user agent
        const isLargeScreen = window.innerWidth > 1024;
        
        return isDesktopUA && isLargeScreen;
    }
    
    init() {
        // Safety check: Only redirect if we're confident it's mobile
        if (this.isMobile && !this.isDesktop) {
            this.redirectToMobile();
        } else if (this.isDesktop) {
            this.ensureDesktopVersion();
        }
        // If neither mobile nor desktop detected, stay on current page
    }
    
    redirectToMobile() {
        const currentPath = window.location.pathname;
        const mobilePath = this.getMobilePath(currentPath);
        
        // Safety: Only redirect if not already on mobile version
        if (!currentPath.includes('/mobile/')) {
            // Add error handling for mobile file access
            this.checkMobileFileExists(mobilePath).then(exists => {
                if (exists) {
                    window.location.href = mobilePath;
                } else {
                    console.warn('Mobile file not found, staying on desktop version');
                }
            }).catch(error => {
                console.warn('Error checking mobile file, staying on desktop version:', error);
            });
        }
    }
    
    async checkMobileFileExists(mobilePath) {
        try {
            const response = await fetch(mobilePath, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
    
    getMobilePath(currentPath) {
        const baseUrl = window.location.origin;
        
        // Map desktop pages to mobile pages
        const pageMap = {
            '/index.html': '/mobile/index.html',
            '/about.html': '/mobile/about.html',
            '/ai-service.html': '/mobile/ai-service.html',
            '/industries.html': '/mobile/industries.html',
            '/contact.html': '/mobile/contact.html',
            '/ai-tech-stack.html': '/mobile/ai-service.html', // Redirect to main service page
            '/blog.html': '/mobile/contact.html' // Redirect to contact for now
        };
        
        // Default to mobile index if no mapping found
        return baseUrl + (pageMap[currentPath] || '/mobile/index.html');
    }
    
    ensureDesktopVersion() {
        // If on mobile version but desktop detected, redirect to desktop
        if (window.location.pathname.includes('/mobile/')) {
            const desktopPath = window.location.pathname.replace('/mobile/', '/');
            // Safety: Check if desktop file exists before redirecting
            this.checkDesktopFileExists(desktopPath).then(exists => {
                if (exists) {
                    window.location.href = desktopPath;
                } else {
                    console.warn('Desktop file not found, staying on mobile version');
                }
            }).catch(error => {
                console.warn('Error checking desktop file, staying on mobile version:', error);
            });
        }
    }
    
    async checkDesktopFileExists(desktopPath) {
        try {
            const response = await fetch(desktopPath, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
}

// Initialize device detection with safety measures
document.addEventListener('DOMContentLoaded', () => {
    // Add small delay to ensure page is fully loaded
    setTimeout(() => {
        try {
            new DeviceDetector();
        } catch (error) {
            console.warn('Device detection failed, staying on current version:', error);
        }
    }, 100);
});

// Handle window resize with throttling
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        try {
            new DeviceDetector();
        } catch (error) {
            console.warn('Device detection on resize failed:', error);
        }
    }, 250);
});
