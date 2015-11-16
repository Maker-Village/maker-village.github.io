//init
$(document).ready(function(){
  LoadMember();
});

/**Load the member**/
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

