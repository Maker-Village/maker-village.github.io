//init
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav({
    edge: 'right',
    closeOnClick: true
  });
   Loaddata();
});

//scroll
$( window ).scroll(function() {
  //logo & navbar
  if($(document).scrollTop()>250){
    $('nav .brand-logo .top').removeClass("top");
    $('nav .brand-logo img').attr("src","./pic/LOGO-2.png");

    $('nav .nav-wrapper').addClass("alpha-5");
  }else{
    $('nav .brand-logo img').addClass("top");
    $('nav .brand-logo img').attr("src","./pic/LOGO.png");
    
    $('nav .nav-wrapper').removeClass("alpha-5");
  }
});

function Loaddata(){

  
  /*
  var StyleHead = '<li style="white-space: nowrap;"><a  style="display: block;" onclick="ChangeYear(' // href="javascript:ChangeYear(';
  var StyleMiddle1 = ')" touchstart="ChangeYear(';
  var StyleMiddle2 = ')"> ';
  var StyleFoot = '</a></li>';
  $(".y").empty(); //清空menu內容
  var str = "";
  for(var i =0; i < data.length; i++)
  {
    str = str + StyleHead + i + StyleMiddle1 + i + StyleMiddle2 + title_str(i) + StyleFoot;
  }
  $(".y").append(str);*/
}