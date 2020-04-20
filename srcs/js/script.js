const breakpoint = window.matchMedia( '(min-width:64em)' );
let mySwiper;

const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
       if ( mySwiper !== undefined )
         mySwiper.destroy( true, true );
       return;
    } else if ( breakpoint.matches === false ) {
       return enableSwiper();
    }
 };

const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper-container', {
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
        }
    });
 };
breakpoint.addListener(breakpointChecker);
breakpointChecker();

let burger = document.querySelector(".toggle-nav__checkbox");
let menu = document.querySelector(".nav-main");
let user_list = document.querySelector(".nav-main__user-list");
let delay = 100;

burger.addEventListener("change", function() {
    if (this.checked && (window.innerWidth < 1024)) {
        menu.style.top = '0';
    } else if (!this.checked && (window.innerWidth < 1024)){
        menu.style.top = '-127%';
    } else if (this.checked && (window.innerWidth > 1024 && window.innerWidth < 1440)) {
        user_list.style.opacity = "1";
        user_list.style.visibility = "visible";
    } else if (!this.checked && (window.innerWidth > 1024 && window.innerWidth < 1440)) {
        user_list.style.opacity = "0";
        setTimeout(function() {
            user_list.style.visibility = "hidden";
        }, delay);
    }
});
