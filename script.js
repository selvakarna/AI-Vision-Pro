// ========== NAVBAR SCROLL ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// ========== PORTFOLIO FILTER ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        portfolioCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ========== FAQ TOGGLE ==========
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== EMAILJS FORM ==========
const quoteForm = document.getElementById('quoteForm');
const submitBtn = document.getElementById('submitBtn');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        const templateParams = {
            user_name: document.getElementById('userName').value,
            user_email: document.getElementById('userEmail').value,
            user_phone: document.getElementById('userPhone').value,
            user_company: document.getElementById('userCompany').value,
            service: document.getElementById('serviceType').value,
            budget: document.getElementById('budget').value,
            message: document.getElementById('projectDesc').value,
        };

        // Uncomment when EmailJS is configured:
        /*
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                showNotification('✅ Thank you! Your request has been sent.', 'success');
                quoteForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Quote Request';
                    submitBtn.disabled = false;
                }, 3000);
            })
            .catch(function(error) {
                submitBtn.innerHTML = '<i class="fas fa-exclamation"></i> Failed';
                showNotification('❌ Something went wrong. Please try again.', 'error');
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Quote Request';
                    submitBtn.disabled = false;
                }, 3000);
            });
        */

        // Temporary demo alert (remove when EmailJS is configured):
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            showNotification('✅ Thank you! Your request has been received.', 'success');
            quoteForm.reset();
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Quote Request';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// ========== NOTIFICATION ==========
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

console.log('🚀 AIVisionPro Website Loaded!');
