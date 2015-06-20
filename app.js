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
  });
  if ($.fn.slick) {
    $('.slideshow').slick({
      mobileFirst: true,
      fade: true,
      accessibility: false,
      prevArrow: '<i class="left-arrow clickable">&lsaquo;</i>',
      nextArrow: '<i class="right-arrow clickable">&rsaquo;</i>'
    });
    $(document).on('click', '.eg-modal', function(e) {
      var $target = $(e.target);
      var tagName = e.target.tagName.toLowerCase();
      if (tagName === 'img' || $target.hasClass('slide-right')) {
        $('.slideshow').slick('slickNext');
      } else if (tagName !== 'i') {
        $('html').removeClass('slideshowing');
      }
    });
    $(document).on('keydown', function(e) {
      if (e.keyCode === 27) {
        $('html').removeClass('slideshowing');
      } else if (e.keyCode === 39) {
        $('.slideshow').slick('slickNext');
      } else if (e.keyCode === 37) {
        $('.slideshow').slick('slickPrev');
      }
    });
  }

  $('.slick-track').each(function() {
    var slides = $(this).find('.slick-slide');
    slides.each(function(idx, item) {
      var $pager = $('<span class="slide-pager" />');
      $pager.text((idx + 1) + ' of ' + slides.length);
      $(item).find('.slide-left, .slide-right').each(function() {
        var $div = $('<div class="tbl-cell va-middle" />');
        $div.html($(this).html());
        $(this).html($div);
      });
      $(item).find('.slide-left > div').prepend($pager);
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
