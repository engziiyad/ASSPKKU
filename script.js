// تأثير الظهور التدريجي للعناصر عند التمرير
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach((el) => observer.observe(el));

// تحريك الأعداد التصاعدية
const statNumbers = document.querySelectorAll(".stat h3");
let started = false;

function animateNumbers() {
  statNumbers.forEach((num) => {
    const target = +num.dataset.target;
    let current = 0;
    const speed = Math.max(1, Math.floor(target / 70));

    const counter = setInterval(() => {
      current += speed;

      if (current >= target) {
        num.textContent = "+" + target;
        clearInterval(counter);
      } else {
        num.textContent = "+" + current;
      }
    }, 24);
  });
}

const numbersSection = document.querySelector(".numbers");

const numbersObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !started) {
    started = true;
    animateNumbers();
  }
}, {
  threshold: 0.35
});

numbersObserver.observe(numbersSection);

// زر العودة للأعلى
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// البرمجة الخاصة بالقائمة المرنة للموبايل (Mobile Menu)
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

// فتح وإغلاق القائمة عند الضغط على زر الهامبرغر
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// إغلاق القائمة تلقائياً عند الضغط على أي رابط بداخلها للانتقال للقسم
navItems.forEach(item => {
  item.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});