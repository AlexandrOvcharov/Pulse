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