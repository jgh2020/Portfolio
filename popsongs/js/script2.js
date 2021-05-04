function time(){

    var time = new Date();
    var hour = time.getHours();
        
    var min = time.getMinutes();
        if (min<10) min = "0"+min;
    var second = time.getSeconds();
        if (second<10) second = "0"+second;
    
    if (hour < 12){
        if (hour<10) hour = "0"+hour;
        document.getElementById("clock").innerHTML="AM "+hour+":"+min+":"+second;
    } else {
        if (hour>12) hour=hour-12;
        if (hour<10) hour = "0"+hour;
        document.getElementById("clock").innerHTML="PM "+hour+":"+min+":"+second;
    }
    if (second == 15 || second == 45){ 
    document.getElementById("test").style.textShadow="0 0 1em white, 0 0 2em white, 0 0 3em white, 0 0 4em white, 0 0 5em white, 0 0 6em white";
    } else document.getElementById("test").style.textShadow="none";
    document.getElementById("test").style.transform="rotate("+(second*6+(-90))+"deg)";
    setInterval("time()",1000);
}

function grayscreen(){

    if (document.getElementById("screen").className=="grayoff"){
        document.getElementById("screen").className="grayon";
        document.getElementById("hover2").style.border="0.2vw solid blue";
        document.getElementById("hover3").style.border="0.2vw solid blue";
        document.getElementById("hover4").style.border="0.2vw solid blue";
        document.getElementById("hover5").style.border="0.2vw solid blue";
        document.getElementById("click0").style.border="0.2vw solid red";
        document.getElementById("click1").style.border="0.2vw solid red";
        document.getElementById("click2").style.border="0.2vw solid red";
        document.getElementById("click3").style.border="0.2vw solid red";
        document.getElementById("click4").style.border="0.2vw solid red";
        document.getElementById("click5").style.border="0.2vw solid red";
        document.getElementById("click6").style.border="0.2vw solid red";
        document.getElementById("click7").style.border="0.2vw solid red";
        document.getElementById("test").style.border="0.2vw solid yellow";
        document.getElementById("last").style.visibility="visible";

    } else {document.getElementById("screen").className="grayoff";
        
        document.getElementById("hover2").style.border="unset";
        document.getElementById("hover3").style.border="unset";
        document.getElementById("hover4").style.border="unset";
        document.getElementById("hover5").style.border="unset";
        document.getElementById("click0").style.border="0.2vw solid white";
        document.getElementById("click1").style.border="unset";
        document.getElementById("click2").style.border="unset";
        document.getElementById("click3").style.border="unset";
        document.getElementById("click4").style.border="unset";
        document.getElementById("click5").style.border="unset";
        document.getElementById("click6").style.border="unset";
        document.getElementById("click7").style.border="unset";
        document.getElementById("test").style.border="unset";
        document.getElementById("last").style.visibility="hidden";
    }
}

function utubeon(){
    var ut = document.querySelector('.utplayer');
    var arrow = document.querySelector('.moveback');
    ut.style.transition = "1000ms";
    ut.style.transform = "translateX(100%)";
    arrow.style.transition = "1300ms";
    arrow.style.transform = "translateX(1170%)";
} 

function moveback(){
    var ut = document.querySelector('.utplayer');
    var arrow = document.querySelector('.moveback');
    ut.style.transition = "1000ms";
    ut.style.transform = "translateX(-100%)";
    arrow.style.transition = "1300ms";
    arrow.style.transform = "translateX(-1170%)";
} 

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;