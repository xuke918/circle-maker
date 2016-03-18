var $body = $('body');

$('html').on('keydown', function (e) {
  var $ball = $('<div>');

  $ball.addClass('ball');

  $theKey.html(e.keyCode);
  $('body').append($theKey);
});
