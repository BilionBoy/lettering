// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      // Handle special cases for modals
      if (targetId === "#loginModal" || targetId === "#registerModal") {
        return; // Let Bootstrap handle the modal
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // Login button functionality
  const loginButtons = document.querySelectorAll(".btn-login");
  loginButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const loginModal = new bootstrap.Modal(
        document.getElementById("loginModal")
      );
      loginModal.show();
    });
  });

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".card, .feature-item, h2, .lead"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  };

  // Initial check on page load
  animateOnScroll();

  // Check on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Initialize AOS Animation Library
  // Import AOS library here (e.g., <script src="https://unpkg.com/aos@next/dist/aos.js"></script> in your HTML)
  AOS.init({
    once: true,
    duration: 800,
    easing: "ease-in-out",
  });

  // Cursor Follower
  const cursor = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Enlarge cursor on hoverable elements
  const hoverables = document.querySelectorAll(
    "a, button, .benefit-card, .pricing-card, .preview-image"
  );

  hoverables.forEach((hoverable) => {
    hoverable.addEventListener("mouseenter", () => {
      cursor.style.width = "50px";
      cursor.style.height = "50px";
      cursor.style.backgroundColor = "rgba(255, 61, 127, 0.1)";
    });

    hoverable.addEventListener("mouseleave", () => {
      cursor.style.width = "30px";
      cursor.style.height = "30px";
      cursor.style.backgroundColor = "rgba(255, 61, 127, 0.2)";
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links (This section is duplicated, but the updated version is kept)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();

        const targetId = this.getAttribute("href");

        // Handle special cases for modals
        if (targetId === "#loginModal") {
          return; // Let Bootstrap handle the modal
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Testimonial Slider
  const testimonialNavBtns = document.querySelectorAll(".testimonial-nav-btn");

  testimonialNavBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const testimonialId = this.getAttribute("data-testimonial");

      // Remove active class from all buttons and contents
      document
        .querySelectorAll(".testimonial-nav-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".testimonial-content")
        .forEach((c) => c.classList.remove("active"));
      document
        .querySelectorAll(".testimonial-image")
        .forEach((i) => i.classList.remove("active"));

      // Add active class to current button and content
      this.classList.add("active");
      document
        .getElementById(`testimonial-content-${testimonialId}`)
        .classList.add("active");
      document
        .getElementById(`testimonial-image-${testimonialId}`)
        .classList.add("active");
    });
  });

  // Login button functionality (This section is duplicated, but the updated version is kept for consistency)
  const loginButtons2 = document.querySelectorAll(".btn-login");
  loginButtons2.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const loginModal = new bootstrap.Modal(
        document.getElementById("loginModal")
      );
      loginModal.show();
    });
  });
});
