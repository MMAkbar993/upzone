// Smooth scroll for navigation links
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

// CTA Button functionality
document.querySelector('.cta-button')?.addEventListener('click', function() {
    // Add your eligibility check functionality here
    console.log('Check Eligibility clicked');
    // You can redirect to a form or open a modal
});

// Contact us button functionality
document.querySelector('.contact-us-btn')?.addEventListener('click', function() {
    window.location.href = 'tel:+97145406726';
});

// Testimonials Carousel
(function() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonials-nav-prev');
    const nextBtn = document.querySelector('.testimonials-nav-next');
    const dots = document.querySelectorAll('.pagination-dot');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    function updateCarousel() {
        // Remove active class from all cards
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
        
        // Update pagination dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }
    
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }
    
    function goToTestimonial(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn?.addEventListener('click', nextTestimonial);
    prevBtn?.addEventListener('click', prevTestimonial);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToTestimonial(index));
    });
    
    // Initialize
    updateCarousel();
    
    // Auto-play (optional - uncomment if needed)
    // let autoPlayInterval = setInterval(nextTestimonial, 5000);
    // 
    // track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    // track.addEventListener('mouseleave', () => {
    //     autoPlayInterval = setInterval(nextTestimonial, 5000);
    // });
})();

// CTA Section Button functionality
document.querySelector('.cta-section-button')?.addEventListener('click', function() {
    // Scroll to eligibility section or open form
    const eligibilitySection = document.querySelector('.eligibility-section');
    if (eligibilitySection) {
        eligibilitySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // Fallback: scroll to top or trigger eligibility check
        console.log('Check Eligibility clicked');
    }
});

// Navbar scroll background
(function() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const scrollThreshold = 50; // Change background after scrolling 50px
    
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Initial check
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
})();

// Scroll Animation on Scroll Down
(function() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale');
        animatedElements.forEach(el => el.classList.add('animated'));
        return;
    }

    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay for cards in the same container for staggered effect
                const isCard = entry.target.classList.contains('eligibility-card') || 
                              entry.target.classList.contains('how-it-works-card');
                const isTextElement = entry.target.classList.contains('eligibility-subtitle') ||
                                    entry.target.classList.contains('eligibility-heading') ||
                                    entry.target.classList.contains('eligibility-description') ||
                                    entry.target.classList.contains('how-it-works-subtitle') ||
                                    entry.target.classList.contains('how-it-works-heading') ||
                                    entry.target.classList.contains('how-it-works-description') ||
                                    entry.target.classList.contains('testimonials-heading') ||
                                    entry.target.classList.contains('why-choose-heading') ||
                                    entry.target.classList.contains('cta-heading') ||
                                    entry.target.classList.contains('cta-description');
                
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.children) : [];
                const elementIndex = siblings.indexOf(entry.target);
                
                if (isCard && elementIndex >= 0) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, elementIndex * 100); // 100ms delay between each card
                } else if (isTextElement && elementIndex >= 0) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, elementIndex * 150); // 150ms delay for text elements
                } else {
                    entry.target.classList.add('animated');
                }
                
                // Optional: Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
})();