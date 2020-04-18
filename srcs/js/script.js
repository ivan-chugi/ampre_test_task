   let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: -32,
        depth: 140,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

let burger = document.querySelector(".toggle-nav__checkbox");
let menu = document.querySelector(".nav-main");

burger.addEventListener("change", function() {
    if (this.checked && (window.innerWidth < 1024) ) {
        menu.style.top = '0';
    } else if (!this.checked && (window.innerWidth < 1024)){
        menu.style.top = '-100%';
    }
});