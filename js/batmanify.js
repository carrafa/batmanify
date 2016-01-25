(function($) {

  $.fn.batmanify = function(options) {

    var settings = $.extend({
      rotationSpeed: 15,
      zoomSpeed: 0.02,
      imageSource: 'images/batmanify.png',
      topOffset: 0,
    }, options);

    this.click(function(e) {
      e.preventDefault();
      $('html').css('cursor', 'none');
      var link = this.href;
      batmanifyRotate(settings.rotationSpeed, settings.zoomSpeed, link);
    });

    function batmanifyRotate(rotationSpeed, zoomSpeed, link) {
      var peak = false;
      var deg = 0;
      var z = 0;
      var logoScale = 0;
      batmanifyLogo();
      var intervalId = window.setInterval(function() {
        deg = deg + rotationSpeed;
        if (!peak) {
          z = z + zoomSpeed;
        }
        if (peak) {
          z = z - zoomSpeed;
        }
        if (z > 2) {
          peak = true;
        }
        if (peak && (z <= 0)) {
          clearInterval(intervalId);
          window.location.replace(link);
        }
        console.log(z);
        $('body').css({
          "transform": "rotateZ(" + deg + "deg)",
          "-webkit-transform": "rotateZ(" + deg + "deg)",
          "-ms-transform": "rotateZ(" + deg + "deg)"
        });
        $('.batmanify-logo').css({
          "transform": "scale(" + z + ")",
          "-webkit-transform": "scale(" + z + ")",
          "-ms-transform": "scale(" + z + ")"
        });
      }, 10);
    }

    function batmanifyLogo() {
      var $logo = $('<img>').attr('src', settings.imageSource).addClass(
        'batmanify-logo');
      $logo.css({
        position: 'fixed',
        top: settings.topOffset,
        width: '100%',
        "transform": "scale(0)",
        "-webkit-transform": "scale(0)",
        "-ms-transform": "scale(0)"
      });
      $('html').append($logo);
    }

  };

  $(function() {
    $('.batmanify').batmanify();
  });

}(jQuery));
