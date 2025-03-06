document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Resource Modal Functionality
    const resourceModal = document.getElementById('resource-modal');
    const closeModalBtn = document.querySelector('.close-btn');

    function openResourceModal() {
        resourceModal.style.display = 'block';
    }

    function closeResourceModal() {
        resourceModal.style.display = 'none';
    }

    // Attach modal open function to global scope
    window.openResourceModal = openResourceModal;

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeResourceModal);
    }

    // Close modal if clicked outside
    window.addEventListener('click', (e) => {
        if (e.target === resourceModal) {
            closeResourceModal();
        }
    });

    // Newsletter Signup Handler
    const signupForms = document.querySelectorAll('#signup-form, footer form');
    signupForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                // Basic email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(emailInput.value)) {
                    // Here you would typically send the email to a backend service
                    alert('Thank you for subscribing! You will receive our newsletter soon.');
                    emailInput.value = ''; // Clear input
                } else {
                    alert('Please enter a valid email address.');
                }
            }
        });
    });

    // Scroll-triggered animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in to sections
    const sectionsToAnimate = document.querySelectorAll(
        '#featured-sections, #featured-content, #newsletter-signup'
    );
    sectionsToAnimate.forEach(section => {
        section.classList.add('fade-in-initial');
        fadeInObserver.observe(section);
    });

    // Featured items hover effect
    const featuredItems = document.querySelectorAll('.featured-item');
    featuredItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('item-hover');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('item-hover');
        });
    });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

// Add CSS for animations (you can add this to your CSS file)
const animationStyles = `
    .fade-in-initial {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .featured-item {
        transition: transform 0.3s ease;
    }

    .featured-item.item-hover {
        transform: scale(1.05);
    }
`;

// Dynamically add animation styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);