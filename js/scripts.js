// ========================Navbar fixed on scrolling==========================

let nav = document.querySelectorAll(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.forEach(function(element) {
      element.classList.add("scroll-on");
    });
  }else {
    nav.forEach(function(element) {
      element.classList.remove("scroll-on");
    });
  }
};

// =========================navbar hide======================================

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// =========================Conter Section===================================

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    },step);
  }
  counter("count1", 0, 899, 3000);
  counter("count2", 1, 189, 5000);
  counter("count3", 1, 48, 7000);
});