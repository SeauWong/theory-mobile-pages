const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".section-nav a")];

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  },
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveLink(visible.target.id);
    }
  },
  {
    rootMargin: "-20% 0px -55% 0px",
    threshold: [0.15, 0.35, 0.6],
  },
);

sections.forEach((section) => {
  revealObserver.observe(section);
  sectionObserver.observe(section);
});

if (sections[0]) {
  setActiveLink(sections[0].id);
}
