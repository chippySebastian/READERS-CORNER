
// Functionality for tab navigation
document.querySelectorAll('.arrival-tab-navs').forEach(function(tabNav) {
  tabNav.addEventListener('click', function() {
    var tab_id = this.getAttribute('data-tab');
    
    // Remove 'active' class from all tab navs and contents
    document.querySelectorAll('.arrival-tab-navs').forEach(function(nav) {
      nav.classList.remove('active');
    });
    document.querySelectorAll('.arrival-tab-content').forEach(function(content) {
      content.classList.remove('active');
    });
    
    // Add 'active' class to the clicked tab nav and corresponding content
    this.classList.add('active');
    document.getElementById(tab_id).classList.add('active');
  });
});

// Functionality for filter accordion
document.querySelectorAll('.filter-accordion .filter-acco-header').forEach(function(header) {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
    
    // Collapse other accordions
    document.querySelectorAll('.filter-acco-header').forEach(function(otherHeader) {
      if (otherHeader !== header) {
        otherHeader.classList.remove('active');
        otherHeader.nextElementSibling.style.display = 'none';
      }
    });
  });
});

// Functionality for hamburger menu
const hampMenu = document.querySelector(".hamburger-menu-design-icon");
const navbar = document.querySelector(".header-nav");
const bodyTag = document.querySelector("body");
hampMenu.addEventListener("click", function() {
  hampMenu.classList.toggle("open");
  navbar.classList.toggle("open");
  bodyTag.classList.toggle("o-hidden");
});

// Cart popup 
document.querySelectorAll('.open-cart-popup').forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelector('.cart-tab-popup').classList.add('opened');
    document.body.classList.add('o-hidden');
  });
});

document.querySelectorAll('.black-overlay, .cart-tab-popu-back').forEach(function(element) {
  element.addEventListener('click', function() {
    document.querySelector('.cart-tab-popup').classList.remove('opened');
    document.body.classList.remove('o-hidden');
  });
});

// Plugin functionality for Quantity
(function () {
  "use strict";
  function Guantity($root) {
    const quantity_target = $root.querySelector("[data-quantity-target]");
    const quantity_minus = $root.querySelector("[data-quantity-minus]");
    const quantity_plus = $root.querySelector("[data-quantity-plus]");
    var quantity_ = parseInt(quantity_target.value);
    
    quantity_minus.addEventListener('click', function () {
      quantity_target.value = --quantity_;
    });
    
    quantity_plus.addEventListener('click', function () {
      quantity_target.value = ++quantity_;
    });
  }
  
  window.Guantity = Guantity;
  
  document.querySelectorAll("[data-quantity]").forEach(function(element) {
    Guantity(element);
  });
})();
