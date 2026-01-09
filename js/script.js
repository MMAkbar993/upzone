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