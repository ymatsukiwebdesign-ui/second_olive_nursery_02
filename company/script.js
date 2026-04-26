const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const spNav = document.querySelector(".sp-nav");
const spNavLinks = document.querySelectorAll(".sp-nav a");
const pageTop = document.querySelector(".page-top");

/* 全画面の際はここを消す */

if (header) {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });
}

/* 全画面の際はここを消す */

if (hamburger && spNav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    spNav.classList.toggle("open");
  });
}

spNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburger && spNav) {
      hamburger.classList.remove("active");
      spNav.classList.remove("open");
    }
  });
});

if (pageTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      pageTop.classList.add("show");
    } else {
      pageTop.classList.remove("show");
    }
  });
}

// ===== fade-up =====
const fadeItems = document.querySelectorAll(
  ".intro .container, .page-links-head, .page-card, .gallery-head, .gallery-single, .news-head, .news-list, .recruit-head, .recruit-text, .recruit-images, .recruit-btn"
);

fadeItems.forEach((item) => {
  item.classList.add("fade-up");
});

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

fadeItems.forEach((item) => {
  fadeObserver.observe(item);
});