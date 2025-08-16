// Fade-in sections on scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
// Show/Hide Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
// Fade in Contact Section
const contactSection = document.querySelector('#contact');
const observerContact = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      contactSection.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

observerContact.observe(contactSection);
