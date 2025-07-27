// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
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

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .product-category, .review-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Button click tracking (for analytics)
document.querySelectorAll('.btn-product').forEach(button => {
    button.addEventListener('click', (e) => {
        // Here you would typically send analytics data
        console.log('Product button clicked:', e.target.closest('.product-card').querySelector('h4').textContent);
        
        // Add visual feedback
        const originalText = e.target.textContent;
        e.target.textContent = 'Weiterleitung...';
        e.target.style.background = '#059669';
        
        setTimeout(() => {
            e.target.textContent = originalText;
            e.target.style.background = '#2563eb';
        }, 1000);
    });
});

// Form validation (if contact form is added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Cookie consent (GDPR compliance)
function showCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        const consentBanner = document.createElement('div');
        consentBanner.innerHTML = `
            <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #1e293b; color: white; padding: 20px; z-index: 10000; text-align: center;">
                <p style="margin-bottom: 15px;">Diese Website verwendet Cookies, um Ihnen die beste Erfahrung zu bieten. 
                <a href="#" style="color: #2563eb;">Mehr erfahren</a></p>
                <button onclick="acceptCookies()" style="background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-right: 10px;">Akzeptieren</button>
                <button onclick="declineCookies()" style="background: transparent; color: white; border: 1px solid white; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Ablehnen</button>
            </div>
        `;
        document.body.appendChild(consentBanner);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.querySelector('[style*="position: fixed; bottom: 0"]').remove();
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.querySelector('[style*="position: fixed; bottom: 0"]').remove();
}

// Initialize cookie consent on page load
document.addEventListener('DOMContentLoaded', () => {
    showCookieConsent();
});

// Performance optimization: Lazy loading for images (when real images are added)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Search functionality (for future enhancement)
function initializeSearch() {
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productName = product.querySelector('h4').textContent.toLowerCase();
                const productDescription = product.querySelector('.product-description').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', initializeSearch);

