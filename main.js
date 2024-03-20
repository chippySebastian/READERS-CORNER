// $('.arrival-tab-navs').click(function () {
//     var tab_id = $(this).attr('data-tab');
//     $('.arrival-tab-navs').removeClass('active');
//     $('.arrival-tab-content').removeClass('active');
//     $('.arrival-tab-navs[data-tab=' + tab_id + ']').addClass('active');
//     $("#" + tab_id).addClass('active');
  
// });

// $('.filter-accordion .filter-acco-header').click(function() {
//   $(this).toggleClass('active').next('.filter-acco-content').slideToggle();
//   $('.filter-acco-header').not(this).removeClass('active').next('.filter-acco-content').slideUp();
// });

// const hampMenu = document.querySelector(".hamburger-menu-design-icon");
// const navbar = document.querySelector(".header-nav");
// const bodyTag = document.querySelector("body");
// hampMenu.addEventListener("click", () => {
//   hampMenu.classList.toggle("open");
//   navbar.classList.toggle("open");
//   bodyTag.classList.toggle("o-hidden");
// });


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
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    
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
hampMenu.addEventListener("click", () => {
  hampMenu.classList.toggle("open");
  navbar.classList.toggle("open");
  bodyTag.classList.toggle("o-hidden");
});



// cart popup 
$('.open-cart-popup').click(function () {

  $('.cart-tab-popup').addClass('opened');
  $('body').addClass('o-hidden');

});
$('.black-overlay, .cart-tab-popu-back').click(function () {

  $('.cart-tab-popup').removeClass('opened');
  $('body').removeClass('o-hidden');

});



/////////////////////
(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = $(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();

(function () {
  "use strict";
  function Guantity($root) {
    const element = $root;
    const quantity = $root.first("data-quantity");
    const quantity_target = $root.find("[data-quantity-target]");
    const quantity_minus = $root.find("[data-quantity-minus]");
    const quantity_plus = $root.find("[data-quantity-plus]");
    var quantity_ = quantity_target.val();
    $(quantity_minus).click(function () {
      quantity_target.val(--quantity_);
    });
    $(quantity_plus).click(function () {
      quantity_target.val(++quantity_);
    });
  }
  $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
  $("[data-quantity]").Guantity();
})();







// document.addEventListener("DOMContentLoaded", () => {
//   console.log(document);
//   let newArrivalButton=document.querySelectorAll(".arrival-tab-navs");
//   console.log(newArrivalButton);
  
//   for(let i=0; i<newArrivalButton.length; i++){
//     newArrivalButton[i].addEventListener("click",navToggleBar)
//   }
// });

// function navToggleBar(){
//   console.log(this.dataset.tab);
//   let tabId = this.dataset.tab;
//   let tabContentClass = this.dataset.tabContentClass;
//   console.log(tabContentClass);
//   console.log(document.querySelector("arrival-tab-content"))
//   this.classList.remove("active");
// }