// $(document).ready(function(){
//    $('.carousel__inner').slick({
//       prevArrow: '<button type="button" class="slider-arrows slick-prev"><img src="./assets/images/icons/left-arrow.png" alt=""></button>',
//       nextArrow: '<button type="button" class="slider-arrows slider-arrows--right slick-next"><img src="./assets/images/icons/right-arrow.png" alt=""></button>'
//    });
//  });

const slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   controls: false,
   nav: false
 });

 document.querySelector('.prev').addEventListener('click', function () {
   slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
   slider.goTo('next');
});