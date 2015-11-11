//init
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav({
    edge: 'right',
    closeOnClick: true
  });
  fixfpic();
  LoadMember();
  LoadEvent();

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
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">[title]<a class="right activator">More</a></span>
    </div>
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="pic/event/[pic]">
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">[title]<i class="material-icons right">close</i></span>
      <div class="divider"></div>
      <h5>[subevent.title]</h5>
      <p>
        <span class="event-bold">
          [eventTime]
          [eventPlace]
        </span>
        [content]
        [eventSign]
        [eventRecord]
      </p>
      
    </div>
  </div>

  */

  $(".event_c").empty(); //清空menu內容
  var str = "";
  
  for(var i =0; i < data.event.length; i++)
  { 
    
    var title = '<div class="card-content"><span class="card-title activator grey-text text-darken-4">' + data.event[i].title + '<a class="right activator">More</a></span></div>';
    var pic = '<div class="card-image waves-effect waves-block waves-light"><img class="activator" src="pic/event/' + data.event[i].pic +'"></div>';
    var contentTitle = '<span class="card-title grey-text text-darken-4">'+ data.event[i].title +'<i class="material-icons right">close</i></span>';
    var divide = '<div class="divider"></div>';
    var subevent = '';
    for(var j =0; j < data.event[i].subevent.length; j++)
    {
        subevent += divide;
        subevent += '<h5>'+ data.event[i].subevent[j].title +'</h5>';
        subevent += '<p><span class="event-bold">' + eventTime(i,j) + eventPlace(i,j) + '</span>';
        subevent += data.event[i].subevent[j].content.replace(/\n/g,"<br />") + '</br>' ;
        subevent += eventSign(i,j) + '<br />' + eventRecord(i,j) + '</p>';
    }
    str += '<div class="card col s12 m6 l6">' + title + pic + '<div class="card-reveal">'+ contentTitle + subevent +'</div></div>';
  }

  $(".event_c").append(str);

  return 0;
}

function eventTime(i,j){
  T = data.event[i].subevent[j].time;

  if(T != "")
    return '活動時間: ' + T +'<br />' ;
  else
    return '';
}

function eventPlace(i,j){
  P = data.event[i].subevent[j].place;

  if(P != "")
    return '活動地點: ' + P +'<br />' ;
  else
    return '';
}

function eventSign(i,j){
  S = data.event[i].subevent[j].signup;

  if(S != "")
    return '<a href="' + S +'">我要報名</a>';
  else
    return '';
}

function eventRecord(i,j){
  R = data.event[i].subevent[j].record;

  if(R != "")
   return '<a href="' + R +'">活動紀錄</a>';
 else
    return '';
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

