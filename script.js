// script.js

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة تأثيرات التمرير
    initScrollEffects();
    
    // تهيئة تأثيرات البطاقات
    initCardAnimations();
    
    // تهيئة تأثيرات التنقل
    initNavigationEffects();
    
    // تهيئة تأثيرات الأزرار
    initButtonEffects();
    
    // تهيئة تأثيرات الصور
    initImageEffects();
    
    // تهيئة تأثيرات النصوص
    initTextAnimations();
});

// تأثيرات التمرير
function initScrollEffects() {
    const header = document.querySelector('header');
    
    // تأثير تغيير الهيدر عند التمرير
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // تفعيل تأثيرات العناصر عند ظهورها
        activateOnScroll();
    });
    
    // تأثير التمرير السلس للروابط
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
}
// WhatsApp functionality
document.querySelector('.whatsapp-link').addEventListener('click', function(e) {
    const defaultMessage = "Hello! I'm interested in your services. Can we talk?";
    const whatsappUrl = `https://wa.me/967772442264?text=${encodeURIComponent(defaultMessage)}`;
    this.href = whatsappUrl;
});

// WhatsApp functionality for all links
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const defaultMessage = "Hello! I'm interested in your services. Can we talk?";
        const whatsappUrl = `https://wa.me/967772442264?text=${encodeURIComponent(defaultMessage)}`;
        this.href = whatsappUrl;
    });
});
// تأثيرات البطاقات
function initCardAnimations() {
    const cards = document.querySelectorAll('.card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(1, 1, 1, 0.15)';
        });
    });
}

// تأثيرات التنقل
function initNavigationEffects() {
    const navLinks = document.querySelectorAll('.navigation a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // إزالة النشاط من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            // إضافة النشاط للرابط المختار
            this.classList.add('active');
        });
    });
}

// تأثيرات الأزرار
function initButtonEffects() {
    const buttons = document.querySelectorAll('.main-btn, .more-detail');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });
}

// تأثيرات الصور
function initImageEffects() {
    const projectImages = document.querySelectorAll('.project-image img');
    
    projectImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.7s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// تأثيرات النصوص
function initTextAnimations() {
    // تأثير كتابة النص في القسم الرئيسي
    const mainHeading = document.querySelector('.main h2');
    const mainSubheading = document.querySelector('.main h3');
    
    if (mainHeading) {
        animateText(mainHeading, 50);
    }
    
    if (mainSubheading) {
        setTimeout(() => {
            animateText(mainSubheading, 30);
        }, 1000);
    }
    
    // تأثير عدادات للإحصائيات (يمكن إضافتها لاحقاً)
    // initCounters();
}

// تأثير الكتابة للنص
function animateText(element, speed) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// تفعيل العناصر عند التمرير
function activateOnScroll() {
    const cards = document.querySelectorAll('.card, .project-card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < windowHeight - 100 && cardBottom > 0) {
            card.classList.add('visible');
        }
    });
}

// تأثيرات الأيقونات الاجتماعية
function initSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
            this.style.color = '#4e9eff';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
            this.style.color = '#fff';
        });
    });
}

// تأثيرات النماذج (لإضافة نموذج اتصال لاحقاً)
function initFormEffects() {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

// تأثيرات تحميل الصور
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // إضافة تأثير تحميل للصور
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
        
        // معالجة أخطاء تحميل الصور
        img.addEventListener('error', function() {
            this.alt = 'Image not available';
            this.style.backgroundColor = '#f0f0f0';
            this.style.padding = '20px';
        });
    });
}

// تأثيرات الشريط التقدمي (لإضافته لاحقاً)
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3a6cf4, #4e9eff);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// تأثيرات النمط الليلي/النهاري (لإضافته لاحقاً)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #3a6cf4;
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            this.style.background = '#4e9eff';
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            this.style.background = '#3a6cf4';
        }
    });
}

// تأثيرات الصوت (لإضافته لاحقاً)
function initSoundEffects() {
    const buttons = document.querySelectorAll('a, button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // يمكن إضافة صوت للنقر هنا
            console.log('Button clicked - sound effect would play here');
        });
    });
}

// تهيئة جميع التأثيرات
function initAllEffects() {
    initScrollEffects();
    initCardAnimations();
    initNavigationEffects();
    initButtonEffects();
    initImageEffects();
    initTextAnimations();
    initSocialIcons();
    initFormEffects();
    initImageLoading();
    initProgressBar();
    initThemeToggle();
    initSoundEffects();
}

// تشغيل جميع التأثيرات عند تحميل الصفحة
window.addEventListener('load', initAllEffects);

// إضافة أنماط إضافية ديناميكياً
const additionalStyles = `
    .dark-theme {
        background: #1a1a1a;
        color: #ffffff;
    }
    
    .dark-theme .card {
        background: #2d2d2d;
        color: #ffffff;
    }
    
    .dark-theme .projects {
        background: #000016;
    }
    
    .navigation a.active {
        color: #601cfc;
        font-weight: 600;
    }
    
    .navigation a.active::after {
        width: calc(100% - 30px) !important;
    }
    
    .theme-toggle:hover {
        transform: scale(1.1) rotate(15deg);
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .pulse {
        animation: pulse 2s infinite;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// إضافة تأثيرات للشبكة الاجتماعية في الفوتر
document.querySelectorAll('.footer .social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });
    
    icon.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });
});

// تأثيرات تحميل الصفحة
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// معالجة أخطاء الصور
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgSW1hZ2U8L3RleHQ+PC9zdmc+';
        this.alt = 'Project Image Placeholder';
    });
});

// إضافة رسالة ترحيب في الكونسول
console.log(`
    █████╗ ██████╗ ██████╗ ██╗   ██╗██╗     ██████╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗
   ██╔══██╗██╔══██╗██╔══██╗██║   ██║██║    ██╔════╝██╔═══██╗████╗ ████║██╔══██╗████╗  ██║
   ███████║██║  ██║██████╔╝██║   ██║██║    ██║     ██║   ██║██╔████╔██║███████║██╔██╗ ██║
   ██╔══██║██║  ██║██╔══██╗██║   ██║██║    ██║     ██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║
   ██║  ██║██████╔╝██████╔╝╚██████╔╝██║    ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚████║
   ╚═╝  ╚═╝╚═════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
   
   Welcome to Abdul Rahman's Portfolio!
   Website enhanced with interactive JavaScript effects.
`);