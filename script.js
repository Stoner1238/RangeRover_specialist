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

// ===== Lightbox Gallery with Next/Prev =====
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    currentIndex = parseInt(img.getAttribute('data-index'));
    showImage(currentIndex);
    lightbox.style.display = 'flex';
  });
});

// Show Image
function showImage(index) {
  lightboxImg.src = galleryImages[index].src;
}

// Close Lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next / Prev
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
