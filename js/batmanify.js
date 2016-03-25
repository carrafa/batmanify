(function($) {
  console.log('loaded');
  $.fn.batmanify = function(options) {

    var settings = $.extend({
      rotationSpeed: 15,
      zoomSpeed: 0.02,
      imageSource: 'images/batmanify.png',
      topOffset: 0
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
          window.location.assign(link);
        }
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
      var $logo = $('<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1246.000000pt" height="640.000000pt" viewBox="0 0 1246.000000 640.000000" preserveAspectRatio="xMidYMid meet" class="batmanify-logo">').html('<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M5557 5803 c-7 -342 -32 -554 -93 -795 -80 -320 -207 -571 -374 -739 -191 -192 -384 -275 -671 -286 -168 -6 -210 3 -374 85 -297 147 -485 358 -557 624 -29 106 -30 319 -4 443 39 179 131 408 242 596 24 42 44 78 44 81 0 15 -429 -123 -695 -222 -650 -243 -1282 -588 -1715 -935 -566 -453 -895 -967 -976 -1523 -21 -139 -20 -413 0 -554 118 -816 737 -1486 1791 -1936 196 -83 600 -221 612 -208 2 2 -21 45 -52 96 -198 326 -298 650 -266 861 16 106 66 203 141 272 96 89 216 125 456 134 119 4 174 2 255 -12 294 -49 574 -197 810 -429 48 -48 89 -86 92 -86 3 0 19 29 35 65 84 178 233 346 363 408 89 43 143 56 228 57 389 1 858 -459 1358 -1334 43 -75 81 -136 84 -136 4 0 35 51 69 113 230 411 498 784 727 1010 236 233 447 347 644 347 227 0 442 -166 584 -450 20 -41 39 -77 41 -79 2 -2 53 44 114 103 180 172 402 307 610 370 152 46 258 59 430 53 242 -9 363 -44 460 -133 109 -101 145 -192 144 -364 -1 -218 -94 -483 -273 -779 -28 -46 -50 -86 -48 -88 12 -12 420 127 610 208 775 331 1326 787 1600 1327 198 389 260 834 176 1270 -60 312 -216 629 -452 922 -107 132 -357 378 -505 495 -539 427 -1278 803 -2112 1073 -150 48 -300 91 -300 85 0 -2 20 -39 45 -82 300 -520 343 -961 126 -1292 -55 -84 -186 -215 -277 -277 -80 -54 -241 -134 -328 -162 -63 -21 -82 -22 -215 -17 -245 9 -412 68 -587 208 -357 284 -567 939 -552 1722 2 131 0 177 -9 177 -59 0 -234 -261 -352 -527 -53 -118 -55 -121 -90 -127 -46 -8 -515 -8 -561 0 -33 6 -38 11 -69 82 -54 124 -159 321 -216 408 -50 75 -133 164 -153 164 -5 0 -12 -129 -15 -287z"/></g>')
      $logo.css({
        'position': 'fixed',
        'top': settings.topOffset,
        'width': '100%',
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
