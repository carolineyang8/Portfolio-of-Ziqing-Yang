document.addEventListener('DOMContentLoaded', function() {
    // Project Google Drive links
    const projectLinks = {
        '1': 'https://drive.google.com/drive/folders/PROJECT1_ID',
        '2': 'https://drive.google.com/drive/folders/PROJECT2_ID',
        '3': 'https://drive.google.com/drive/folders/PROJECT3_ID',
        '4': 'https://drive.google.com/drive/folders/PROJECT4_ID',
        '5': 'https://drive.google.com/drive/folders/PROJECT5_ID',
        '6': 'https://drive.google.com/drive/folders/PROJECT6_ID'
    };

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) % 2 * 150;
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card) {
        observer.observe(card);
    });

    // Project card click handler
    projectCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const link = projectLinks[projectId];

            if (link) {
                window.open(link, '_blank', 'noopener,noreferrer');
            }
        });

        // Keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'View project details');

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section (subtle)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight * 0.5);
            }
        }, { passive: true });
    }

    // Magnetic effect on project cards (subtle)
    projectCards.forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / centerX * 5;
            const moveY = (y - centerY) / centerY * 5;

            card.style.transform = 'translateY(0) translate(' + moveX + 'px, ' + moveY + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0)';
        });
    });
});