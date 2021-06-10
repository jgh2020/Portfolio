$(function(){

    var scroll_Webpage = true;
    var scroll_Wheel = true;
    var scroll_3D = true;

    $('.togglebtn').click(function(){
        $('.navSecondul').toggleClass('active');
    });

    $(window).scroll(function() {


        if ($(this).scrollTop() >= Math.ceil($('#chartPage').offset().top)-45) {
            $('.navSecondul li').css({'background-color':'transparent'});
        }else{
            $('.navSecondul li').css({'background-color':'black'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#chartPage').offset().top)-45 && $(this).scrollTop() < Math.ceil($('#webPages').offset().top)) {
            $('nav').addClass('navColor1');
            $('.navSecondul li:nth-child(1)').css({'text-decoration':'underline'});
        } else {
            $('nav').removeClass('navColor1');
            $('.navSecondul li:nth-child(1)').css({'text-decoration':'none'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#webPages').offset().top)-45 && $(this).scrollTop() < Math.ceil($('#summaryWheel').offset().top)) {
            $('.navSecondul li:nth-child(2)').css({'text-decoration':'underline'});
        } else {
            $('.navSecondul li:nth-child(2)').css({'text-decoration':'none'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#summaryWheel').offset().top)-45 && $(this).scrollTop() < Math.ceil($('footer').offset().top)) {
            $('nav').addClass('navColor2');
            $('.navSecondul li:nth-child(3)').css({'text-decoration':'underline'});
        } else {
            $('nav').removeClass('navColor2');
            $('.navSecondul li:nth-child(3)').css({'text-decoration':'none'});
        }

        if ($(this).scrollTop() >= Math.ceil($('#webPages').offset().top)-300) {
            if (scroll_Webpage){
                webPagesTurn();
                scroll_Webpage = false;
            }           
        }

        $("main").on('mousewheel',function(e){
            var wheel = e.originalEvent.wheelDelta;
            if(wheel<0){
                $('#webPages').css({'background-position':'left 1% bottom 30%'});
            } else if(wheel>0) {
                $('#webPages').css({'background-position':'left 1% bottom 70%'});
            }
        });

        if ($(this).scrollTop() >= Math.ceil($('#summaryWheel').offset().top)-80) {
            if (scroll_Wheel){
                summaryWheel();
                scroll_Wheel = false;
            }
            if (scroll_3D){
                rotation3d();
                scroll_3D = false;
            }
        }

    });

    // chart =================================================================================================

    $(window).on('scroll', function(){
        if ($(this).scrollTop() >= Math.ceil($('#chartPage').offset().top)-300) {
            showGraph();
        }  
    });    

        function showGraph() {
            let chartOne = document.getElementById('chartOne').getContext('2d');
            let barChart = new Chart(chartOne, {
                type : 'bar', //pie, line, doughnut, polarArea
                data : {
                    labels : ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React JS', 'Bootstrap'],
                    datasets :[{
                        label : 'Frontend program languages (%)',
                        data : [100, 100, 90, 90, 70, 70],
                        backgroundColor:['lightskyblue'],
                        borderWidth:1,
                        borderColor:'black',
                        hoverBorderWidth:2,
                        borderRadius:5
                        // fontSize : 15
                    }]
                }
            });
    
            let chartTwo = document.getElementById('chartTwo').getContext('2d');
            let lineChart = new Chart(chartTwo, {
                type : 'line', //pie, line, doughnut, polarArea
                data : {
                    labels : ['PHP', 'Java', 'Python', 'Data Base', 'REST API', 'JSON'],
                    datasets :[{
                        label : 'Backend program languages (%)',
                        data : [70, 80, 90, 80, 60, 70],
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
                    labels : ['Android: 80%'],
                    datasets :[{
                        // label : 'Backend program languages (%)',
                        data : [80, 20],
                        backgroundColor:['green','white'],
                        borderWidth:1,
                        borderColor:'black',
                        hoverBorderWidth:2,
                        borderRadius:5
                    }]
                }
            });
    
            let chartThree_second = document.getElementById('chartThree_second').getContext('2d');
            let doughnutChart2 = new Chart(chartThree_second, {
                type : 'doughnut', //pie, line, doughnut, polarArea
                data : {
                    labels : ['Linux: 80%'],
                    datasets :[{
                        // label : 'Backend program languages (%)',
                        data : [80, 20],
                        backgroundColor:['yellowgreen','white'],
                        borderWidth:1,
                        borderColor:'black',
                        hoverBorderWidth:2,
                        borderRadius:5
                    }]
                }
            });
    
            let chartThree_third = document.getElementById('chartThree_third').getContext('2d');
            let doughnutChart3 = new Chart(chartThree_third, {
                type : 'doughnut', //pie, line, doughnut, polarArea
                data : {
                    labels : ['GitHub: 70%'],
                    datasets :[{
                        // label : 'Backend program languages (%)',
                        data : [70, 30],
                        backgroundColor:['yellowgreen','white'],
                        borderWidth:1,
                        borderColor:'black',
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
                        // label : 'Backend program languages (%)',
                        data : [80, 20],
                        backgroundColor:['green','white'],
                        borderWidth:1,
                        borderColor:'black',
                        hoverBorderWidth:2,
                        borderRadius:5
                    }]
                }
            });
        }
    

    // portfolio =================================================================================================


    function webPagesTurn() {
        // $('#webPages section img').css({'transform':'perspective(500px) rotateX(0deg)'});
        $('#webPages section>div>div').css({'margin-top':'0'});
        $('#webPages section:nth-child(2)>div>div').css({'margin-top':'-168px', 'backdrop-filter':'blur(10px)'});
        $('#webPages section:nth-child(2)>div>div p').css({'color':'white'});
        $('#webPages section:nth-child(2)>div i').addClass('showinfo');
    }
   

    $('#webPages section button').click(function(){
        var num = $('#webPages section button').index(this);
        if (num==0){
            $('#webPages section>div').css({'visibility':'visible','max-height':'1000px'});
        }else if (num==1){
            $('#webPages section>div').css({'visibility':'visible','max-height':'1000px'});
            $('#webPages .backend, .plan').css({'visibility':'hidden','max-height':'0'});
        }else if (num==2){
            $('#webPages section>div').css({'visibility':'hidden','max-height':'0'});
            $('#webPages .backend').css({'visibility':'visible','max-height':'1000px'});
        }
    });

    $('#webPages section>div i').click(function(){
        $(this).toggleClass('showinfo');

        if ($(this).hasClass('showinfo')){
            $(this).siblings('div').css({'margin-top':'-168px'});
            $(this).siblings('div').css({'backdrop-filter':'blur(10px)'});
            $(this).siblings('div').children('p').css({'color':'white'});

        }else {
            $(this).siblings('div').css({'margin-top':'0px'});
            $(this).siblings('div').css({'backdrop-filter':'none'});
            $(this).siblings('div').children('p').css({'color':'rgba(255, 255, 255, 0.6)'});
        }
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

    // $('.dial span').mouseover(function(){
    //     $(this).css({'transform':'translateX(-50%) translateY(-50%) perspective(100px) rotateY(30deg)','color':'black','opacity':'0.7'});
    //     $('#summaryCards').css({'transform':'perspective(1500px) rotateY(90deg)'});
    //     $('#summaryCards h5').css({'transform':'perspective(1000px) rotateY(-72deg)', 'background-color':'rgba(0, 0, 0, 0.1)'});
    //     $('#summaryCards h5').eq(0).css({'color':'white'});
    // }).mouseout(function(){
    //     $(this).css({'transform':'translateX(-50%) translateY(-50%) perspective(100px) rotateY(-30deg)','color':'white','opacity':'0.5'});
    //     $('#summaryCards').css({'transform':'translate(0)'});
    //     $('#summaryCards h5').css({'transform':'translate(0)', 'background-color':'white'});
    //     $('#summaryCards h5').eq(0).css({'color':'rgb(33, 37, 41)'});
    // });

    $('.dial span').click(function(){

        $(this).toggleClass('try3d');
        
        if ($(this).hasClass('try3d')){
            $(this).css({'transform':'translateX(-50%) translateY(-50%) perspective(100px) rotateY(30deg)'});
            $('#summaryCards').css({'transform':'perspective(1500px) rotateY(90deg)'});
            $('#summaryCards h5').css({'transform':'perspective(1000px) rotateY(-72deg)', 'background-color':'rgba(0, 0, 0, 0.1)'});
            $('#summaryCards h5').eq(0).css({'color':'rgba(255, 255, 255, 0.9)'});
            $(this).text('3D').append('<br>ON');
        }else {
             $(this).css({'transform':'translateX(-50%) translateY(-50%) perspective(100px) rotateY(-30deg)'});
            $('#summaryCards').css({'transform':'translate(0)'});
            $('#summaryCards h5').css({'transform':'translate(0)', 'background-color':'white'});
            $('#summaryCards h5').eq(0).css({'color':'rgb(33, 37, 41)'}); 
            $(this).text('3D').append('<br>OFF');
        }
    });

    $('.cards').click(function(){

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
        // $('.cards').css({'background-color':'rgba(0, 0, 0, 0.2)'});

        // $('#summaryWheel form button').css({'color':'red'});

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

        // var clolor = $('.row:nth-child(7) section').css('color');
        // alert(clolor);
    });



    // $('.cube>div').mouseover(function(){

    //     var rotationIndex = ($('.cube>div').index(this)+1)%4 ;
       
    //     $(this).closest('.cube').css({'transform':'translateZ(-20vw) rotateY('+((-90)*rotationIndex+70)+'deg)'});
       
    // }).mouseout(function(){
    //     var rotationIndex = ($('.cube>div').index(this)+1)%4 ;
       
    //     $(this).closest('.cube').css({'transform':'translateZ(-20vw) rotateY('+((-90)*rotationIndex+90)+'deg)'});
    // });


    var follower = true;

    $('.cube>div:nth-child(1)').mousemove(function(event){ 
        if(follower){
            var x_coordinate = event.pageX + 15;
            var y_coordinate = event.pageY - 15; 
            $('#mouseFollower').css({'visibility':'visible'});
            $('#mouseFollower').css({'left':''+x_coordinate+'px'}); 
            $('#mouseFollower').css({'top':''+y_coordinate+'px'}); 
            // follower = false;
        }
    }).mouseout(function(){ 
        $('#mouseFollower').css({'visibility':'collapse'});
    });

    $('.cube').css({'transform':'translateZ(-20vw)'});

    var firstCubeface = 1;
    var secondCubeface = 1;
    var thirdCubeface = 1;
    var forthCubeface = 1;

    $('.cube>div').click(function(){
        var Index = $('.cube>div').index(this);
        var rotationIndex = (Index+1)%4;

        $(this).closest('.cube').css({'transform':'translateZ(-20vw) rotateY('+((-90)*rotationIndex)+'deg)'});
        $('#mouseFollower').css({'visibility':'collapse'});
        follower = false;

        if(Index==0){
            $('nav>ul:nth-child(1) li').css({'color':'black'});
        }else if(Index==1 || Index==2 || Index==2) {
            $('nav>ul:nth-child(1) li').css({'color':'white'});
        }

        if (Index < 4){ 
            firstCubeface = (firstCubeface%4)+1;
        }else if (Index >= 4 && Index < 8){
            secondCubeface = (secondCubeface%4)+1;
        }else if (Index >= 8 && Index < 12){
            thirdCubeface = (thirdCubeface%4)+1;
        }else if (Index >= 12 && Index < 16){
            forthCubeface = (forthCubeface%4)+1;
        }
        
        if (firstCubeface==1 && secondCubeface==1 && thirdCubeface==1 && forthCubeface==1){
            $('#landPage section button').css({'color':'rgb(51, 133, 255)'});
        }else if(firstCubeface==2 && secondCubeface==2 && thirdCubeface==2 && forthCubeface==2){
            $('#landPage section button').css({'color':'orange'});
            // $('#landPage section i').css({'color':'rgb(100, 100, 255)'});
        }else if(firstCubeface==3 && secondCubeface==3 && thirdCubeface==3 && forthCubeface==3){
            $('#landPage section button').css({'color':'rgb(255, 213, 144)'});
        }else if(firstCubeface==4 && secondCubeface==4 && thirdCubeface==4 && forthCubeface==4){
            $('#landPage section button').css({'color':'rgb(100, 100, 255)'});
            // $('#landPage section i').css({'color':'orange'});
        }else{
            $('#landPage section button').css({'color':'lightgray'});
        }
    });





















$('.gototop').click(function(){

    var position = $(window).scrollTop();

    // var wheel = e.originalEvent.wheelDelta;
    // var thenum = ((wheel-3173)%1000)/10;
    var thenum = (((position-3173)%1000)/10) + 55;

    // $('.navSecondul li').css({'color':'red'});

    alert(thenum+' 현재 포지션은 '+position);
});

}); // the end
