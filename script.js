document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'li') return;
    document.querySelectorAll('.skill-details').forEach(details => {
      if (details !== this.querySelector('.skill-details')) {
        details.style.display = 'none';
      }
    });
    const details = this.querySelector('.skill-details');
    if (details) {
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }
  });
});

const typingText = document.getElementById('typing-text');
const phrases = [
  "A Computer Science Engineering Student with a strong foundation in Data Science, Web Development, and Database Management."
];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, letterIndex--);
    if (letterIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, letterIndex++);
    if (letterIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 100);
    }
  }
}
if (typingText) type();
