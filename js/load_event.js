//init
$(document).ready(function(){  
  LoadEvent();
});


/**Load the event**/
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
        subevent += eventSign(i,j) + eventRecord(i,j) + '</p>';
    }
    str += '<div class="card col s12 m6 l6">' + title + pic + '<div class="card-reveal">'+ contentTitle + subevent +'</div></div>';
  }

  $(".event_c").append(str);

  return 0;
}

function eventTime(i,j){
  T = data.event[i].subevent[j].time;

  if(T != "")
    return '活動時間: ' + T.replace(/\n/g,"<br />") +'<br />' ;
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
    return '<a class="red darken-1 waves-effect waves-light btn eventBtn" href="' + S +'" target="_blank">我要報名</a>';
  else
    return '';
}

function eventRecord(i,j){
  R = data.event[i].subevent[j].record;

  if(R != "")
   return '<a class="red darken-1 waves-effect waves-light btn eventBtn" href="' + R +'" target="_blank">活動紀錄</a>';
 else
    return '';
}
