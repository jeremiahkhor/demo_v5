document.addEventListener("DOMContentLoaded", () => {
  // Highlight active page
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile menu toggle
  const toggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Reveal on scroll
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", () => {
    revealOnScroll();

    // Header scroll effect
    const header = document.querySelector("header");
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });

  // Trigger reveal on load
  revealOnScroll();
});
