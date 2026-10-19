/**
 * TSS Lahore - 100% Comprehensive Bilingual Translation Engine
 * Powered by Jameel Noori Nastaleeq Typography + Dual-Layer Deep Translation
 */

(function () {
    'use strict';

    // Core Dictionary for Instant (0ms) Hero, Nav, Programs, Modals & Stats Translation
    const DICTIONARY = {
        // Global Navigation & Announcements
        "Registration open for Hifz-e-Quran, Middle, Matric & F.Sc / ICS": "حفظِ قرآن، مڈل، میٹرک اور ایف ایس سی / آئی سی ایس کے داخلے جاری ہیں",
        "Registration open for Middle School (Class 6th, 7th & 8th)": "مڈل اسکول (کلاس ششم، ہفتم و ہشتم) کے داخلے جاری ہیں",
        "Registration open for Matriculation (Class 9th & 10th)": "میٹرک (کلاس نہم و دہم) کے داخلے جاری ہیں",
        "Registration open for F.Sc (Pre-Med/Pre-Eng) & ICS": "ایف ایس سی (پری میڈیکل / انجینئرنگ) اور آئی سی ایس کے داخلے جاری ہیں",
        "Registration open for Tahfeez-ul-Quran with Nazra & Tajweed": "شعبہ تحفیظ القرآن مع ناظرہ و تجوید کے داخلے جاری ہیں",
        "Admissions 2026": "داخلے 2026",
        "Admissions 2026–27": "داخلے 2026–27",
        "Chuburji Park, Old Rifle Range Road, Lahore": "چوبرجی پارک، اولڈ رائفل رینج روڈ، لاہور",
        "Chuburji Park, Old Rifle Range Road, Lahore, Punjab, Pakistan.": "چوبرجی پارک، اولڈ رائفل رینج روڈ، لاہور، پنجاب، پاکستان۔",
        "TSS Campus, Chuburji Park, Old Rifle Range Road, Lahore, Punjab, Pakistan.": "ٹی ایس ایس کیمپس، چوبرجی پارک، اولڈ رائفل رینج روڈ، لاہور، پنجاب، پاکستان۔",
        "Helpline: 0328 4877877": "ہیلپ لائن: 0328 4877877",
        "0328 4877877": "0328 4877877",
        "Home": "ہوم",
        "About Us": "تعارف",
        "Academics": "تعلیمی شعبہ جات",
        "Middle School (Class 6–8)": "مڈل اسکول (کلاس 6–8)",
        "• Middle School (Class 6–8)": "• مڈل اسکول (کلاس 6–8)",
        "Matriculation (Class 9–10)": "میٹرک (کلاس 9–10)",
        "• Matriculation (Class 9–10)": "• میٹرک (کلاس 9–10)",
        "F.Sc & ICS (Class 11–12)": "ایف ایس سی و آئی سی ایس (کلاس 11–12)",
        "• F.Sc & ICS (Class 11–12)": "• ایف ایس سی و آئی سی ایس (کلاس 11–12)",
        "Hifz Wing": "شعبہ حفظِ قرآن",
        "Why TSS": "ٹی ایس ایس کیوں؟",
        "Gallery": "تصویری گیلری",
        "Admissions": "داخلہ فارم",
        "Contacts": "رابطہ",
        "WhatsApp": "واٹس ایپ",
        "Apply Now": "ابھی داخلہ لیں",
        "Direct WhatsApp Helpline": "براہِ راست واٹس ایپ رابطہ",

        // Hero Section
        "BISE Lahore Affiliated Institution": "لاہور بورڈ (BISE) سے الحاق شدہ ادارہ",
        "NURTURING ACADEMIC EXCELLENCE": "اعلیٰ تعلیمی معیار اور روشن مستقبل کی ضمانت",
        "ACADEMIC EXCELLENCE": "اعلیٰ تعلیمی معیار اور روشن مستقبل",
        "Shaping Futures, Inspiring Leaders. Welcome to TSS School.": "مستقبل کے معمار اور باصلاحیت لیڈرز کی تعمیر۔ ٹی ایس ایس اسکول میں خوش آمدید۔",
        "Welcome to TSS, Lahore. Offering integrated Tahfeez-ul-Quran, Middle School (Class 6th–8th), and Board-focused Matriculation & F.Sc / ICS preparation at Chuburji Park, Lahore.": "ٹی ایس ایس لاہور میں خوش آمدید۔ چوبرجی پارک کی پُرسکون فضا میں معیاری حفظِ قرآن، مڈل اسکول (کلاس 6 تا 8)، اور میٹرک و ایف ایس سی / آئی سی ایس کی شاندار تعلیم۔",
        "Discover TSS": "ٹی ایس ایس کو جانیے",
        "Visit Campus": "کیمپس تشریف لائیں",
        "Explore Programs": "تعلیمی شعبہ جات دیکھیں",

        // Statistics
        "Enrolled Students": "زیرِ تعلیم طلباء",
        "Active learners across all wings": "تمام تعلیمی شعبہ جات میں سرگرم طلباء",
        "Qualified Teachers": "تجربہ کار اساتذہ",
        "Dedicated subject specialists": "انتہائی باصلاحیت اور ماہر اساتذہ",
        "Board Pass Rate": "بورڈ کامیابی کی شرح",
        "BISE Lahore board track record": "لاہور بورڈ میں شاندار اور مثالی نتائج",
        "Quran Tahfeez Track": "تکمیلِ حفظِ قرآن",
        "Tajweed mastery & character grooming": "مستند تجوید اور اخلاقی و دینی تربیت",
        "Huffaz Graduated": "فارغ التحصیل حفاظِ کرام",
        "Completed Quran with Tajweed": "تجوید کے ساتھ مکمل حفظِ قرآن",

        // Quick Admission Ribbon & Cards
        "Admission Alert": "داخلہ اطلاع",
        "Session 2026–27 Open:": "تعلیمی سیشن 2026–27 کے داخلے جاری ہیں:",
        "Admissions Office: 0328 4877877": "ایڈمشن آفس: 0328 4877877",
        "Open for New Session": "نئے سیشن میں داخلے جاری",
        "Tahfeez & Tajweed Rules": "حفظِ قرآن مع قواعدِ تجوید",
        "F.Sc & ICS Science": "ایف ایس سی اور آئی سی ایس",
        "Pre-Medical & Pre-Eng": "پری میڈیکل و پری انجینئرنگ",
        "Chuburji Park Campus": "چوبرجی پارک کیمپس",
        "Old Rifle Range Road": "اولڈ رائفل رینج روڈ",

        // About & Overview
        "Welcome to TSS": "ٹی ایس ایس میں خوش آمدید",
        "Inspiring Minds, Building Character": "ذہنوں کی آبیاری، کردار کی تعمیر",
        "Located at Chuburji Park, Old Rifle Range Road, Lahore, TSS is a premier educational institution dedicated to providing balanced academic excellence, scientific knowledge, and Islamic character building.": "چوبرجی پارک، اولڈ رائفل رینج روڈ، لاہور میں واقع، ٹی ایس ایس ایک ممتاز تعلیمی ادارہ ہے جو متوازن تعلیمی معیار، سائنسی علوم اور اسلامی کردار سازی کے لیے وقف ہے۔",
        "Our educational structure covers Hifz-e-Quran memorization, Middle School (Class 6th to 8th), and Board Matriculation & F.Sc / ICS (Pre-Medical, Pre-Engineering, and Computer Science) affiliated with the Board of Intermediate & Secondary Education (BISE) Lahore.": "ہمارا تعلیمی نظام حفظِ قرآن، مڈل اسکول (کلاس 6 تا 8)، اور لاہور بورڈ (BISE) سے الحاق شدہ میٹرک و ایف ایس سی / آئی سی ایس پر مشتمل ہے۔",
        "Academic Excellence": "اعلیٰ تعلیمی معیار",
        "Rigorous BISE Lahore syllabus coverage with regular monthly testing sessions.": "لاہور بورڈ کے نصاب کی مکمل تکمیل اور باقاعدہ ماہانہ ٹیسٹ سیشنز۔",
        "Moral Discipline": "اخلاقی و دینی تربیت",
        "Instilling Islamic values, discipline, respect, and community responsibility.": "اسلامی اقدار، نظم و ضبط، احترام اور معاشرتی ذمہ داری کا فروغ۔",
        "Our mission is to nurture confident, knowledgeable students who excel in modern academics, board examinations, and moral integrity.": "ہمارا مشن ایسے پراعتماد طلباء تیار کرنا ہے جو جدید تعلیم، بورڈ امتحانات اور اخلاقی اقدار میں نمایاں کامیابی حاصل کریں۔",
        "School Administration & Management": "اسکول انتظامیہ و نظم و نسق",
        "TSS, Lahore": "ٹی ایس ایس اسکول لاہور",
        "Why Parents Choose Us": "والدین کا ہم پر اعتماد کیوں ہے؟",
        "Dedicated Tahfeez-ul-Quran Wing": "خصوصی شعبہ تحفیظ القرآن",
        "Qualified Huffaz leading daily Quran memorization and Tajweed revision alongside schooling.": "مستند حفاظ کرام کی زیرِ نگرانی روزانہ حفظِ قرآن اور تجوید کی دہرائی مع عصری اسکولنگ۔",
        "Modern Science & Computer Labs": "جدید سائنس اور کمپیوٹر لیبز",
        "Physics, Chemistry, Biology practical labs and modern IT lab for ICS computer students.": "فزکس، کیمسٹری، بائیولوجی کی پریکٹیکل لیبز اور آئی سی ایس طلباء کے لیے جدید کمپیوٹر لیب۔",
        "BISE Board Focused Preparation": "لاہور بورڈ امتحانات کی خصوصی تیاری",
        "Comprehensive test sessions, past papers solving, and exam technique workshops.": "جامع راؤنڈ وائز ٹیسٹ سیشنز، سابقہ پیپرز کی تیاری اور امتحانی تکنیک کی خصوصی ورکشاپس۔",
        "Central & Safe Campus Location": "مرکزی اور محفوظ کیمپس",
        "Convenient campus location at Chuburji Park, Old Rifle Range Road, Lahore with CCTV monitoring.": "چوبرجی پارک، اولڈ رائفل رینج روڈ، لاہور میں سی سی ٹی وی کیمروں سے لیس محفوظ کیمپس۔",
        "Read More About TSS →": "ٹی ایس ایس کے بارے میں مزید جانیں ←",

        // Why TSS 6 Pillars
        "The TSS Advantage": "ٹی ایس ایس کے خصوصی امتیازات",
        "Why Choose TSS?": "ٹی ایس ایس کا انتخاب کیوں؟",
        "A proven legacy of academic excellence, Quranic memorization, and holistic student development at Chuburji Park, Lahore.": "چوبرجی پارک، لاہور میں تعلیمی برتری، حفظِ قرآن اور طلباء کی ہمہ جہت تربیت کا درخشاں ریکارڈ۔",
        "BISE Board Excellence": "لاہور بورڈ میں شاندار نتائج",
        "Consistent high pass percentages and top board positions through comprehensive syllabus completion, monthly mock tests, and paper-presentation mentoring.": "مکمل نصاب، ماہانہ موک ٹیسٹ اور پیپر پریزنٹیشن کی خصوصی ٹریننگ کے ذریعے مسلسل شاندار نتائج اور اعلیٰ پوزیشنز۔",
        "Tahfeez-ul-Quran & Tarbiyah": "تحفیظ القرآن و اسلامی تربیت",
        "Integrated Hifz curriculum under certified Huffaz-e-Quran, blending profound Quranic Tajweed with regular mainstream academic schooling.": "مستند حفاظ کرام کی زیرِ نگرانی حفظِ قرآن، مستند تجوید اور باقاعدہ اسکول کی تعلیم کا حسین امتزاج۔",
        "Modern Science & IT Labs": "جدید سائنس اور آئی ٹی لیبز",
        "Well-equipped Physics, Chemistry, and Biology laboratories alongside a modern Computer Lab for practical learning.": "عملی تعلیم کے لیے فزکس، کیمسٹری اور بائیولوجی کی مکمل لیس لیبز اور جدید کمپیوٹر لیب۔",
        "Experienced Faculty": "تجربہ کار اور باصلاحیت اساتذہ",
        "Dedicated subject-specialist teachers committed to conceptual clarity, student mentorship, and individual attention in small class batches.": "ہر مضمون کے ماہر اساتذہ جو تصوراتی وضاحت، طلباء کی راہنمائی اور انفرادی توجہ کے لیے پرعزم ہیں۔",
        "Disciplined & Secure Campus": "باوقار، منظم اور محفوظ ماحول",
        "A safe, positive, and morally grounded academic environment with round-the-clock CCTV surveillance and attentive campus management.": "24 گھنٹے سی سی ٹی وی کیمروں اور مستعد انتظامیہ کے ساتھ محفوظ اور پُرامن تعلیمی ماحول۔",
        "Co-Curricular & Sports": "ہم نصابی سرگرمیاں اور کھیل",
        "Speech competitions, Qira'at contests, science exhibitions, and athletic activities promoting physical health and leadership skills.": "تقریری مقابلے، حسنِ قرأت، سائنسی نمائشیں اور کھیلوں کی سرگرمیاں جو جسمانی صحت اور لیڈرشپ کو پروان چڑھاتی ہیں۔",
        "Explore All TSS Distinctions →": "ٹی ایس ایس کے تمام امتیازات دیکھیں ←",

        // Academic Offerings
        "ACADEMIC OFFERINGS": "تعلیمی شعبہ جات",
        "Four Focused Wings Built for Mastery": "طلباء کی جامع ترقی کے لیے 4 باقاعدہ تعلیمی شعبہ جات",
        "Educational Pathways": "تعلیمی شعبہ جات",
        "Our Academic Programs": "ہمارے تعلیمی پروگرامز",
        "Comprehensive educational pathways designed for Quranic memorization, middle school fundamentals, and intermediate college excellence.": "حفظِ قرآن، مڈل اسکول کی بنیادی تعلیم اور انٹرمیڈیٹ کالج کی اعلیٰ تیاری کے لیے جامع تعلیمی شعبہ جات۔",
        "Middle School Wing": "شعبہ مڈل اسکول",
        "Middle School (Class 6th to 8th)": "مڈل اسکول (کلاس ششم تا ہشتم)",
        "Matriculation Wing": "شعبہ میٹرک",
        "Matriculation (Class 9th & 10th)": "میٹرک (کلاس نہم و دہم)",
        "Intermediate College Wing": "انٹرمیڈیٹ کالج شعبہ",
        "F.Sc & ICS (Intermediate)": "ایف ایس سی اور آئی سی ایس (انٹرمیڈیٹ)",
        "F.Sc & ICS (Class 11th & 12th)": "ایف ایس سی اور آئی سی ایس (گیارہویں و بارہویں)",
        "Hifz-e-Quran Wing": "شعبہ حفظِ قرآن",
        "Hifz-e-Quran Program": "شعبہ حفظِ قرآن مجید",
        "Tahfeez & Tarbiyah": "تحفیظ القرآن و اسلامی تربیت",
        "Explore Middle Wing": "مڈل شعبہ کی تفصیلات",
        "Explore Matric Wing": "میٹرک شعبہ کی تفصیلات",
        "Explore College Wing": "کالج شعبہ کی تفصیلات",
        "Explore Hifz Wing": "حفظِ قرآن شعبہ کی تفصیلات",
        "View All Academic Programs →": "تمام تعلیمی پروگرامز دیکھیں ←",

        // Facilities & Gallery (All Cards, Badges & Overlays)
        "Campus Infrastructure": "کیمپس سہولیات",
        "World-Class Facilities": "جدید ترین انفراسٹرکچر",
        "Providing students with practical science labs, modern IT infrastructure, and a secure learning environment.": "طلباء کو عملی سائنس لیبز، جدید آئی ٹی انفراسٹرکچر اور پُرامن تعلیمی ماحول کی فراہمی۔",
        "Academics": "تعلیمی شعبہ",
        "Technology": "ٹیکنالوجی",
        "Tahfeez": "تحفیظ القرآن",
        "Resources": "وسائل و کتب",
        "Campus": "کیمپس",
        "Campus Life": "کیمپس سرگرمیاں",
        "Science Laboratories": "سائنسی تجربہ گاہیں (سائنس لیبز)",
        "Hands-on experimental learning in Physics, Chemistry & Biology": "فزکس، کیمسٹری اور بائیولوجی کے عملی تجربات کی جدید ترین سہولت",
        "Hands-on experimental learning in Physics, Chemistry &amp; Biology": "فزکس، کیمسٹری اور بائیولوجی کے عملی تجربات کی جدید ترین سہولت",
        "Equipped Physics, Chemistry, and Biology practical labs for hands-on experiment sessions required for Board exams.": "بورڈ امتحانات کے پریکٹیکل کی تیاری کے لیے فزکس، کیمسٹری اور بائیولوجی کی مکمل لیبز۔",
        "Modern Computer Lab": "جدید کمپیوٹر لیب",
        "Computer Lab": "جدید کمپیوٹر لیب",
        "High-speed digital workstation for ICS and IT coursework": "آئی سی ایس اور آئی ٹی کورسز کے لیے جدید ڈیجیٹل ورک اسٹیشنز",
        "Modern computer systems with high-speed internet for ICS computer science students and IT coursework.": "آئی سی ایس طلباء اور آئی ٹی کورسز کے لیے جدید کمپیوٹر سسٹمز مع تیز رفتار انٹرنیٹ۔",
        "Tahfeez-ul-Quran Hall": "خصوصی تحفیظ القرآن ہال",
        "Peaceful spiritual atmosphere for Quran memorization and Tajweed": "حفظِ قرآن اور تجوید کے لیے پرسکون اور روحانی ماحول",
        "Academic Library": "اکیڈمک لائبریری",
        "School Library": "اسکول لائبریری",
        "Comprehensive collection of reference books and quiet study corners": "درسی و حوالہ جاتی کتب کا وسیع ذخیرہ اور پرسکون مطالعہ گاہ",
        "Quiet study reading room with academic textbooks, reference guides, Islamic literature, and exam past papers.": "درسی کتب، حوالہ جاتی کتب، اسلامی لٹریچر اور ماضی کے امتحانی پرچوں سے آراستہ پُرسکون اسٹڈی روم۔",
        "Interactive Classrooms": "انٹرایکٹو اور جدید کلاس رومز",
        "Spacious, well-ventilated rooms with focused student-teacher engagement": "روشن، ہوا دار اور پرسکون کمرہ جماعت جہاں اساتذہ کی بھرپور توجہ میسر ہے",
        "Orientation & Seminar Hall": "اورینٹیشن اور سمینار ہال",
        "Orientation &amp; Seminar Hall": "اورینٹیشن اور سمینار ہال",
        "Modern acoustic auditorium for academic lectures, seminars and student orientation": "اکیڈمک لیکچرز اور سمینارز کے لیے جدید آڈیٹوریم ہال",
        "CCTV Monitored Campus": "سی سی ٹی وی مانیٹرڈ کیمپس",
        "Secure campus premises with CCTV surveillance, disciplined atmosphere, and attentive administrative staff.": "سی سی ٹی وی کیمروں، باوقار ماحول اور مستعد عملے کے ساتھ محفوظ کیمپس۔",
        "Campus Life & Highlights": "کیمپس کی زندگی اور اہم جھلکیاں",
        "Campus Life &amp; Highlights": "کیمپس کی زندگی اور اہم جھلکیاں",
        "A glimpse into our classrooms, laboratories, spiritual activities, and learning environment at TSS, Lahore.": "ٹی ایس ایس لاہور کے کلاس رومز، تجربہ گاہوں، روحانی سرگرمیوں اور تعلیمی ماحول کا ایک خوبصورت منظر۔",
        "TSS Campus Facilities & Environments": "ٹی ایس ایس کیمپس سہولیات و ماحول",
        "TSS Campus Facilities &amp; Environments": "ٹی ایس ایس کیمپس سہولیات و ماحول",
        "A photographic tour through our purpose-built learning spaces and facilities designed for academic excellence.": "اعلیٰ تعلیمی معیار کے لیے تیار کردہ ہمارے کیمپس اور جدید تعلیمی سہولیات کا تصویری دورہ۔",
        "View Complete Campus Gallery →": "کیمپس کی مکمل گیلری دیکھیں ←",
        "View Complete Campus Gallery &rarr;": "کیمپس کی مکمل گیلری دیکھیں ←",
        "Book Campus Visit": "کیمپس وزٹ بک کریں",
        "Schedule a Campus Tour at TSS Lahore": "ٹی ایس ایس لاہور کے کیمپس وزٹ کا شیڈول طے کریں",
        "Visit our campus in person at Chuburji Park, Old Rifle Range Road, Lahore. Our administration will be delighted to guide you through our facilities.": "چوبرجی پارک، اولڈ رائفل رینج روڈ، لاہور میں ہمارے کیمپس تشریف لائیں۔ ہماری انتظامیہ آپ کو تمام سہولیات دکھانے پر خوش ہوگی۔",
        "Apply for Admission 2026": "داخلہ 2026 کے لیے درخواست دیں",

        // Modal & Form
        "Student Full Name *": "طالب علم کا مکمل نام *",
        "Father / Guardian Name *": "والد یا سرپرست کا نام *",
        "Contact Mobile Number *": "موبائل یا واٹس ایپ نمبر *",
        "Target Program *": "مطلوبہ شعبہ یا کلاس *",
        "Select Program": "کلاس یا شعبہ منتخب کریں",
        "Previous School / Remarks": "سابقہ اسکول یا اضافی تفصیلات",
        "Cancel": "منسوخ کریں",
        "Submit Application": "درخواست جمع کروائیں",
        "Submit Admission Inquiry": "درخواست جمع کروائیں",
        "Inquire for Hifz-e-Quran": "شعبہ حفظِ قرآن داخلہ معلومات",
        "Inquire for Middle School (Class 6–8)": "مڈل اسکول (کلاس 6–8) داخلہ معلومات",
        "Inquire for Matriculation (Class 9–10)": "میٹرک (کلاس 9–10) داخلہ معلومات",
        "Inquire for F.Sc & ICS (11th–12th)": "ایف ایس سی اور آئی سی ایس داخلہ معلومات",
        "Current Quran / Nazra Status & Remarks": "قرآن پاک / ناظرہ کی موجودہ حالت اور تفصیلات",
        "Submit Hifz Inquiry": "حفظِ قرآن کی درخواست جمع کروائیں",

        // Admissions Guidelines Steps & Info
        "Simple 3-Step Process": "آسان 3 مراحل پر مشتمل داخلہ پروسیس",
        "Admission Guidelines 2026–27": "داخلہ کے رہنما اصول برائے 2026–27",
        "Follow these simple steps to secure admission at TSS, Lahore.": "ٹی ایس ایس لاہور میں داخلہ کے لیے ان آسان مراحل پر عمل کریں۔",
        "Form Submission": "فارم جمع کروانا",
        "Fill the online form or collect prospectus from Chuburji Park campus.": "آن لائن فارم پُر کریں یا چوبرجی پارک کیمپس سے پراسپیکٹس حاصل کریں۔",
        "Assessment Test": "اسیسمنٹ ٹیسٹ",
        "Informal academic evaluation or Hifz test at campus office.": "کیمپس آفس میں بنیادی تعلیمی جائزہ یا حفظ کا ٹیسٹ۔",
        "Enrollment": "داخلہ فائنل اور تصدیق",
        "Verification of documents, fee deposit, and student roll number allotment.": "کاغذات کی جانچ پڑتال، فیس جمع اور طالب علم کو رول نمبر الاٹ کیا جانا۔",
        "Have Admission Questions?": "داخلہ کے متعلق کوئی سوال ہے؟",
        "Contact our helpline or send a WhatsApp message to get instant guidance.": "ہماری ہیلپ لائن پر رابطہ کریں یا فوری رہنمائی کے لیے واٹس ایپ میسج کریں۔",
        "WhatsApp Inquiry": "واٹس ایپ پر رابطہ کریں",
        "Call: 0328 4877877": "کال کریں: 0328 4877877",

        // Footer & Additional Global Links
        "Pages": "اہم صفحات",
        "Programs": "تعلیمی پروگرامز",
        "Campus Address": "کیمپس کا پتہ",
        "Office Hours:": "دفتری اوقات:",
        "Mon – Sat: 8:00 AM – 2:30 PM": "پیر تا ہفتہ: صبح 8:00 بجے تا دوپہر 2:30 بجے",
        "Providing high quality education, Hifz-e-Quran, and character building in Chuburji Park, Lahore.": "چوبرجی پارک لاہور میں معیاری تعلیم، حفظِ قرآن اور کردار سازی کا معتبر ادارہ۔",
        "All Rights Reserved.": "جملہ حقوق محفوظ ہیں۔",
        "© 2026 TSS. All Rights Reserved.": "© 2026 ٹی ایس ایس اسکول۔ جملہ حقوق محفوظ ہیں۔",
        "2026 TSS. All Rights Reserved.": "2026 ٹی ایس ایس اسکول۔ جملہ حقوق محفوظ ہیں۔",
        "View Full Admission Process & Form →": "مکمل داخلہ طریقہ کار اور فارم دیکھیں ←",
        "View Full Admission Process &amp; Form &rarr;": "مکمل داخلہ طریقہ کار اور فارم دیکھیں ←",
        "Matric Science & Computer": "میٹرک سائنس و کمپیوٹر",
        "Matric Science &amp; Computer": "میٹرک سائنس و کمپیوٹر"
    };

    // Build Case-Insensitive & Normalized Lookup Map
    const DICTIONARY_LOWER = {};
    for (const key in DICTIONARY) {
        const val = DICTIONARY[key];
        DICTIONARY_LOWER[key.toLowerCase().trim()] = val;
        const amp = key.replace(/&amp;/g, '&');
        DICTIONARY_LOWER[amp.toLowerCase().trim()] = val;
        const clean = key.replace(/\s+/g, ' ');
        DICTIONARY_LOWER[clean.toLowerCase().trim()] = val;
        const cleanAmp = clean.replace(/&amp;/g, '&');
        DICTIONARY_LOWER[cleanAmp.toLowerCase().trim()] = val;
    }

    // Input Placeholders
    const PLACEHOLDERS = {
        "Student Name": "طالب علم کا نام",
        "Father Name": "والد کا نام",
        "0328 4877877": "0328 4877877",
        "e.g. Muhammad Ali": "مثلاً محمد علی",
        "Details regarding previous grade or marks...": "سابقہ کلاس، حاصل کردہ نمبرات یا کوئی سوال درج کریں...",
        "Write your questions about admission, fees, or program...": "داخلہ، فیس یا کیمپس کے بارے میں کوئی سوال یہاں لکھیں...",
        "e.g. Nazra completed, number of Paras memorized, child age, or any question...": "مثلاً ناظرہ مکمل ہے، یاد کردہ پاروں کی تعداد، بچے کی عمر وغیرہ...",
        "Details regarding previous school, grade, or marks...": "سابقہ اسکول، گریڈ یا حاصل کردہ نمبرات کی تفصیلات..."
    };

    let currentLang = 'en';

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        if (location.hostname) {
            document.cookie = name + "=" + (value || "") + expires + "; domain=" + location.hostname + "; path=/";
        }
    }

    function initGoogleTranslate() {
        if (!document.getElementById('google_translate_element')) {
            const gDiv = document.createElement('div');
            gDiv.id = 'google_translate_element';
            gDiv.style.display = 'none';
            document.body.appendChild(gDiv);
        }

        window.googleTranslateElementInit = function () {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'ur,en',
                    autoDisplay: false
                }, 'google_translate_element');
            }
        };

        if (!document.getElementById('google-translate-api-script')) {
            const s = document.createElement('script');
            s.id = 'google-translate-api-script';
            s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            s.async = true;
            document.head.appendChild(s);
        }
    }

    function triggerGoogleTranslateCombo(lang) {
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = (lang === 'ur') ? 'ur' : 'en';
            combo.dispatchEvent(new Event('change'));
        }
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('tss_lang', lang);

        const html = document.documentElement;
        const body = document.body;

        if (lang === 'ur') {
            html.setAttribute('lang', 'ur');
            html.setAttribute('dir', 'rtl');
            body.classList.add('lang-ur');
            setCookie('googtrans', '/en/ur', 30);
            updateButtonLabels('ur');
            translateDictionaryText('ur');
            triggerGoogleTranslateCombo('ur');
        } else {
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            body.classList.remove('lang-ur');
            setCookie('googtrans', '/en/en', 30);
            updateButtonLabels('en');
            translateDictionaryText('en');
            triggerGoogleTranslateCombo('en');
        }
    }

    function updateButtonLabels(lang) {
        const headerLabels = document.querySelectorAll('#lang-toggle-btn .lang-label, .lang-toggle-btn .lang-label');
        headerLabels.forEach(el => {
            el.textContent = (lang === 'ur') ? 'English' : 'اردو';
        });

        const drawerLabels = document.querySelectorAll('#drawer-lang-btn .lang-label, .drawer-lang-btn .lang-label');
        drawerLabels.forEach(el => {
            el.textContent = (lang === 'ur') ? 'English Version' : 'اردو ورژن';
        });
    }

    function translateDictionaryText(lang) {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    const p = node.parentElement;
                    if (!p) return NodeFilter.FILTER_REJECT;
                    const tag = p.tagName.toLowerCase();
                    if (tag === 'script' || tag === 'style' || tag === 'noscript') return NodeFilter.FILTER_REJECT;
                    if (p.closest('.lang-toggle-btn') || p.closest('.drawer-lang-btn')) return NodeFilter.FILTER_REJECT;
                    if (node.nodeValue.trim().length > 0) return NodeFilter.FILTER_ACCEPT;
                    return NodeFilter.FILTER_SKIP;
                }
            }
        );

        const nodes = [];
        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach(node => {
            const raw = node.nodeValue.trim();
            if (lang === 'ur') {
                const rawClean = raw.replace(/\s+/g, ' ');
                const rawAmp = raw.replace(/&amp;/g, '&');
                const rawCleanAmp = rawClean.replace(/&amp;/g, '&');
                const matchedUrdu = DICTIONARY[raw]
                    || DICTIONARY[rawClean]
                    || DICTIONARY[rawAmp]
                    || DICTIONARY[rawCleanAmp]
                    || DICTIONARY_LOWER[raw.toLowerCase()]
                    || DICTIONARY_LOWER[rawClean.toLowerCase()]
                    || DICTIONARY_LOWER[rawAmp.toLowerCase()]
                    || DICTIONARY_LOWER[rawCleanAmp.toLowerCase()];

                if (matchedUrdu) {
                    if (typeof node._origEnText === 'undefined') {
                        node._origEnText = node.nodeValue;
                    }
                    const lead = node.nodeValue.match(/^\s*/)[0];
                    const trail = node.nodeValue.match(/\s*$/)[0];
                    node.nodeValue = lead + matchedUrdu + trail;
                }
            } else {
                if (typeof node._origEnText !== 'undefined') {
                    node.nodeValue = node._origEnText;
                }
            }
        });

        // Translate Placeholders
        const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
        inputs.forEach(input => {
            const ph = input.getAttribute('placeholder');
            if (lang === 'ur') {
                if (PLACEHOLDERS[ph]) {
                    if (!input._origPlaceholder) input._origPlaceholder = ph;
                    input.setAttribute('placeholder', PLACEHOLDERS[ph]);
                }
            } else {
                if (input._origPlaceholder) {
                    input.setAttribute('placeholder', input._origPlaceholder);
                }
            }
        });
    }

    function setupEventListeners() {
        const btns = document.querySelectorAll('#lang-toggle-btn, .lang-toggle-btn, #drawer-lang-btn, .drawer-lang-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const nextLang = (currentLang === 'en') ? 'ur' : 'en';
                applyLanguage(nextLang);
            });
        });
    }

    function init() {
        initGoogleTranslate();

        const saved = localStorage.getItem('tss_lang');
        if (saved === 'ur' || document.cookie.includes('googtrans=/en/ur')) {
            applyLanguage('ur');
        } else {
            applyLanguage('en');
        }

        setupEventListeners();

        // Also check if google translate combo appears later and sync it
        let attempts = 0;
        const checkInterval = setInterval(function () {
            attempts++;
            const combo = document.querySelector('.goog-te-combo');
            if (combo) {
                clearInterval(checkInterval);
                if (currentLang === 'ur' && combo.value !== 'ur') {
                    combo.value = 'ur';
                    combo.dispatchEvent(new Event('change'));
                }
            }
            if (attempts > 20) clearInterval(checkInterval);
        }, 300);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
