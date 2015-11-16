//init
$(document).ready(function(){
  fixfpic();
});

//scroll
$( window ).scroll(function() {
  //logo & navbar
  if($(document).scrollTop()>250){
    $('nav .brand-logo .top').removeClass("top");
    $('nav .brand-logo img').attr("src","./pic/LOGO-2.png");

    $('nav .nav-wrapper').addClass("darken-1");
  }else{
    $('nav .brand-logo img').addClass("top");
    $('nav .brand-logo img').attr("src","./pic/LOGO.png");
    
    $('nav .nav-wrapper').removeClass("darken-1");
  }
});

function fixfpic(){
  var h = window.screen.availHeight;
  var top = (h - $('#top_word').height())/2 - $(".navbar-fixed").height();
  var bottom = (h - $('#top_word').height())/2 - $(".navbar-fixed").height();
  $('#top_word').css("margin-top",top + "px");
  $('#top_word').css("margin-bottom",bottom + "px");

}