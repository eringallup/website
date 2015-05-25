$(document).ready(function() {
  $(document).on('click', '.view-slides', function(e) {
    e.preventDefault();
    var $target = $(e.target);
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
    mobileFirst: true,
    fade: true,
    prevArrow: '<i class="left-arrow clickable"></i>',
    nextArrow: '<i class="right-arrow clickable"></i>'
  });
});
