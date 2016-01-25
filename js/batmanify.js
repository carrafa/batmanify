console.log('batmanify!');

$(function() {
  batmanify();
})

function batmanify() {
  $('.batmanify').click(function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    rotate(15, 0.015, link);
  })
}

function rotate(rotationSpeed, zoomSpeed, link) {
  var deg = 0;
  var z = 0;
  var peak = false;
  var logoScale = 0;
  logo();
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
      transform: "rotateZ(" + deg + "deg)"
    });
    $('.logo').css({
      transform: "scale(" + z + ")"
    });
  }, 10);
}

function logo() {
  var $logo = $('<img>').attr('src', 'images/batmanify.png').addClass('logo');
  $logo.css({
    position: 'fixed',
    top: 0,
    width: '100%',
    transform: "scale(0)"
  })
  $('html').append($logo);
}
