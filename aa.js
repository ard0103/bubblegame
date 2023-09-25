function makebubble(){
var clutter="";
for (var i=1;i<=168;i++){
          var rn=Math.floor(Math.random()*10);
          clutter+=`<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter ;
}
var timer=60;
var hitrn;


function runtimer(){
   
     var timerint=setInterval(function(){
        if(timer>0){
     timer--;
     document.querySelector("#timervalue").textContent=timer;
    }
    else{
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over<h1>`;
        clearInterval(timerint);
    }
    },1000);
}
function gethit(){
     hitrn=Math.floor(Math.random()*10);
         document.querySelector("#hitval").textContent=hitrn;
        }

        var score=0;
        function incsocre(){
            score+=10;
          document.querySelector("#scorre").textContent=score;
        }
        document.querySelector("#pbtm").addEventListener("click",function(dets){
            var clickdnumb=Number(dets.target.textContent);
            if(clickdnumb==hitrn){
                incsocre();
                gethit();
                makebubble();
            }
        })
    runtimer();
    makebubble();
    gethit();
