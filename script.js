var score=0;
var timer=10;
var hit="";

function setnshowscore(newscore){
    score=newscore;
    document.querySelector("#score").textContent=score;     
};

function setnshowtimer(){
    document.querySelector("#timer").textContent=timer;
    timer--;
    if(timer>=0){
        setTimeout(setnshowtimer,1000);
    }
    else{
        document.querySelector("#btm").innerHTML= `<h1>Game Over !</h1>
        <h3>Score is : ${Number(score)}</h3> `;

    }
};

function setNshowhit(){
    
        hitter=Math.floor(Math.random()*10)
       var b= document.querySelector("#hit").textContent=hitter
    
}


function makebubble(){
    var clutter="";
for(i=0;i<75;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rn}</div>`
};
document.querySelector("#btm").innerHTML=clutter;
};

document.querySelector("#btm").addEventListener("click",function(dets){
    if(Number(dets.target.textContent)===hitter){
     document.querySelector("#score").textContent=score
     ans =Number(setnshowscore(score+=10))
     setNshowhit();
     makebubble();
    
    }
    else{
        alert("You are entering wrong key")
    }
    })

makebubble();
setnshowscore(score);
setnshowtimer();
setNshowhit();
mainengine();
