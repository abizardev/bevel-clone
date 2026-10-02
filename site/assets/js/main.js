// Bevel — main.js (penyelamat tampil: paksa tampilkan phone/headline + hidupkan video data-src)
(function () {
  // 1. Smooth scroll bila Lenis ada
  try {
    if (window.Lenis) {
      var lenis = new Lenis({ duration: 1.1 });
      var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  } catch (e) { console.warn("[bevel] lenis skip:", e); }

  function forceShow() {
    // Webflow menyembunyikan .hero_phone/.hero_watch/.intelligence_floating
    // sampai interaksi jalan (w-mod-ix3). Kalau gagal (offline/file://),
    // paksa tampil setelah 2.5 dtk agar headline + mockup phone tidak hilang.
    document.documentElement.classList.add("bevel-force-show");
  }

  function hydrateDataSrcVideos() {
    // Video extra-features pakai data-src (lazy Webflow). Salin ke src
    // agar mockup phone tetap jalan walau loader Webflow gagal.
    document.querySelectorAll('video[data-src]:not([src])').forEach(function (v) {
      var url = v.getAttribute("data-src");
      if (!url) return;
      try {
        var srcEl = v.querySelector("source");
        if (srcEl && !srcEl.getAttribute("src")) {
          srcEl.setAttribute("src", url);
        } else if (!srcEl) {
          v.setAttribute("src", url);
        }
        var p = v.play && v.play();
        if (p && p.catch) p.catch(function () {});
      } catch (e) { console.warn("[bevel] video skip:", e); }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
    hydrateDataSrcVideos();
    setTimeout(forceShow, 2500);
    // pengaman: kalau Webflow sudah jalan duluan, class ini tidak merusak animasi
    setTimeout(hydrateDataSrcVideos, 3500);
    console.log("[bevel] structured site ready: index.html + assets/{css,js,images,videos,fonts}");
    initMobileNav();
  });

  function initMobileNav() {
    // impeccable `adapt`: hamburger → drawer di <=767px.
    // Webflow IX pakai w-mod-ix3 yang tidak pernah muncul → toggle sendiri.
    var toggle = document.querySelector(".nav_menu-2");
    var nav = document.querySelector(".navigation");
    if (!toggle || !nav) return;
    if (toggle.dataset.bevelNav === "ready") return;
    toggle.dataset.bevelNav = "ready";
    toggle.setAttribute("role", "button");
    toggle.setAttribute("tabindex", "0");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    toggle.setAttribute("aria-expanded", "false");

    function isMobile() {
      return window.matchMedia("(max-width: 767px)").matches;
    }
    function setOpen(open) {
      nav.classList.toggle("bevel-nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    }
    function toggleNav() {
      if (!isMobile()) return;
      setOpen(!nav.classList.contains("bevel-nav-open"));
    }
    toggle.addEventListener("click", toggleNav);
    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleNav();
      }
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest(".navigation_link, .nav_main .btn")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (!isMobile()) setOpen(false);
    });
  }
})();
