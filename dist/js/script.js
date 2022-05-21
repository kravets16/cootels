window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__list-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header__list-active');
        })
    })
});
$(document).ready(function(){
    $('.customers__carousel').slick({
        arrows: false,
        infinite: true,
        dots: true,
        //autoplay: true,
        //autoplaySpeed: 3000,
        speed: 1500,
        adaptiveHeight: true,
        pauseOnHover: true
      });
  });
