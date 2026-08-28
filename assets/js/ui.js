// Behaviour only. The navbar and footer are static HTML written by
// tools/build-partials.py so that crawlers which do not run JavaScript
// still see the site structure.
(function () {
    'use strict';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var isDark = theme === 'dark';
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(isDark));
            var moon = btn.querySelector('.icon-moon');
            var sun = btn.querySelector('.icon-sun');
            if (moon) moon.style.display = isDark ? 'none' : 'block';
            if (sun) sun.style.display = isDark ? 'block' : 'none';
        });
    }

    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light'));

    prefersDark.addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            applyTheme(next);
        });
    });

    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            var expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('open');
        });
    }

    var faqToggle = document.getElementById('faq-toggle');
    var faqList = document.getElementById('faq-list');
    if (faqToggle && faqList) {
        faqToggle.addEventListener('click', function () {
            faqList.classList.toggle('open');
            faqToggle.classList.toggle('open');
        });
    }
})();
