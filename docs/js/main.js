document.addEventListener('DOMContentLoaded', function() {
    // Project Google Drive links
    const projectLinks = {
        '1': 'https://drive.google.com/file/d/1ZT4WN36-3IP6KLdtdbyeklm2NAhQZ7rL/view?usp=drive_link',
        '2': 'https://drive.google.com/file/d/11W-JkrkJFmNA0bUnsQhkgbifN1S5Ylq4/view?usp=drive_link',
        '3': 'https://drive.google.com/file/d/13DYGdQqDbtbRk3vF7FmPmfVo-ZDa8hpU/view?usp=drive_link',
        '4': 'https://drive.google.com/file/d/1IzfOK6P4k7tFnb_SAsrMO4KpO5_i-gOd/view?usp=drive_link',
        '5': 'https://drive.google.com/file/d/1SlnOeB4ISJ0Qx9FO7dbAJ5n5z9uG50e0/view?usp=drive_link'
    };

    // Header scroll effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const cards = Array.from(entry.target.parentElement.children);
                const index = cards.indexOf(entry.target);
                const delay = index % 2 * 150;

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

    // Project image click handler (only on image, not on text)
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(function(image) {
        image.addEventListener('click', function() {
            const card = this.closest('.project-card');
            const projectId = card.getAttribute('data-project');
            const link = projectLinks[projectId];

            if (link) {
                window.open(link, '_blank', 'noopener,noreferrer');
            }
        });

        // Keyboard accessibility
        image.setAttribute('tabindex', '0');
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', 'View project details');

        image.addEventListener('keydown', function(e) {
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
                const headerOffset = 60;
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
            const moveX = (x - centerX) / centerX * 3;
            const moveY = (y - centerY) / centerY * 3;

            card.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // Copy to clipboard functionality
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const textToCopy = this.getAttribute('data-copy');
            const feedback = this.querySelector('.copy-feedback');

            navigator.clipboard.writeText(textToCopy).then(function() {
                feedback.classList.add('show');
                setTimeout(function() {
                    feedback.classList.remove('show');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy: ', err);
            });
        });
    });
});