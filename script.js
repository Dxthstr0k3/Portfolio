const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x-lg');
    navbar.classList.toggle('active');
}

/* Resume Modal Logic */
const resumeBtn = document.getElementById('resumeBtn');
const resumeModal = document.getElementById('resumeModal');
const closeModal = document.getElementById('closeModal');

resumeBtn.addEventListener('click', () => {
  resumeModal.classList.add("active");
  resumeModal.classList.remove("active");
});

closeModal.addEventListener('click', () => {
  resumeModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = "";

  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }
  });
});
