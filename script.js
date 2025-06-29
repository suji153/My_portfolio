const textElement = document.getElementById("typing-text");
const phrases = ["I'm into Development", "I'm into Designing", "Aspiring Web Developer"];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  let currentPhrase = phrases[phraseIndex];
  let currentText = currentPhrase.substring(0, letterIndex);

  textElement.textContent = currentText;

  if (!isDeleting) {
    if (letterIndex < currentPhrase.length) {
      letterIndex++;
    } else {
      isDeleting = true;
      setTimeout(type, 1000); // wait before deleting
      return;
    }
  } else {
    if (letterIndex > 0) {
      letterIndex--;
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
