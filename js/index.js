var JD1=document.getElementById("JD");
var ST1=document.getElementById("ST");
var BU1=document.getElementById("BU");
var QK1=document.getElementById("QK");


var wode=document.getElementById("wo");     
var computer1=document.getElementById("computer");
var cnt=0;



JD1.onclick=function(){var JDS=0; 
  var numbera=Math.random();
  var numberb=Math.floor(3*numbera);
  wode.src="https://github.com/sumihuang/caiquan/blob/master/picture/jiandao.jpg?raw=true";
                       
 if(numberb==0){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/jiandao.jpg?raw=true";
      document.getElementById("SY").innerHTML="平了" ;  };
                       
  if(numberb==1){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/shitou.jpg?raw=true";
           document.getElementById("SY").innerHTML="输了" ;     };
           
  if(numberb==2){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/bu.jpg?raw=true";
      document.getElementById("SY").innerHTML="赢了" ;
        cnt=cnt+1;
     document.getElementById("CNT").innerHTML=cnt;}               
                 };


ST1.onclick=function(){var STS=1; 
  var numbera=Math.random();
  var numberb=Math.floor(3*numbera);
  wode.src="https://github.com/sumihuang/caiquan/blob/master/picture/shitou.jpg?raw=true";
                       
   if(numberb==0){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/jiandao.jpg?raw=true";
      document.getElementById("SY").innerHTML="赢了" ; 
                  cnt=cnt+1;
                  document.getElementById("CNT").innerHTML=cnt;};
                       
  if(numberb==1){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/shitou.jpg?raw=true";
           document.getElementById("SY").innerHTML="平了" ;     };
           
  if(numberb==2){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/bu.jpg?raw=true";
            document.getElementById("SY").innerHTML="输了" ;    }       
    };

BU1.onclick=function(){
  var BUS=2; 
  var numbera=Math.random();
  var numberb=Math.floor(3*numbera);
  wode.src="https://github.com/sumihuang/caiquan/blob/master/picture/bu.jpg?raw=true"
  
  
 if(numberb==0){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/jiandao.jpg?raw=true";
      document.getElementById("SY").innerHTML="输了" ;  };
                       
  if(numberb==1){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/shitou.jpg?raw=true";
           document.getElementById("SY").innerHTML="赢了" ; 
                 cnt=cnt+1;
                  document.getElementById("CNT").innerHTML=cnt;};
           
  if(numberb==2){computer1.src="https://github.com/sumihuang/caiquan/blob/master/picture/bu.jpg?raw=true";
            document.getElementById("SY").innerHTML="平了" ;    } 
  
 };


QK1.onclick=function(){ wode.src="";
   computer1.src="" ; 
   document.getElementById("SY").innerHTML="" ;  }