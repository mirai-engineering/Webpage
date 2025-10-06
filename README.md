# Mirai Engineering Website

A clean, optimized website for Mirai Engineering - AI consulting and implementation services.

## 🚀 Recent Cleanup & Optimization

This codebase has been comprehensively cleaned and optimized for maintainability and performance:

### 📊 Cleanup Results
- **CSS**: Reduced from 4,375 to 4,303 lines (72 lines removed, ~1.6% reduction)
- **JavaScript**: Reduced from 496 to 491 lines (5 lines removed)
- **Files**: Removed 9 unused image files and 1 empty directory
- **Code Quality**: Zero linting errors, improved maintainability

### 🧹 What Was Cleaned
1. **HTML Cleanup**: Removed commented code, unused elements, consolidated inline styles
2. **CSS Optimization**: Removed unused classes, duplicate rules, unnecessary `!important` declarations
3. **JavaScript Cleanup**: Removed console.log statements, verified all functions are used
4. **File Structure**: Removed orphaned files, organized assets
5. **Best Practices**: Enforced consistent naming, semantic HTML, proper accessibility

### 🎯 Key Features
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Dynamic Components**: Footer loaded dynamically via `components.js`
- **Animated Elements**: Smooth scroll effects and animated backgrounds
- **SEO Optimized**: Proper semantic HTML and meta tags
- **Performance**: Optimized CSS and JavaScript for fast loading

## 📁 File Structure
```
├── index.html          # Homepage
├── about.html          # About page
├── ai-service.html     # AI services page
├── industries.html     # Case studies page
├── ai-tech-stack.html  # Technology stack page
├── blog.html           # Blog page
├── contact.html        # Contact page
├── footer.html         # Dynamic footer component
├── styles.css          # Main stylesheet (4,303 lines)
├── script.js           # Main JavaScript (157 lines)
├── components.js       # Dynamic component loader (137 lines)
├── device-detection.js # Device detection utilities (197 lines)
└── assets/             # Images, PDFs, and other assets
```

## 🛠️ Technical Stack
- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern CSS with CSS variables and flexbox/grid
- **Vanilla JavaScript**: No frameworks, optimized for performance
- **Responsive Images**: Optimized for different screen sizes

## 🚀 Getting Started
1. Clone the repository
2. Open `index.html` in a web browser
3. All pages are self-contained with dynamic footer loading

## 📝 Notes
- The website maintains identical visual appearance after cleanup
- All functionality preserved and optimized
- Mobile version available in `/mobile` directory (untouched during cleanup)
- Backup created in `desktop-backup-[timestamp]` directory