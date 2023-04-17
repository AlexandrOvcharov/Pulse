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
$(document).ready(function(){
   $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('fast');
   });
   $('.modal__close').on('click', function() {
    $('.overlay, #consulation, #order, #thanks').fadeOut('slow');
   });

//    $('.button--mini').on('click', function(){
//     $('.overlay, #order').fadeIn('fast');
//    });

   $('.button--mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('fast');
    })
   });
 });