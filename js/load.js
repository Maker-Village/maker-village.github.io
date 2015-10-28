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

  var cardhead = '<div class="card member col l12 m12 s12 row">';
  var prohead ='<div class="profile col l10 m10 s12">'
  var image = ' <img src="'+ imgsrc +'" class="col l2 m2 s12"> </img>'
  var end ='</div>'
  
 
  $(".y").empty(); //清空menu內容
  var str = "";
  for(var i =0; i < data.length; i++)
  {
    str = str + StyleHead + i + StyleMiddle1 + i + StyleMiddle2 + title_str(i) + StyleFoot;
  }
  $(".y").append(str);
}