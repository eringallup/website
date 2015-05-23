$(document).ready(function() {
  $(document).on('click', '.view-slides', function() {
    $('html').addClass('slideshowing');
  }).on('keypress', function(e) {
    if (e.keyCode === 27) {
      $('html').removeClass('slideshowing');
    }
  }).on('click', '.modal', function(e) {
    var $target = $(e.target);
    if ($target.hasClass('modal')) {
      $('html').removeClass('slideshowing');
    }
  });
  $('.slideshow').slick({
    dots: true,
    prevArrow: '<i class="slick-prev clickable fa fa-arrow-left"></i>',
    nextArrow: '<i class="slick-next clickable fa fa-arrow-right"></i>'
  });
});
