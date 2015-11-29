//init
$(document).ready(function(){  
  LoadDevice();
});


/**Load the device**/
function LoadDevice(){
  /*
  <div class="card col s12 m4 l4">
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">[title]<a class="right activator">詳細</a></span>
    </div>
    <div style="background: url('pic/device/[pic]')" class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="pic/trans_pic.png">
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">[title]<i class="material-icons right">close</i></span>
      <p>
        [content]
        [deviceInfo]
      </p>
    </div>
  </div>
  */

  var partA = '<div class="card col s12 m4 l4 "><div class="card-content"><span class="card-title activator grey-text text-darken-4">';
  var partB = '<a class="right activator">介紹</a></span></div><div ';
  var partC = ' class="card-image waves-effect waves-block waves-light"><img class="activator" src="pic/trans_pic.png"></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">';
  var partD = '<i class="material-icons right">close</i></span><p class="row">';
  var partE = '</p></div></div>';

  $(".device_c").empty(); //清空內容
  var str = "";

  for(var i =0; i < data.device.length; i++)
  { 
    str += partA +data.device[i].title + partB + devicePic(i)+ partC + data.device[i].title + partD + data.device[i].content.replace(/\n/g,"<br />")+'<br /><br />' +  deviceInfo(i)  + partE;
  }
  $(".device_c").append(str);

  return 0;
}
function devicePic(i){
  P = data.device[i].pic 
  if(P != '')
    return 'style="background: url(\'pic/device/' + P + '\')"';
  else
    return '';
}
function deviceInfo(i){
  I = data.device[i].info;

  if(I.length>0)
  {
   
   var info = '';
   
   for(var j =0; j < I.length; j++)
   {
      info += '<a class="red darken-1 waves-effect waves-light btn deviceBtn col s12 m12 l12" href="' + I[j].link +'" target="_blank">'+ I[j].name +'</a>';
   }
   return info;
  }
 else
    return '';
}
