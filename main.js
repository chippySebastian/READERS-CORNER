// $('.arrival-tab-navs').click(function () {
//     var tab_id = $(this).attr('data-tab');
  
//     $('.arrival-tab-navs').removeClass('active');
//     $('.arrival-tab-content').removeClass('active');
  
//     $('.arrival-tab-navs[data-tab=' + tab_id + ']').addClass('active');
//     $("#" + tab_id).addClass('active');
  
// });

$('.filter-accordion .filter-acco-header').click(function() {
  $(this).toggleClass('active').next('.filter-acco-content').slideToggle();
  $('.filter-acco-header').not(this).removeClass('active').next('.filter-acco-content').slideUp();
});

const hampMenu = document.querySelector(".hamburger-menu-design-icon");
const navbar = document.querySelector(".header-nav");
const bodyTag = document.querySelector("body");
hampMenu.addEventListener("click", () => {
  hampMenu.classList.toggle("open");
  navbar.classList.toggle("open");
  bodyTag.classList.toggle("o-hidden");
});


document.addEventListener("DOMContentLoaded", () => {
  console.log(document);
  let newArrivalButton=document.querySelectorAll(".arrival-tab-navs");
  console.log(newArrivalButton);
  
  for(let i=0; i<newArrivalButton.length; i++){
    newArrivalButton[i].addEventListener("click",navToggleBar)
  }
});

function navToggleBar(){
  console.log(this.dataset.tab);
  let tabId = this.dataset.tab;
  let tabContentClass = this.dataset.tabContentClass;
  console.log(tabContentClass);
  console.log(document.querySelector("arrival-tab-content"))
  this.classList.remove("active");
}