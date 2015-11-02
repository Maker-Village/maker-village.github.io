//init
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav({
    edge: 'right',
    closeOnClick: true
  });
  fixfpic();
  LoadMember();


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

function fixfpic(){
  var h = window.screen.availHeight;
  var top = (h - $('#top_word').height())/2 - $(".navbar-fixed").height();
  var bottom = (h - $('#top_word').height())/2 - $(".navbar-fixed").height();
  $('#top_word').css("margin-top",top + "px");
  $('#top_word').css("margin-bottom",bottom + "px");

}
/*Load the event*/
function LoadEvent(){
  /*
  <div class="card col s12 m6 l6">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="pic/event/2015.10.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">[title]<i class="material-icons right">more_vert</i></span>
      <h5><a class ="activator" >詳細資訊</a></h5>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">[title]<i class="material-icons right">close</i></span>
      <h5>[subevent.title]</h5>
      <p>
        活動時間: [time]<br />
        地點: [place]<br />
        <a href="[record]">活動紀錄</a>
      </p>
    </div>
  </div>
  */

  var cardH = '<div class="card col s12 m6 l6">';
  var contentH = '<div class="card-content"><span class="card-title activator grey-text text-darken-4">';
  var contentE = '<i class="material-icons right">more_vert</i></span><h5><a class ="activator" >詳細資訊</a></h5>';
  var revealH = ' <div class="card-reveal">';
  var revealTH = '<span class="card-title grey-text text-darken-4">';
  var revealTH = '<i class="material-icons right">close</i></span>';




}
function ecentLink(i,j){

}

/*Load the member*/
function LoadMember(){
  /* 格式
    <div class="card col l12 m12 s12 row">
      <img src="pic/head/[head]" class="col l2 m2 s12"> </img> 
      <div class="profile col l10 m10 s12">
        <p> [name] </p>
        <p> [post] </p>
        [profile]
      </div>
    </div>
  */  
  var cardhead = '<div class="card member col l12 m12 s12 row">';
  var prohead ='<div class="profile col l10 m10 s12">'
  var image0 = ' <img src="'
  var image1 = '" class="col l2 m2 s12"></img>'
  var p = '<p>'
  var pe = '</p>'
  var end ='</div>'
 
  $(".member_c").empty(); //清空menu內容
  var str = "";

  for(var i =0; i < data.member.length; i++)
  { 
    var image = image0 + headsrc(i) +image1;
    var name = p + data.member[i].name + pe;
    var post = p + data.member[i].post + pe;
    var profile = data.member[i].profile.replace(/\n/g,"<br />") ;
    var as = cardhead+ image + prohead + name + post + profile + end + end;
    //console.log(as);
    str = str + as;
  }
  $(".member_c").append(str);

  return 0;
}

function headsrc(i){
  if(data.member[i].head != "")
    return 'pic/head/' + data.member[i].head ;
  else
    return "pic/no-pic.jpg"
}

