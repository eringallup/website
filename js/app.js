$(document).ready(function() {

  $(document).on('click', '[view-slides]', function(e) {
    e.preventDefault();
    var $target = $(e.target);
    $('html').addClass('slideshowing');
    setTimeout(function() {
      $('.modal .slick-list').focus();
    }, 10);
  }).on('keypress', function(e) {
    if (e.keyCode === 27) {
      $('html').removeClass('slideshowing');
    }
  }).on('click', '.modal', function(e) {
    var $target = $(e.target);
    if ($target.hasClass('modal')) {
      $('html').removeClass('slideshowing');
    }
  }).on('click', '.close-modal', function(e) {
    $('html').removeClass('slideshowing');
  });
  if ($.fn.slick) {
    $('.slideshow').slick({
      mobileFirst: true,
      fade: true,
      prevArrow: '<i class="left-arrow clickable"></i>',
      nextArrow: '<i class="right-arrow clickable"></i>'
    });
    $(document).on('keydown.slick', '.slick-list', function(e) {
      if (e.keyCode === 27) {
        $('html').removeClass('slideshowing');
      }
    });
  }

  $('.slick-track').each(function() {
    var slides = $(this).find('.slick-slide');
    slides.each(function(idx, item) {
      var $pager = $('<span class="slide-pager" />');
      $pager.text((idx + 1) + ' of ' + slides.length);
      $(item).find('.slide-left').prepend($pager);
    });
  });

  var onResize = function() {
    var windowWidth = $(window).width();
    $('.distribute').each(function() {
      var items = $(this).find('> *');
      var equalWidth = Math.round(100 / items.length);
      if (windowWidth > 767) {
        items.css('width', equalWidth + '%');
      } else {
        items.css('width', '');
      }
    });
    $('.match-height').each(function() {
      var items = $(this).find('> *');
      var tallest = 0;
      items.each(function() {
        var height = $(this).height();
        if (height > tallest) {
          tallest = height;
        }
      });
      if (windowWidth > 767) {
        items.height(tallest);
      } else {
        items.height(null);
      }
    });
  };
  onResize();
  onResize = _.debounce(onResize, 300);
  $(window).on('resize', onResize);

});
