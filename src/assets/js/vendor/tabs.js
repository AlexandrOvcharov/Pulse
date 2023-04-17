// $(document).ready(function(){
//    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
//       $(this)
//         .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
//         .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
//     });

//     $('.catalog__card__link').each(function(i) {
//       $(this).on('click', function(e) {
//          e.preventDefault();
//          $('.catalog__card__content').eq(i).toggleClass('catalog__card__content--active');
//          $('.catalog__card__list').eq(i).toggleClass('catalog__card__list--active');

//       })
//     })

//     $('.catalog__card__link--list-exit').each(function(i) {
//       $(this).on('click', function(e) {
//          e.preventDefault();
//          $('.catalog__card__content').eq(i).toggleClass('catalog__card__content--active');
//          $('.catalog__card__list').eq(i).toggleClass('catalog__card__list--active');

//       })
//     })
// });

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
   $(this)
     .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
     .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
   $(item).each(function(i) {
       $(this).on('click', function(e) {
           e.preventDefault();
           $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
           $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
       })
   });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');