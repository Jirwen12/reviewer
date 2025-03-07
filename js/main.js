// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });
});

// Progress tracking
let progress = {
    materialsCompleted: 0,
    quizScores: [],
    materialsViewed: {
        1: false,
        2: false,
        3: false
    },
    quizzesCompleted: {
        1: false,
        2: false,
        3: false
    },
    finalExamScore: null,
    finalExamTaken: false
};

// Load progress from localStorage if available
if (localStorage.getItem('reviewerProgress')) {
    progress = JSON.parse(localStorage.getItem('reviewerProgress'));
    updateProgressDisplay();
    checkFinalExamAccess();
}

function updateProgressDisplay() {
    const materialsProgress = document.getElementById('materials-progress');
    const quizAverage = document.getElementById('quiz-average');

    materialsProgress.textContent = `${progress.materialsCompleted}%`;
    
    const averageScore = progress.quizScores.length > 0
        ? Math.round(progress.quizScores.reduce((a, b) => a + b, 0) / progress.quizScores.length)
        : 0;
    
    quizAverage.textContent = `${averageScore}%`;
    checkFinalExamAccess();
}

function checkFinalExamAccess() {
    const finalExamButton = document.querySelector('.exam-btn');
    const examIntroText = document.querySelector('.exam-intro p');

    if (finalExamButton && examIntroText) {
        if (progress.finalExamTaken) {
            finalExamButton.disabled = true;
            examIntroText.innerHTML = `
                <div class="exam-completed">
                    <p>You have already taken the final exam.</p>
                    <p>Your score: ${progress.finalExamScore}%</p>
                    <p>Contact your instructor if you need to retake the exam.</p>
                </div>
            `;
        } else {
            finalExamButton.disabled = false;
            examIntroText.textContent = "This exam consists of 100 questions covering all topics in software development.";
        }
    }
}

// Button handling functionality
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Material viewing functionality
function openMaterial(materialId) {
    const button = event.target;
    setButtonLoading(button, true);

    // Here we'll handle opening the PDF files
    const materials = {
        1: 'L1-Introduction-to-Software-Development.pdf',
        2: 'L2-Evolution-of-Software-Development-History-Phases-and-Future-Trends.pdf',
        3: 'L3-Types-of-Software-Development.pdf'
    };

    const file = materials[materialId];
    if (file) {
        // Simulate loading time for better UX
        setTimeout(() => {
            window.open(file, '_blank');
            
            // Update progress
            progress.materialsViewed[materialId] = true;
            progress.materialsCompleted = Math.round(
                (Object.values(progress.materialsViewed).filter(v => v).length / 3) * 100
            );
            localStorage.setItem('reviewerProgress', JSON.stringify(progress));
            updateProgressDisplay();
            
            setButtonLoading(button, false);
        }, 500);
    }
}

// Prevent double-clicking on buttons
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        if (button.classList.contains('loading')) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }
});

// Add touch feedback for mobile devices
document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('option')) {
        e.target.style.transform = 'scale(0.98)';
    }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('option')) {
        e.target.style.transform = '';
    }
}, { passive: true });

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 