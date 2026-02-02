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
  resumeModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  resumeModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = 'none';
  }
});
