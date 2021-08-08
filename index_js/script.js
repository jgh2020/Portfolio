$(function(){

    var Is_Chart_closed = true;
    var Is_Web_closed = true;
    var Is_Wheel_closed = true;
    var Is_3D_closed = true;
    var Is_Nav_fixed = true;

    $('.togglebtn').click(function(){
        $('.navSecondul').toggleClass('active');
    });

    $('.navClosebtn').click(function(){
        $('nav').css({'position':'absolute'});
        Is_Nav_fixed = false;
    });

    $('.moveTotop, .gototop').click(function() {
        $(window).scrollTop(0);
    });

    $('.moveTochart').click(function() {
        $(window).scrollTop(Math.ceil($('#moveFirstpoint').offset().top));
    });

    $('.moveToweb').click(function() {
        if (Is_Chart_closed){ showGraph(); }
        $(window).scrollTop(Math.ceil($('#moveSecondpoint').offset().top));
    });

    $('.moveTowheel').click(function() {
        if (Is_Chart_closed){ showGraph(); }
        $(window).scrollTop(Math.ceil($('#moveThirdpoint').offset().top));
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() >= Math.ceil($('#chartPage').offset().top)-45) {
            $('nav>ul li, .togglebtn').css({'background-color':'transparent'});
            $('.navClosebtn').css({'display':'block'});
        }else{
            $('nav>ul li, .togglebtn').css({'background-color':'black'});
            $('.navClosebtn').css({'display':'none'});
            if (!Is_Nav_fixed){ 
                $('nav').css({'position':'fixed'});
                Is_Nav_fixed =true;
            }
        }

        if ($(this).scrollTop() >= Math.ceil($('#chartPage').offset().top)-45 && $(this).scrollTop() < Math.ceil($('#webPages').offset().top)) {
            $('nav').addClass('navColor1');
            $('.navSecondul li:nth-child(1)').css({'border':'2px solid white'});
        } else {
            $('nav').removeClass('navColor1');
            $('.navSecondul li:nth-child(1)').css({'border':'none'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#webPages').offset().top) && $(this).scrollTop() < Math.ceil($('#summaryWheel').offset().top)-45) {
            $('.navSecondul li:nth-child(2)').css({'border': '2px solid white'});
        } else {
            $('.navSecondul li:nth-child(2)').css({'border':'none'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#summaryWheel').offset().top)-45 && $(this).scrollTop() < Math.ceil($('footer').offset().top)) {
            $('nav').addClass('navColor2');
            $('.navSecondul li:nth-child(3)').css({'border':'2px solid white'});
        } else {
            $('nav').removeClass('navColor2');
            $('.navSecondul li:nth-child(3)').css({'border':'none'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#webPages').offset().top)-300) {
            if (Is_Web_closed){
                webPagesTurn();
                Is_Web_closed = false;
            }           
        }

        $("main").on('mousewheel',function(e){
            var wheel = e.originalEvent.wheelDelta;
            if(wheel<0){
                $('#webPages').css({'background-position':'left 1% bottom 10%'});
            } else if(wheel>0) {
                $('#webPages').css({'background-position':'left 1% bottom 90%'});
            }
        });

        if ($(this).scrollTop() >= Math.ceil($('#summaryWheel').offset().top)-80) {
            if (Is_Wheel_closed){
                summaryWheel();
                Is_Wheel_closed = false;
            }
            if (Is_3D_closed){
                rotation3d();
                Is_3D_closed = false;
            }
        }
    });

    // chart =================================================================================================

    $(window).on('scroll', function(){
        if ($(this).scrollTop() >= Math.ceil($('#chartPage').offset().top)-300) {
            if (Is_Chart_closed){
                showGraph();
            }
        }  
    });    

    function showGraph() {
        let chartOne = document.getElementById('chartOne').getContext('2d');
        let barChart = new Chart(chartOne, {
            type : 'bar', //pie, line, doughnut, polarArea
            data : {
                labels : ['HTML5', 'CSS3/SCSS', 'JavaScript', 'jQuery', 'React JS', 'Bootstrap'],
                datasets :[{
                    label : 'Comprehension of frontend languages (%)',
                    data : [100, 100, 90, 90, 88, 88],
                    backgroundColor:['lightskyblue'],
                    borderWidth:1,
                    borderColor:'white',
                    hoverBorderWidth:2,
                    borderRadius:5
                }]
            }
        });

        let chartTwo = document.getElementById('chartTwo').getContext('2d');
        let lineChart = new Chart(chartTwo, {
            type : 'line', //pie, line, doughnut, polarArea
            data : {
                labels : ['PHP', 'Java', 'Python', 'Data Base', 'REST API', 'JSON'],
                datasets :[{
                    label : 'Comprehension of backend languages (%)',
                    data : [90, 90, 85, 95, 80, 80],
                    backgroundColor:['royalblue'],
                    borderWidth:1,
                    borderColor:'black',
                    hoverBorderWidth:2,
                    borderRadius:5
                }]
            }
        });

        let chartThree_first = document.getElementById('chartThree_first').getContext('2d');
        let doughnutChart1 = new Chart(chartThree_first, {
            type : 'doughnut', //pie, line, doughnut, polarArea
            data : {
                labels : ['Android: 85%'],
                datasets :[{
                    data : [85, 15],
                    backgroundColor:['green','white'],
                    borderWidth:1,
                    borderColor:'white',
                    hoverBorderWidth:2,
                    borderRadius:5
                }]
            }
        });

        let chartThree_second = document.getElementById('chartThree_second').getContext('2d');
        let doughnutChart2 = new Chart(chartThree_second, {
            type : 'doughnut', //pie, line, doughnut, polarArea
            data : {
                labels : ['Linux: 85%'],
                datasets :[{
                    data : [85, 15],
                    backgroundColor:['yellowgreen','white'],
                    borderWidth:1,
                    borderColor:'white',
                    hoverBorderWidth:2,
                    borderRadius:5
                }]
            }
        });

        let chartThree_third = document.getElementById('chartThree_third').getContext('2d');
        let doughnutChart3 = new Chart(chartThree_third, {
            type : 'doughnut', //pie, line, doughnut, polarArea
            data : {
                labels : ['GitHub: 90%'],
                datasets :[{
                    data : [90, 10],
                    backgroundColor:['yellowgreen','white'],
                    borderWidth:1,
                    borderColor:'white',
                    hoverBorderWidth:2,
                    borderRadius:5
                }]
            }
        });

        let chartThree_forth = document.getElementById('chartThree_forth').getContext('2d');
        let doughnutChart4 = new Chart(chartThree_forth, {
            type : 'doughnut', //pie, line, doughnut, polarArea
            data : {
                labels : ['Wordpress: 80%'],
                datasets :[{
                    data : [80, 20],
                    backgroundColor:['green','white'],
                    borderWidth:1,
                    borderColor:'white',
                    hoverBorderWidth:2,
                    borderRadius:5
                }]
            }
        });
        Is_Chart_closed = false;
    }

    $('#frontskill, #backskill, #plusskill').click(function(){
        var indexnum = $('#chartPage section div').index(this);
        var jumpingImg = null;
        if (indexnum == 0){ jumpingImg = $('.frontImg'); }
        else if (indexnum == 2) { jumpingImg = $('.backImg'); }
        else if (indexnum == 4) { jumpingImg = $('.plusImg'); }

        $('#chartSpider').css({'top':'-200px', 'animation':'none','visibility':'collapse' });
        $(this).stop().animate({'margin-top':'-30px', 'margin-bottom':'60px'}, 400, function(){
            $(this).stop().animate({'margin-top':'15px', 'margin-bottom':'15px'}, 300, 'easeOutBounce');
            setTimeout(() => {
                for(var i=0; i<6; i++){
                    jumpingImg.eq(i).stop().animate({'margin-top':'-'+((i+1)%3*20+70)+'px' }, 250, 'easeOutCubic', function(){
                    $(this).stop().animate({'margin-top':'12px'}, 400, 'easeOutBounce')});
                    jumpingImg.children('img').css({'transform':'scale(1.8)'});
                    jumpingImg.children('span').css({'visibility':'visible'});
                }
            }, 150);
        });
        setTimeout(() => {
            jumpingImg.children('img').css({'transform':'scale(1)'});
            jumpingImg.children('span').css({'visibility':'hidden'});
        }, 2500);
    });

    // webpages =================================================================================================

    function webPagesTurn() {
        $('#webPages section>div>div').css({'margin-top':'0'});
        $('#webPages section:nth-child(3)>div>div').css({'margin-top':'-168px', 'backdrop-filter':'blur(10px)'});
        $('#webPages section:nth-child(3)>div>div p').css({'color':'white'});
        $('#webPages section:nth-child(3)>div i').addClass('showinfo');
        $('#webPages section button:nth-child(1)').css({'text-decoration':'underline'});
    }

    $('#webPages section button').click(function(){
        var num = $('#webPages section button').index(this);
        if (num==0){
            $('#webPages section>div').css({'opacity':'1'});
            $('#webPages section button').css({'text-decoration':'none'});
            $('#webPages section button:nth-child(1)').css({'text-decoration':'underline'});

        }else if (num==1){
            $('#webPages section>div').css({'opacity':'1'});
            $('#webPages .backend').css({'opacity':'0.2'});
            $('#webPages section button').css({'text-decoration':'none'});
            $('#webPages section button:nth-child(2)').css({'text-decoration':'underline'});

        }else if (num==2){
            $('#webPages section>div').css({'opacity':'0.2'});
            $('#webPages .backend').css({'opacity':'1'});
            $('#webPages section button').css({'text-decoration':'none'});
            $('#webPages section button:nth-child(3)').css({'text-decoration':'underline'});
        }

    $('#webSpider1').css({'top':'132px','visibility':'collapse', 'animation':'none' });
    });

    $('#webPages section>div i').click(function(){
        $(this).toggleClass('showinfo');

        if ($(this).hasClass('showinfo')){
            $(this).siblings('div').css({'margin-top':'-168px'});
            // $(this).siblings('div').stop().animate({'margin-top':'-168px'}, 5000, 'easeOutBounce');
            $(this).siblings('div').css({'backdrop-filter':'blur(10px)'});
            $(this).siblings('div').children('p').css({'color':'white'});

        }else {
            $(this).siblings('div').css({'margin-top':'0px'});
            // $(this).siblings('div').stop().animate({'margin-top':'0'}, 5000, 'easeOutBounce');
            $(this).siblings('div').css({'backdrop-filter':'none'});
            $(this).siblings('div').children('p').css({'color':'rgba(255, 255, 255, 0.6)'});
        }
        $('#webSpider2').css({'right':'-50px','visibility':'collapse', 'animation':'none' });
        $('#webPages section:nth-child(3)>div i:nth-child(2)').css({'animation':'none'});
        $('#webPages section:nth-child(3)>div i:nth-child(2)').css({'transform':'scale(1)'});
    });

    // summary =================================================================================================
    
    function summaryWheel() {
        for(var i = 0; i<12; i++){
            $('.cards').eq(i).css({'transform':'translateX(-50%) rotate('+(i*30)+'deg)'});
        } 
    }

    function rotation3d() {
        $('#summaryCards').css({'transform':'translate(0)'});
        $('#summaryCards h5').css({'transform':'translate(0)','background-color':'white'});
    }

    $('.dial span').click(function(){

        $(this).toggleClass('try3d');
        
        if ($(this).hasClass('try3d')){
            $(this).css({'transform':'translateX(-50%) translateY(-50%) perspective(100px) rotateY(30deg)'});
            $('#summaryCards').css({'transform':'perspective(1500px) rotateY(90deg) rotate(2deg)','padding':'50px'});
            $('#summaryCards h5').css({'transform':'perspective(1000px) rotateY(-90deg)', 'background-color':'rgba(0, 0, 0, 0.1)'});
            $('#summaryCards h5').eq(0).css({'color':'rgba(255, 255, 255, 0.9)'});
            $(this).text('3D').append('<br>ON');
        }else {
            $(this).css({'transform':'translateX(-50%) translateY(-50%) perspective(100px) rotateY(-30deg)'});
            $('#summaryCards').css({'transform':'translate(0)','padding':'0 50px 100px 50px'});
            $('#summaryCards h5').css({'transform':'translate(0)', 'background-color':'white'});
            $('#summaryCards h5').eq(0).css({'color':'rgb(33, 37, 41)'}); 
            $(this).text('3D').append('<br>OFF');
        }
        $('#wheelSpider').css({'left':'-400px', 'visibility':'collapse', 'animation':'none' });
    });

    $('.cards').click(function(){

        $('#wheelSpider').css({'left':'-400px', 'visibility':'collapse', 'animation':'none' });

        var textOne   = "1. Algonquin college computer programming ";
        var textTwo   = "2. Three (+2) great webpages from scratch ";
        var textThree = "3. Skilled at web programs (Front + back) ";
        var textFour  = "4. Android, Linux, GitHub, Wordpress, Zoom ";
        var textFive  = "5. Team player, problem solver, meticulous "
        var textSix   = "6. Hard worker, responsibility, trilingual "; 

        var spanOne = '<span class="badge bg-primary">with Honour</span>';
        var spanTwo = '<span class="badge bg-info">Scroll up</span>';
        var spanThree = '<span class="badge bg-success">A+</span>';
        var spanFour = '<span class="badge bg-danger">and more</span>';
        var spanFive = '<span class="badge bg-warning">Great</span>';
        var spanSix = '<span class="badge bg-secondary">Wow</span>';

        var dialindex = $('.cards').index(this)%6;
        
        for(var i = 0; i<12; i++){
            $('.cards').eq(i).css({'transform':'translateX(-50%) rotate('+((i*30)+dialindex*(-30))+'deg)'});
        }

        if (dialindex==0){
            $('#summaryCards h5').eq(0).text(textOne).append(spanOne);
            $('#summaryCards h5').eq(1).text(textTwo).append(spanTwo);
            $('#summaryCards h5').eq(2).text(textThree).append(spanThree);
            $('#summaryCards h5').eq(3).text(textFour).append(spanFour);
            $('#summaryCards h5').eq(4).text(textFive).append(spanFive);
            $('#summaryCards h5').eq(5).text(textSix).append(spanSix);
            $('.cards').css({'background-color':'rgba(0, 0, 0, 0.4)'});
            $('#summaryWheel form button').attr('class', 'btn btn-secondary');
        }else if(dialindex==1){
            $('#summaryCards h5').text(textOne).append(spanOne);
            $('#summaryWheel form button').attr('class', 'btn btn-primary');
            $('.cards:eq(1), .cards:eq(7)').css({'background-color':'rgb(13, 110, 253)'});
        }else if(dialindex==2){
            $('#summaryCards h5').text(textTwo).append(spanTwo);
            $('#summaryWheel form button').attr('class', 'btn btn-info');
            $('.cards:eq(2), .cards:eq(8)').css({'background-color':'rgb(13, 202, 240)'});
        }else if(dialindex==3){
            $('#summaryCards h5').text(textThree).append(spanThree);
            $('#summaryWheel form button').attr('class', 'btn btn-success');
            $('.cards:eq(3), .cards:eq(9)').css({'background-color':'rgb(25, 135, 84)'});
        }else if(dialindex==4){
            $('#summaryCards h5').text(textFour).append(spanFour);
            $('#summaryWheel form button').attr('class', 'btn btn-danger');
            $('.cards:eq(4), .cards:eq(10)').css({'background-color':'rgb(220, 53, 69)'});
        }else if(dialindex==5){
            $('#summaryCards h5').text(textFive).append(spanFive);
            $('#summaryWheel form button').attr('class', 'btn btn-warning');
            $('.cards:eq(5), .cards:eq(11)').css({'background-color':'rgb(255, 193, 7)'});
        }
    });

    var follower = true;

    $('.cube>div:nth-child(1), #mouseFollower').mousemove(function(event){ 
        if(follower){
            var x_coordinate = event.pageX - 10;
            var y_coordinate = event.pageY + 75; 
            $('#mouseFollower').css({'visibility':'visible'});
            $('#mouseFollower').css({'left':''+x_coordinate+'px'}); 
            $('#mouseFollower').css({'top':''+y_coordinate+'px'}); 
            $('.cube>div').css({'cursor':'help'});
        }
    }).mouseout(function(){ 
        $('#mouseFollower').css({'visibility':'collapse'});
        $('#mouseFollower').css({'top':'50vh', 'left':'53vw', 'visibility':'collapse'});
    });

    var rotationDistance = 0;
    var screenWidth = $(window).width();
    if(screenWidth >=992) {
        rotationDistance = -20;
    }else rotationDistance = -25;

    var firstCubeface = 1;
    var secondCubeface = 1;
    var thirdCubeface = 1;
    var forthCubeface = 1;

    $(window).resize(function() { 
        screenWidth = $(window).width();
        if(screenWidth >=992) {
            rotationDistance = -20;
        }else {
            rotationDistance = -25;
        }   
        $('#landPage section:nth-child(1) .cube').css({'transform':'translateZ('+rotationDistance+'vw) rotateY('+((firstCubeface-1)*(-90))+'deg)'});
        $('#landPage section:nth-child(2) .cube').css({'transform':'translateZ('+rotationDistance+'vw) rotateY('+((secondCubeface-1)*(-90))+'deg)'});
        $('#landPage section:nth-child(4) .cube').css({'transform':'translateZ('+rotationDistance+'vw) rotateY('+((thirdCubeface-1)*(-90))+'deg)'});
        $('#landPage section:nth-child(5) .cube').css({'transform':'translateZ('+rotationDistance+'vw) rotateY('+((forthCubeface-1)*(-90))+'deg)'});
    });

    $('.cube>div').click(function(){
        var Index = $('.cube>div').index(this);
        var rotationIndex = (Index+1)%4;

        $('#mouseFollower').css({'top':'50vh', 'left':'53vw', 'visibility':'collapse'});
        $(this).closest('.cube').css({'transform':'translateZ('+rotationDistance+'vw) rotateY('+((-90)*rotationIndex)+'deg)'});
        
        $('.cube>div').css({'cursor':'pointer'});
        follower = false;

        if (Index < 4){ 
            firstCubeface = (firstCubeface%4)+1;
        }else if (Index >= 4 && Index < 8){
            secondCubeface = (secondCubeface%4)+1;
        }else if (Index >= 8 && Index < 12){
            thirdCubeface = (thirdCubeface%4)+1;
        }else if (Index >= 12 && Index < 16){
            forthCubeface = (forthCubeface%4)+1;
        }
        colorChange();
    });

    function colorChange() {
        if (firstCubeface==1 && secondCubeface==1 && thirdCubeface==1 && forthCubeface==1){
            $('#landPage section button a').css({'color':'rgb(51, 133, 255)'});
        }else if(firstCubeface==2 && secondCubeface==2 && thirdCubeface==2 && forthCubeface==2){
            $('#landPage section button a').css({'color':'orange'});
        }else if(firstCubeface==3 && secondCubeface==3 && thirdCubeface==3 && forthCubeface==3){
            $('#landPage section button a').css({'color':'rgb(255, 213, 144)'});
        }else if(firstCubeface==4 && secondCubeface==4 && thirdCubeface==4 && forthCubeface==4){
            $('#landPage section button a').css({'color':'rgb(100, 100, 255)'});
        }else{
            $('#landPage section button a').css({'color':'lightgray'});
        }
    }

}); // the end
