// =============================
// Mobile Menu Toggle
// =============================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bi-x-lg');
  navbar.classList.toggle('active');
});


// =============================
// Resume Modal Logic
// =============================
const resumeBtn = document.getElementById('resumeBtn');
const resumeModal = document.getElementById('resumeModal');
const closeModal = document.getElementById('closeModal');

resumeBtn.addEventListener('click', () => {
  resumeModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
  resumeModal.classList.remove('active');
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.classList.remove('active');
  }
});


// =============================
// Scroll Reveal Animation
// =============================
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
};


// =============================
// Active Nav Highlight
// =============================
const navLinks = document.querySelectorAll('.navbar a');

const highlightNav = () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};


// =============================
// Single Scroll Listener (Performance Upgrade)
// =============================
window.addEventListener('scroll', () => {
  revealOnScroll();
  highlightNav();
});