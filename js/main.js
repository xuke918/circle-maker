$('html').on('keydown'), function(e) {
  var $theKey = $('strong');
  $theKey.html(e.keyCode);
  $('body').append($theKey);
});
