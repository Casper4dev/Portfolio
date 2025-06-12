
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  function showSlide(index) {
    // Remove active classes
    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');

    // Update index
    currentSlide = index;

    // Wrap around
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;

    // Add active classes
    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function changeSlide(direction) {
    showSlide(currentSlide + direction);
  }

  // Event listeners for arrows
  prevBtn?.addEventListener('click', () => changeSlide(-1));
  nextBtn?.addEventListener('click', () => changeSlide(1));

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  Auto-slide
  setInterval(() => {
    changeSlide(1);
  }, 5000);
});

   
  const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openFormBtn");
  const closeBtn = document.querySelector(".closeBtn");
  const form = document.getElementById("popupContactForm");

  openBtn.onclick = () => modal.style.display = "block";
  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.style.display = 'none');

    let isValid = true;

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    if (name.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    if (email.value.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else if (!email.checkValidity()) {
      document.getElementById("emailError").textContent = "Invalid email address.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    if (message.value.trim() === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      alert("Message sent successfully!");
      form.reset();
      modal.style.display = "none";
    }
  });
   popup.querySelector('.close').addEventListener('click', () => {
      popup.remove();
    });

const backToTop = document.createElement("button");
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const isMobile = window.matchMedia("(max-width: 360px)").matches;

if (isMobile) {
  
  clearInterval(autoSlideInterval);
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      modal.style.height = "100vh";
    } else {
      modal.style.height = "";
    }
  });