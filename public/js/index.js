(function () {
  'use strict';

  /* ========  mobile menu  start ========= */
  const menuWrapper = document.querySelector('.menu-wrapper');
  const body = document.querySelector('body');
  document.querySelector('.navbarOpen').addEventListener('click', () => {
    menuWrapper.classList.remove('hidden');
    body.classList.add('overflow-hidden');
  });
  document.querySelector('.navbarClose').addEventListener('click', () => {
    menuWrapper.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  });

  // === close navbar-collapse when a  clicked
  document.querySelectorAll('.navbar li:not(.submenu-item) a').forEach((e) =>
    e.addEventListener('click', () => {
      menuWrapper.classList.add('hidden');
      body.classList.remove('overflow-hidden');
    })
  );

  // === Sub-menu
  const submenuItems = document.querySelectorAll('.submenu-item');
  submenuItems.forEach((el) => {
    el.querySelector('a').addEventListener('click', () => {
      el.querySelector('a').classList.toggle('active');
      el.querySelector('.submenu').classList.toggle('hidden');
    });
  });

  /* ========  mobile menu end ========= */

  window.onscroll = function () {
    // ===  Sticky Navbar
    const header = document.querySelector('.navbar');
    if (window.pageYOffset >= 100) {
      header.classList.add('sticky-navbar');
    } else {
      header.classList.remove('sticky-navbar');
    }

    // ===  show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  };

  /* ========  themeSwitcher start ========= */

  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color0scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // call theme switch on clicking buttons
  // themeSwitcher.addEventListener('click', () => {
  //   themeSwitch();
  // });

  // invoke theme check on initial load
  themeCheck();
  /* ========  themeSwitcher End ========= */

  /* ========  scroll to top  start ========= */
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector('.back-to-top').onclick = () => {
    scrollTo(document.documentElement);
  };
  /* ========  scroll to top  end ========= */
})();

// Document Loaded
document.addEventListener('DOMContentLoaded', () => {});