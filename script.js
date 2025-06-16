document.addEventListener('DOMContentLoaded', function() {

    // --- LOGIKA PENGALIH BAHASA ---
    
    const translations = {
        id: {
            subtitle: "Mahasiswa Teknik Informatika | Full Stack Developer | Content Creator",
            nav_about: "Tentang Saya",
            nav_projects: "Project",
            nav_skills: "Keahlian",
            nav_education: "Pendidikan",
            nav_contact: "Kontak",
            about_title: "Tentang Saya",
            about_greeting: "Halo, Saya Javier!",
            about_p1: "Saya adalah seorang mahasiswa Teknik Informatika yang antusias dengan pengembangan web dan aplikasi. Saya memiliki pengalaman dalam membangun berbagai sistem berbasis web dengan fitur lengkap mulai dari frontend hingga backend.",
            about_p2: "Saya menikmati proses memecahkan masalah melalui kode dan selalu bersemangat untuk mempelajari teknologi baru. Selain coding, saya juga aktif membuat konten kreatif di platform digital.",
            about_location_label: "Domisili:",
            about_location_value: "Karawang, Jawa Barat, Indonesia",
            about_language_label: "Bahasa:",
            about_language_value: "Indonesia (aktif), Inggris (aktif), Spanyol (dasar-menengah)",
            about_hobbies_label: "Hobi:",
            about_hobbies_value: "Membuat konten game, badminton, jogging, bermain gitar, bernyanyi",
            projects_title: "Project & Pengalaman",
            admin_features: "Fitur Admin:",
            user_features: "Fitur User:",
            cashier_features: "Fitur Kasir:",
            chef_features: "Fitur Koki:",
            upcoming_features: "Fitur yang akan tersedia:",
            main_features: "Fitur Utama:",
            proj1_title: "Website Event Organizer Dinamis",
            proj1_desc: "Sistem lengkap untuk manajemen event dengan fitur admin dan user yang komprehensif.",
            proj1_admin_f1: "Login/Registrasi dengan sistem anti-bot",
            proj1_admin_f2: "CRUD event dan form pendaftaran",
            proj1_admin_f3: "Presensi via QR Code",
            proj1_admin_f4: "Manajemen data user dan kontrol akses",
            proj1_user_f1: "Pembayaran via Midtrans",
            proj1_user_f2: "Pengisian dan edit form",
            proj1_user_f3: "Generate QR Code untuk presensi",
            proj2_title: "Website Pemesanan Tiket Bus",
            proj2_desc: "Sistem pemesanan tiket bus online dengan pembayaran terintegrasi.",
            proj2_admin_f1: "CRUD dinamis untuk data bus dan rute",
            proj2_admin_f2: "Kelola user dan jadwal perjalanan",
            proj2_user_f1: "Pemilihan jam/tanggal keberangkatan",
            proj2_user_f2: "Pembayaran via Midtrans",
            proj2_user_f3: "Generate QR Code untuk boarding",
            proj3_title: "Web & App (Ionic) Restoran Cepat Saji",
            proj3_desc: "Sistem terintegrasi untuk restoran cepat saji dengan multi-role access.",
            proj3_admin_f1: "CRUD menu dan diskon",
            proj3_admin_f2: "Rating koki dan manajemen meja",
            proj3_cashier_f1: "Pembayaran (cash/cashless)",
            proj3_cashier_f2: "Kelola meja dan reservasi",
            proj3_chef_f1: "Lihat dan proses pesanan",
            proj3_chef_f2: "Kelola pesanan dine-in & online",
            proj4_title: "Web & App (Ionic) Sistem Catering",
            proj4_desc: "Sistem manajemen catering dengan fitur lengkap (dalam pengembangan).",
            proj4_f1: "SOP operasional catering",
            proj4_f2: "Manajemen menu dan pesanan",
            proj4_f3: "Pengiriman dan pelacakan",
            proj4_f4: "Pembayaran terintegrasi",
            proj5_title: "Sistem Kontrol Waktu Depan Laptop (Python)",
            proj5_desc: "Aplikasi untuk memantau dan mengontrol waktu penggunaan laptop.",
            proj5_f1: "Peringatan setelah 30 menit penggunaan",
            proj5_f2: "Pause otomatis saat tidak aktif",
            proj5_f3: "Monitor aktivitas mouse/keyboard",
            proj6_title: "Website Tracking Pengeluaran Harian",
            proj6_desc: "Aplikasi web sederhana untuk mencatat dan memantau keuangan pribadi.",
            proj6_f1: "Input pengeluaran harian",
            proj6_f2: "Kategorisasi pengeluaran",
            proj6_f3: "Visualisasi data dengan grafik",
            proj6_f4: "Laporan bulanan",
            skills_title: "Keahlian Teknis",
            skills_cat1_title: "Bahasa Pemrograman",
            skills_cat2_title: "Framework & Teknologi",
            skills_cat3_title: "Kemampuan Lain",
            skill_public_speaking: "Public Speaking",
            skill_leadership: "Kepemimpinan",
            skill_content_creation: "Content Creation",
            education_title: "Pendidikan & Organisasi",
            education_subtitle: "Pendidikan",
            edu1_degree: "S1 Teknik Informatika",
            edu1_university: "Universitas Buana Perjuangan Karawang (Saat Ini)",
            edu2_school: "SMAN 3 Karawang Barat (Lulus)",
            org_subtitle: "Pengalaman Organisasi",
            org1_role: "Ketua Tim Final Project",
            org1_desc: "Memimpin tim pengembangan proyek akhir (2x)",
            org2_role: "Public Speaker",
            org2_desc: "Sering memimpin presentasi teknis dan diskusi",
            contact_title: "Hubungi Saya",
            contact_info_title: "Informasi Kontak",
            contact_email_label: "Email",
            contact_phone_label: "Telepon",
            contact_address_label: "Alamat",
            contact_address_value: "Karawang, Jawa Barat, Indonesia",
            contact_form_title: "Kirim Pesan",
            form_name: "Nama Lengkap",
            form_email: "Email",
            form_subject: "Subjek",
            form_message: "Pesan",
            form_submit_btn: "Kirim Pesan",
            footer_credit: "CV Interaktif ini dibuat dengan HTML, CSS, dan JavaScript.",
            form_alert_success: (name) => `Terima kasih, ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda melalui email.`
        },
        en: {
            subtitle: "Informatics Engineering Student | Full Stack Developer | Content Creator",
            nav_about: "About Me",
            nav_projects: "Projects",
            nav_skills: "Skills",
            nav_education: "Education",
            nav_contact: "Contact",
            about_title: "About Me",
            about_greeting: "Hello, I'm Javier!",
            about_p1: "I am an enthusiastic Informatics Engineering student with a passion for web and application development. I have experience in building various web-based systems with complete features from frontend to backend.",
            about_p2: "I enjoy the process of solving problems through code and am always eager to learn new technologies. Besides coding, I am also active in creating creative content on digital platforms.",
            about_location_label: "Domicile:",
            about_location_value: "Karawang, West Java, Indonesia",
            about_language_label: "Languages:",
            about_language_value: "Indonesian (native), English (fluent), Spanish (basic-intermediate)",
            about_hobbies_label: "Hobbies:",
            about_hobbies_value: "Creating game content, badminton, jogging, playing guitar, singing",
            projects_title: "Projects & Experience",
            admin_features: "Admin Features:",
            user_features: "User Features:",
            cashier_features: "Cashier Features:",
            chef_features: "Chef Features:",
            upcoming_features: "Upcoming Features:",
            main_features: "Main Features:",
            proj1_title: "Dynamic Event Organizer Website",
            proj1_desc: "A complete system for event management with comprehensive admin and user features.",
            proj1_admin_f1: "Login/Registration with an anti-bot system",
            proj1_admin_f2: "CRUD for events and registration forms",
            proj1_admin_f3: "Attendance via QR Code",
            proj1_admin_f4: "User data management and access control",
            proj1_user_f1: "Payment via Midtrans",
            proj1_user_f2: "Filling and editing forms",
            proj1_user_f3: "Generate QR Code for attendance",
            proj2_title: "Bus Ticket Booking Website",
            proj2_desc: "An online bus ticket booking system with integrated payment.",
            proj2_admin_f1: "Dynamic CRUD for bus and route data",
            proj2_admin_f2: "Manage users and travel schedules",
            proj2_user_f1: "Selection of departure time/date",
            proj2_user_f2: "Payment via Midtrans",
            proj2_user_f3: "Generate QR Code for boarding",
            proj3_title: "Web & App (Ionic) for Fast Food Restaurant",
            proj3_desc: "An integrated system for a fast-food restaurant with multi-role access.",
            proj3_admin_f1: "CRUD for menus and discounts",
            proj3_admin_f2: "Chef ratings and table management",
            proj3_cashier_f1: "Payment (cash/cashless)",
            proj3_cashier_f2: "Manage tables and reservations",
            proj3_chef_f1: "View and process orders",
            proj3_chef_f2: "Manage dine-in & online orders",
            proj4_title: "Web & App (Ionic) for Catering System",
            proj4_desc: "A catering management system with complete features (under development).",
            proj4_f1: "Catering operational SOP",
            proj4_f2: "Menu and order management",
            proj4_f3: "Delivery and tracking",
            proj4_f4: "Integrated payment",
            proj5_title: "Laptop Screen Time Control System (Python)",
            proj5_desc: "An application to monitor and control laptop usage time.",
            proj5_f1: "Warning after 30 minutes of use",
            proj5_f2: "Auto-pause when inactive",
            proj5_f3: "Monitor mouse/keyboard activity",
            proj6_title: "Daily Expense Tracker Website",
            proj6_desc: "A simple web application for recording and monitoring personal finances.",
            proj6_f1: "Daily expense input",
            proj6_f2: "Expense categorization",
            proj6_f3: "Data visualization with charts",
            proj6_f4: "Monthly reports",
            skills_title: "Technical Skills",
            skills_cat1_title: "Programming Languages",
            skills_cat2_title: "Frameworks & Technologies",
            skills_cat3_title: "Other Abilities",
            skill_public_speaking: "Public Speaking",
            skill_leadership: "Leadership",
            skill_content_creation: "Content Creation",
            education_title: "Education & Organization",
            education_subtitle: "Education",
            edu1_degree: "Bachelor of Informatics Engineering",
            edu1_university: "Buana Perjuangan University, Karawang (Current)",
            edu2_school: "SMAN 3 Karawang Barat (Graduated)",
            org_subtitle: "Organizational Experience",
            org1_role: "Final Project Team Leader",
            org1_desc: "Led the development team for final projects (2x)",
            org2_role: "Public Speaker",
            org2_desc: "Frequently led technical presentations and discussions",
            contact_title: "Contact Me",
            contact_info_title: "Contact Information",
            contact_email_label: "Email",
            contact_phone_label: "Phone",
            contact_address_label: "Address",
            contact_address_value: "Karawang, West Java, Indonesia",
            contact_form_title: "Send a Message",
            form_name: "Full Name",
            form_email: "Email",
            form_subject: "Subject",
            form_message: "Message",
            form_submit_btn: "Send Message",
            footer_credit: "This Interactive CV was made with HTML, CSS, and JavaScript.",
            form_alert_success: (name) => `Thank you, ${name}! Your message has been sent. I will contact you via email shortly.`
        }
    };

    let currentLang = 'id';
    const langToggleButton = document.getElementById('lang-toggle-fixed');
    const langCodeSpan = document.getElementById('lang-code');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const translation = translations[lang];
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translation[key] && typeof translation[key] !== 'function') {
                element.innerHTML = translation[key];
            }
        });
        langCodeSpan.textContent = lang.toUpperCase();
    }

    langToggleButton.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        setLanguage(currentLang);
    });

    setLanguage(currentLang);

    // --- SKRIP ASLI ---

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const contactForm = document.getElementById('messageForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(translations[currentLang].form_alert_success(name));
        contactForm.reset();
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });

    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const originalWidth = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = originalWidth;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}); 