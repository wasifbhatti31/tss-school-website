/**
 * Taqwa Higher Secondary School - Main JavaScript Module
 * Handles Navigation, Mobile Hamburger Menu, Modal Dialogs,
 * Form Validation, Scroll Animations, and Smooth Interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Mobile Navigation & Hamburger Menu Toggle
       ========================================================================== */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileNavBtn = document.getElementById('close-mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileNav() {
        hamburgerBtn.classList.add('active');
        mobileNavDrawer.classList.add('active');
        mobileNavOverlay.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMobileNav() {
        hamburgerBtn.classList.remove('active');
        mobileNavDrawer.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = hamburgerBtn.classList.contains('active');
            if (isOpen) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });
    }

    if (closeMobileNavBtn) {
        closeMobileNavBtn.addEventListener('click', closeMobileNav);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileNav);
    }

    // Close mobile drawer when clicking any navigation link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    /* ==========================================================================
       2. Sticky Header Shadow on Scroll & Nav Active States
       ========================================================================== */
    const siteHeader = document.getElementById('site-header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Header styling
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }

        // Active Link Highlighting on Scroll
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       3. Admission Modal Window Handler
       ========================================================================== */
    const modalBackdrop = document.getElementById('modal-backdrop');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const cancelModalBtn = document.getElementById('modal-cancel-btn');
    const admissionForm = document.getElementById('admission-form');

    function openModal() {
        if (modalBackdrop) {
            modalBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modalBackdrop) {
            modalBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Close mobile menu if open before showing modal
            closeMobileNav();
            openModal();
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

    // Modal Escape Key Listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle Admission Form Submission
    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation check
            const studentName = document.getElementById('student-name').value.trim();
            const parentName = document.getElementById('parent-name').value.trim();
            const email = document.getElementById('apply-email').value.trim();

            if (!studentName || !parentName || !email) {
                alert('Please fill out all required fields marked with *');
                return;
            }

            // Simulate successful application submission
            const submitBtn = admissionForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${parentName}! Your admission application for ${studentName} has been received. Our admissions officer will contact you shortly.`);
                admissionForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                closeModal();
            }, 800);
        });
    }

    /* ==========================================================================
       4. Contact Form Validation & Submission
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Form inputs
            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const messageInput = document.getElementById('contact-message');

            let isValid = true;

            // Reset previous errors
            clearFormErrors();

            // Validate Name
            if (!nameInput.value.trim()) {
                showFieldError('name-error', nameInput);
                isValid = false;
            }

            // Validate Email
            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                showFieldError('email-error', emailInput);
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                showFieldError('message-error', messageInput);
                isValid = false;
            }

            if (isValid) {
                const submitBtn = document.getElementById('submit-contact-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending Message...';
                submitBtn.disabled = true;

                // Simulate network request delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    if (formAlert) {
                        formAlert.textContent = '✓ Thank you! Your message has been sent successfully. We will get back to you shortly.';
                        formAlert.className = 'form-alert success';
                        
                        setTimeout(() => {
                            formAlert.style.display = 'none';
                            formAlert.className = 'form-alert';
                        }, 6000);
                    }
                }, 1000);
            }
        });
    }

    function showFieldError(errorId, inputElement) {
        const errorSpan = document.getElementById(errorId);
        if (errorSpan) errorSpan.style.display = 'block';
        if (inputElement) inputElement.closest('.form-group').classList.add('has-error');
    }

    function clearFormErrors() {
        const errorSpans = document.querySelectorAll('.error-msg');
        errorSpans.forEach(span => span.style.display = 'none');

        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('has-error'));
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    /* ==========================================================================
       5. Newsletter Signup Handler
       ========================================================================== */
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterAlert = document.getElementById('newsletter-alert');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && validateEmail(emailInput.value.trim())) {
                newsletterAlert.textContent = '✓ Subscribed successfully!';
                newsletterAlert.classList.add('success');
                newsletterForm.reset();
                setTimeout(() => {
                    newsletterAlert.classList.remove('success');
                }, 4000);
            }
        });
    }

});
