$(function() {
  $('a[href*=#]').on('click', function(e) {
    console.log("hello")
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
