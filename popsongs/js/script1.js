    const frame = document.querySelector('.frame'); 
    const line = document.querySelector('.line');   
    const pics = document.querySelectorAll('.pic'); 
    const nextbtn = document.querySelector('.next'); 
    const backbtn = document.querySelector('.back'); 
    const container = document.querySelector('.container'); 
    const singername = document.querySelector('.singername');

    const piclen = pics.length; 
    const picwidth = 15; 
    const speed = 1000; 
    line.style.width = picwidth * (piclen) + "vw";
    let curIndex = 1; 

        function gonext(){
        if (curIndex <= piclen - 2) { // 1 2 3 4
            curIndex++;
            line.style.transition = speed + "ms";
            line.style.transform = "translateX("+(-1)*(picwidth * (curIndex-1)) + "vw)";
            frame.style.transition = speed + "ms";
            
                if (curIndex == piclen - 1){ // 5
                    setTimeout(function() {
                        line.style.transition = "0ms";
                        line.style.transform = "translateX(0)";
                    }, speed);
                    curIndex=1;
                }    
        }
        document.getElementById(curIndex).checked = true;
            change(curIndex);
        }

        function moveto(num){
            curIndex = num-1;
            gonext();
            curIndex = num;
        }

        function change(num){
            singername.style.transition = "1s";
            singername.style.transform = "rotateX(360deg)";

            if (num == 1){
                singername.innerHTML  = "Coldplay";
                container.style.backgroundImage = "url(./img/coldplay.jpg)";
            }else if(num == 2){
                singername.innerHTML  = "The Weeknd";
                container.style.backgroundImage = "url(./img/weeknd.png)";
            }else if(num == 3){
                singername.innerHTML  = "BTS";
                container.style.backgroundImage = "url(./img/bts.png)";

            }else if(num == 4){
                singername.innerHTML  = "The Alan Parsons Project";
                container.style.backgroundImage = "url(./img/days.jpg)";
            }
            setTimeout(function(){
                singername.style.transition = "0s";
                singername.style.transform = "rotateX(0deg)";
                singername.style.textShadow = "0 0 1vh white, 0 0 2vh white, 0 0 5vh white, 0 0 7vh gold, 0 0 9vh gold, 0 0 11vh gold";
            }, 1000);

            setTimeout(function(){
                singername.style.textShadow = "unset";
            }, 1400);
        }

    backbtn.addEventListener('click', function() {
        curIndex--;
        if (curIndex >= 0) { // 1 2 3 4 
            line.style.transition = speed + "ms";
            line.style.transform = "translateX("+(-1)*(picwidth * (curIndex-1)) + "vw)";
            
                if (curIndex == 0){ // 0
                    setTimeout(function() {
                        line.style.transition = "0ms";
                        line.style.transform = "translateX("+(-1)*(picwidth*(piclen-3)) + "vw)";
                    }, speed);
                    curIndex=4;
                }
        }
        document.getElementById(curIndex).checked = true;
        change(curIndex);
    });

    document.getElementById(22).style.maxHeight = "0vh";
    document.getElementById(23).style.maxHeight = "0vh";

    function movedown(num){

        var lyric = document.getElementById(num);
        var title = document.getElementById(num+10);

        if (lyric.style.maxHeight == "0vh"){
            title.style.color = "burlywood";
            lyric.style.maxHeight = "50vh";
        } else {
            title.style.color = "silver";
            lyric.style.maxHeight = "0vh";
        }
    }

    var onScrollHandler = function(){
        const header2 = document.querySelectorAll('.header2 a');
        var location = document.documentElement.scrollTop;
            if (location < 480){
                for(var i=0; i<header2.length; i++){
                    header2[i].style.color = "goldenrod";
                }
            } else {
                for(var j=0; j<header2.length; j++){
                    header2[j].style.color = "navy";
                }
            }
    };

    document.addEventListener("scroll", onScrollHandler);    