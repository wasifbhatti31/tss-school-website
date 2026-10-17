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

    const drawerSubToggles = document.querySelectorAll('.drawer-sub-toggle');
    drawerSubToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const parent = toggle.closest('.drawer-dropdown');
            if (parent) parent.classList.toggle('open');
        });
    });

    const drawerSubitems = document.querySelectorAll('.drawer-subitem');
    drawerSubitems.forEach(subitem => {
        subitem.addEventListener('click', closeMobileDrawer);
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
       3. Admission Application Modal Dialog (Dynamic Program Adaptor)
       -------------------------------------------------------------------------- */
    const modalBackdrop = document.getElementById('modal-backdrop');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const cancelModalBtn = document.getElementById('modal-cancel-btn');
    const admissionForm = document.getElementById('admission-form');
    const modalHeaderTitle = document.querySelector('#modal-backdrop .modal-header h3');
    const applyGradeSelect = document.getElementById('apply-grade');
    const applyNotesLabel = document.querySelector('label[for="apply-notes"]');
    const applyNotesInput = document.getElementById('apply-notes');
    const modalSubmitBtn = admissionForm ? admissionForm.querySelector('button[type="submit"]') : null;

    function updateModalFieldsForProgram(program) {
        const isHifz = program === 'Hifz-e-Quran Program' || (program && program.toLowerCase().includes('hifz'));
        const isUr = (localStorage.getItem('tss_lang') === 'ur') || document.body.classList.contains('lang-ur');

        if (modalHeaderTitle) {
            if (isHifz) {
                modalHeaderTitle.textContent = isUr ? 'شعبہ حفظِ قرآن داخلہ معلومات' : 'Inquire for Hifz-e-Quran';
            } else if (program && program.toLowerCase().includes('middle')) {
                modalHeaderTitle.textContent = isUr ? 'مڈل اسکول (کلاس 6–8) داخلہ معلومات' : 'Inquire for Middle School (Class 6–8)';
            } else if (program && program.toLowerCase().includes('matric')) {
                modalHeaderTitle.textContent = isUr ? 'میٹرک (کلاس 9–10) داخلہ معلومات' : 'Inquire for Matriculation (Class 9–10)';
            } else if (program && (program.toLowerCase().includes('fsc') || program.toLowerCase().includes('ics') || program.toLowerCase().includes('inter'))) {
                modalHeaderTitle.textContent = isUr ? 'ایف ایس سی اور آئی سی ایس داخلہ معلومات' : 'Inquire for F.Sc & ICS (11th–12th)';
            } else {
                modalHeaderTitle.textContent = isUr ? 'داخلے 2026–27' : 'Admissions 2026–27';
            }
        }
        if (applyGradeSelect && program) {
            // Find option matching or containing program
            let matched = false;
            for (let opt of applyGradeSelect.options) {
                if (opt.value && (opt.value.toLowerCase() === program.toLowerCase() || opt.value.toLowerCase().includes(program.toLowerCase()))) {
                    applyGradeSelect.value = opt.value;
                    matched = true;
                    break;
                }
            }
            if (!matched && isHifz) {
                applyGradeSelect.value = 'Hifz-e-Quran Program';
            }
        }
        if (applyNotesLabel) {
            if (isUr) {
                applyNotesLabel.textContent = isHifz ? 'قرآن پاک / ناظرہ کی موجودہ حالت اور تفصیلات' : 'سابقہ اسکول یا اضافی تفصیلات';
            } else {
                applyNotesLabel.textContent = isHifz ? 'Current Quran / Nazra Status & Remarks' : 'Previous School / Remarks';
            }
        }
        if (applyNotesInput) {
            if (isUr) {
                applyNotesInput.placeholder = isHifz 
                    ? 'مثلاً ناظرہ مکمل ہے، یاد کردہ پاروں کی تعداد، بچے کی عمر وغیرہ...' 
                    : 'سابقہ اسکول، گریڈ یا حاصل کردہ نمبرات کی تفصیلات...';
            } else {
                applyNotesInput.placeholder = isHifz 
                    ? 'e.g. Nazra completed, number of Paras memorized, child age, or any question...' 
                    : 'Details regarding previous school, grade, or marks...';
            }
        }
        if (modalSubmitBtn) {
            if (isUr) {
                modalSubmitBtn.textContent = isHifz ? 'حفظِ قرآن کی درخواست جمع کروائیں' : 'درخواست جمع کروائیں';
            } else {
                modalSubmitBtn.textContent = isHifz ? 'Submit Hifz Inquiry' : 'Submit Application';
            }
        }
    }

    if (applyGradeSelect) {
        applyGradeSelect.addEventListener('change', () => {
            updateModalFieldsForProgram(applyGradeSelect.value);
        });
    }

    // Dynamic field update for on-page Admissions form if present
    const admPageProgram = document.getElementById('adm-apply-program');
    const admPageNotesLabel = document.querySelector('label[for="adm-apply-notes"]');
    const admPageNotes = document.getElementById('adm-apply-notes');
    if (admPageProgram && admPageNotesLabel && admPageNotes) {
        admPageProgram.addEventListener('change', () => {
            const isHifz = admPageProgram.value === 'Hifz-e-Quran Program';
            admPageNotesLabel.textContent = isHifz ? 'Current Quran / Nazra Status & Remarks' : 'Previous School / Academic Background';
            admPageNotes.placeholder = isHifz 
                ? 'e.g. Nazra completed, number of Paras memorized, child age, or any question...' 
                : 'Mention previous school, grade, or any specific requirements...';
        });
    }

    function openModal(requestedProgram) {
        if (modalBackdrop) {
            updateModalFieldsForProgram(requestedProgram || (applyGradeSelect ? applyGradeSelect.value : ''));
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
            const prog = btn.getAttribute('data-program') || (btn.textContent.toLowerCase().includes('hifz') ? 'Hifz-e-Quran Program' : '');
            openModal(prog);
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
            const program = applyGradeSelect ? applyGradeSelect.value : '';
            const isHifz = program === 'Hifz-e-Quran Program' || program.toLowerCase().includes('hifz');

            if (!studentName || !parentName || !phone) {
                alert('Please fill out all required fields marked with *');
                return;
            }

            const submitBtn = admissionForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            setTimeout(() => {
                if (isHifz) {
                    alert(`JazakAllah Khair, ${parentName}! Your Hifz-e-Quran inquiry for ${studentName} has been received. Our Tahfeez desk will contact you at ${phone} to arrange a recitation assessment.`);
                } else {
                    alert(`Thank you, ${parentName}! The online admission form for ${studentName} has been received. Our admissions officer will contact you at ${phone}.`);
                }
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
            const rawTarget = counter.getAttribute('data-target');
            const target = parseFloat(rawTarget);
            if (isNaN(target)) return;

            const hasDecimals = (rawTarget && rawTarget.includes('.')) || (target % 1 !== 0);
            const decimals = hasDecimals ? 1 : 0;

            const duration = 1800;
            const stepTime = 25;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = hasDecimals ? target.toFixed(decimals) : target.toLocaleString();
                    clearInterval(timer);
                } else {
                    counter.textContent = hasDecimals ? current.toFixed(decimals) : Math.floor(current).toLocaleString();
                }
            }, stepTime);
        });
    }

    const statsSection = document.querySelector('.floating-stats-wrapper, .stats-counter-banner');
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
