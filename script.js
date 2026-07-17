/* Dr Razi N — CV site · Theme 3 "Scholar" · shared interactions */
(function () {
  "use strict";
  const root = document.documentElement;
  const THEME_KEY = "razi-theme";

  function preferred() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  const apply = (t) => root.setAttribute("data-theme", t);
  apply(preferred());

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        apply(next);
        localStorage.setItem(THEME_KEY, next);
      });
    }

    const burger = document.getElementById("navBurger");
    const navwrap = document.getElementById("navwrap");
    if (burger && navwrap) {
      burger.addEventListener("click", function () {
        const open = navwrap.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(open));
      });
      navwrap.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          navwrap.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem(THEME_KEY)) apply(e.matches ? "dark" : "light");
  });
})();
