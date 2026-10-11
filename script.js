/**
 * TSS Lahore
 * Interactive Control Module (Navigation, Mobile Drawer, Modal & Form Validation)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. Mobile Navigation Drawer Controller
       -------------------------------------------------------------------------- */
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileBackdrop = document.getElementById('mobile-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerItems = document.querySelectorAll('.drawer-item');

    function openMobileDrawer() {
        if (hamburgerToggle) hamburgerToggle.classList.add('active');
        if (mobileDrawer) mobileDrawer.classList.add('active');
        if (mobileBackdrop) mobileBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileDrawer() {
        if (hamburgerToggle) hamburgerToggle.classList.remove('active');
        if (mobileDrawer) mobileDrawer.classList.remove('active');
        if (mobileBackdrop) mobileBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburgerToggle) {
        hamburgerToggle.addEventListener('click', () => {
            if (mobileDrawer && mobileDrawer.classList.contains('active')) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileDrawer);

    drawerItems.forEach(item => {
        item.addEventListener('click', closeMobileDrawer);
    });

    /* --------------------------------------------------------------------------
       2. Sticky Header (Clean - No category changes on scroll)
       -------------------------------------------------------------------------- */
    const siteHeader = document.getElementById('site-header');

    window.addEventListener('scroll', () => {
        // Sticky shadow transition
        if (window.scrollY > 20) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    /* --------------------------------------------------------------------------
       3. Admission Application Modal Dialog
       -------------------------------------------------------------------------- */
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
            closeMobileDrawer();
            openModal();
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
            closeModal();
        }
    });

    if (admissionForm) {
        admissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const studentName = document.getElementById('student-name').value.trim();
            const parentName = document.getElementById('parent-name').value.trim();
            const phone = document.getElementById('apply-phone').value.trim();

            if (!studentName || !parentName || !phone) {
                alert('Please fill out all required fields marked with *');
                return;
            }

            const submitBtn = admissionForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${parentName}! The online admission form for ${studentName} has been received. Our admissions officer will contact you at ${phone}.`);
                admissionForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                closeModal();
            }, 700);
        });
    }

    /* --------------------------------------------------------------------------
       4. Contact Form Validation
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contact-name');
            const phoneInput = document.getElementById('contact-phone');
            const gradeSelect = document.getElementById('contact-grade');

            let isValid = true;
            clearFormErrors();

            if (!nameInput.value.trim()) {
                showFieldError('name-error', nameInput);
                isValid = false;
            }

            if (!phoneInput.value.trim()) {
                showFieldError('phone-error', phoneInput);
                isValid = false;
            }

            if (!gradeSelect.value) {
                showFieldError('grade-error', gradeSelect);
                isValid = false;
            }

            if (isValid) {
                const submitBtn = document.getElementById('submit-contact-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Submitting...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    if (formAlert) {
                        formAlert.textContent = '✓ Thank you! Your admission inquiry has been submitted. Our campus office will contact you shortly.';
                        formAlert.className = 'alert-box success';

                        setTimeout(() => {
                            formAlert.style.display = 'none';
                            formAlert.className = 'alert-box';
                        }, 5000);
                    }
                }, 800);
            }
        });
    }

    function showFieldError(errorId, element) {
        const errSpan = document.getElementById(errorId);
        if (errSpan) errSpan.style.display = 'block';
        if (element) element.closest('.input-group').classList.add('has-error');
    }

    function clearFormErrors() {
        document.querySelectorAll('.err-text').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.input-group').forEach(el => el.classList.remove('has-error'));
    }

    /* --------------------------------------------------------------------------
       4. Animated Statistics Counter (Smooth Count-Up)
       -------------------------------------------------------------------------- */
    const counterElements = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function runCounters() {
        if (countersStarted) return;
        countersStarted = true;

        counterElements.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            if (!target) return;

            const duration = 1800;
            const stepTime = 25;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current).toLocaleString();
                }
            }, stepTime);
        });
    }

    const statsSection = document.querySelector('.stats-counter-banner');
    if (statsSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        observer.observe(statsSection);
    } else {
        runCounters();
    }

});
