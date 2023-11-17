var hour = document.querySelector(".hc");
var minutes =document.querySelector(".mc");
var second =document.querySelector(".scc");
var ap =document.querySelector(".ap");

function time(){
var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
h= h<10 ? "0" +h : h ;
 m  = m < 10 ? "0" + m: m;
 s = s<10? "0"  + s : s;

 if(h>=12){
   
    ap.innerHTML='PM';
    }
  if (h>12){
    h = h-12;
    h = "0"+h;
  }
    
 
hour.innerHTML= h;
minutes.innerHTML=m;
second.textContent = s ;


setTimeout(()=>{
  time();
},1000);

};
time();
