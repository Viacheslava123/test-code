$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.textBlog').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 200);
  });
});

$('#demo').carousel();
