var $body = $('body');

$('html').on('keydown', function (e) {
  var $ball = $('<div>');

  $ball.addClass('ball');
  $('body').append($ball);

  $ball.css('left', Math.random() * 700);
  $ball.css('top', Math.random() * 400);
});
