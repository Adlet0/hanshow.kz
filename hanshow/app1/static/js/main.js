document.addEventListener("DOMContentLoaded", () => {
  /* ==============================
     Tabs
  ============================== */
  window.showTab = function (tabId) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.add("active");

    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`[onclick="showTab('${tabId}')"]`);
    if (activeBtn) activeBtn.classList.add("active");
  };

  /* ==============================
     Кнопка "Наверх"
  ============================== */
  const scrollBtn = document.getElementById("backToTop");
  if (scrollBtn) {
    const toggleBtn = () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    };
    toggleBtn();
    window.addEventListener("scroll", toggleBtn, { passive: true });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ==============================
     Mobile menu
  ============================== */
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });
  }

  /* ==============================
     Navbar background on scroll
  ============================== */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const navbarBg = () => {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(255,255,255,0.98)";
      } else {
        navbar.style.background = "rgba(255,255,255,0.95)";
      }
    };
    navbarBg();
    window.addEventListener("scroll", navbarBg, { passive: true });
  }

  /* ==============================
     Carousel
  ============================== */
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let current = 0;

  function showSlide(index) {
    if (!slides.length) return;
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
  }

  if (slides.length > 0) {
    showSlide(current);
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });
    }
  }

  /* ==============================
     Timeline animation
  ============================== */
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (timelineItems.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
  }

  /* ==============================
     Scroll animations
  ============================== */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".feature-card, .solution-card, .service-item, .stat-item, .spec-card")
    .forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      scrollObserver.observe(el);
    });

  /* ==============================
     Price tag animation
  ============================== */
  const priceTag = document.querySelector(".price-tag");
  const advantages = document.getElementById("advantages");
  if (priceTag && advantages) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          priceTag.classList.add("visible");
          obs.unobserve(advantages);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(advantages);
  }

  /* ==============================
     Contact form
  ============================== */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");

      const submitBtn = e.target.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email}.`);
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
});
