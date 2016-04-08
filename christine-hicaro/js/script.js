$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
      $("#EP-info").hide();
      $("#fhmp-info").hide();
      $("#CSSI-info").hide();
});

$("#google-logo-EP").click(function(){
    $("#EP-info").toggle();
})

$("#iowa-state-logo-fhmp").click(function(){
    $("#fhmp-info").toggle();
})

$("#google-logo-CSSI").click(function(){
    $("#CSSI-info").toggle();
})
