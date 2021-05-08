$(function(){
    var togglebtn = $('.togglebtn');
    var date = $('.today');
    var social = $('.socialmedia');
    var addbtn = $('input+button');
    var sectitle = $('.sectitle');
    var input = $('#seccontent2 div input');
            
    togglebtn.click(function(){
        date.toggleClass('active');
        social.toggleClass('active');
    });

    today();
    function today() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var week =new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        var day = week[today.getDay()]

        if(dd<10){dd = '0'+dd}
        if(mm<10){mm = '0'+mm}

        todayout = yyyy + '-' + mm + '-' + dd +' '+day;
        $('#todaydate').text(todayout);
    }

    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var ampm = $('#clock div').eq(0);
    var hour1 = $('#clock div').eq(1);
    var hour2 = $('#clock div').eq(2);
    var colon = $('#clock div').eq(3);
    var min1 = $('#clock div').eq(4);
    var min2 = $('#clock div').eq(5);

    timenow();
    setInterval(timechange, 5000);

    function timenow(){
        if (hour < 12){
            ampm.text("am ");
        }else{
            ampm.text("pm ");
            if(hour > 12) hour=hour-12;
        }

        if (hour<10){
            hour1.text('0');
            hour2.text(hour);
        }else{
            hour1.text('1');
            hour2.text(hour%10);
        }

        colon.text(':');

        if (min<10){
            min1.text('0');
            min2.text(min);
        }else{
            min1.text(parseInt(min/10));
            min2.text(min%10);
        }
        rotation();
    }

    function rotation(){
        setTimeout(() => {ampm.addClass('show').addClass('rotate');}, 500);
        setTimeout(() => {hour1.addClass('show').addClass('rotate');}, 1000);
        setTimeout(() => {hour2.addClass('show').addClass('rotate');}, 1200);
        setTimeout(() => {min1.addClass('show').addClass('rotate');}, 1500);
        setTimeout(() => {min2.addClass('show').addClass('rotate');}, 1700);
        setTimeout(() => {colon.css('color','var(--text-color)');}, 2000);
        setTimeout(() => {deleteRotation();}, 5000);
    }

    function deleteRotation(){
        ampm.removeClass('rotate');
        hour1.removeClass('rotate');
        hour2.removeClass('rotate');
        min1.removeClass('rotate');
        min2.removeClass('rotate');
        colon.removeClass('rotate');
    }

    function timechange(){
        var newtime = new Date();
        var newtimehour = newtime.getHours();
        var newtimemin = newtime.getMinutes();
        var newtimesec = newtime.getSeconds();

        if (newtimehour < 12){
            if (ampm.text() != "am ") {
                ampm.addClass('rotate');
                setTimeout(() => {ampm.text("am ");}, 500);
            }
        }else{
            if (ampm.text() != "pm ") {
                ampm.addClass('rotate');
                setTimeout(() => {ampm.text("pm ");}, 500);
            }
        }
        
        if(newtimehour > 12) newtimehour=newtimehour-12;

        if (newtimehour < 10){
            if (hour1.text() != '0') {
                hour1.addClass('rotate');
                setTimeout(() => {hour1.text('0');}, 500);
            }
            if (parseInt(hour2.text()) != newtimehour) {
                hour2.addClass('rotate');
                setTimeout(() => {hour2.text(newtimehour);}, 500);
            }
        }else{
            if (hour1.text() != '1') {
                hour1.addClass('rotate');
                setTimeout(() => {hour1.text('1');}, 500);
            }
            if (parseInt(hour2.text()) != newtimehour%10) {
                hour2.addClass('rotate');
                setTimeout(() => {hour2.text(newtimehour%10);}, 500);
            }
        }

        if (newtimemin<10){
            if (min1.text() != '0') {
                min1.addClass('rotate');
                setTimeout(() => {min1.text('0');}, 500);
            }
            if (parseInt(min2.text()) != newtimemin) {
                min2.addClass('rotate');
                setTimeout(() => {min2.text(newtimemin);}, 500);
            }
            
        }else{
            if (parseInt(min1.text()) != parseInt(newtimemin/10)) {
                min1.addClass('rotate');
                setTimeout(() => {min1.text(parseInt(newtimemin/10));}, 500);
            }
            if (parseInt(min2.text()) != newtimemin%10) {
                min2.addClass('rotate');
                setTimeout(() => {min2.text(newtimemin%10);}, 500);
            }
        }
        setTimeout(() => {deleteRotation();}, 2000);
    }
    
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=6094817&appid=8c8fa9eae4c801b616620cf6186cd33f&units=metric', function(data){
            var roundtemp = Math.round(data.list[0].main.temp);
            $('.temp').html(roundtemp+' °C ');
            $('.description').html('Description : '+ data.list[0].weather[0].description);
            $('.curtemp').html('Current Temperature : '+ data.list[0].main.temp+' °C ');
            $('.feellike').html('Feels like : '+ data.list[0].main.feels_like +' °C ');
            $('.windspeed').html('Wind Speed : '+ data.list[0].wind.speed +' m/s ');
            
            var weathericone = data.list[0].weather[0].icon;
            $('.icon').html('<img src="http://openweathermap.org/img/w/'+ weathericone +'.png">');
        });

    sectitle.click(function(){
        $(this).next().toggleClass('open');
        if($(this).next().hasClass('open')){
            $(this).css({'border-bottom':'0.4vh solid var(--accent-color)'});
            $(this).find('i').eq(1).css({'transform':'rotate(180deg)','visibility':'visible','transition':'transform 0.5s'});
            $(this).next().stop().animate({'max-height': '68vh', 'margin-top':'3vh'}, 700, 'easeOutBounce');
            input.focus();
            if ( $('#seccontent2').hasClass('open') ) $('#seccontent2+span').css({'visibility':'visible'});
            greeting();
        }else{
            $(this).css({'border-bottom':'0.4vh solid transparent'});
            $(this).find('i').eq(1).css({'transform':'rotate(0deg)','visibility':'hidden','transition':'transform 0.5s'});
            $(this).next().stop().animate({'max-height': 0, 'margin-top':'0vh'});
            if ( !$('#seccontent2').hasClass('open') ) $('#seccontent2+span').css({'visibility':'collapse'});
            greeting();
        }
    });
    
    if ( $('#seccontent2').hasClass('open') ) {
        $('#seccontent2+span').css({'visibility':'visible'});
    } else {
        $('#seccontent2+span').css({'visibility':'hidden'});
    }

    var todoarr = []
    var storage_output = localStorage.getItem("todolist");		
    var arroutput = JSON.parse(storage_output);

    var line = localStorage.getItem("checkedlist");	
    var linethrough = JSON.parse(line);

    if(arroutput != null){
        for(var i=0; i<arroutput.length; i++){
            oneline = $('<li><input type="checkbox" class="checkbox">'+ arroutput[i] + '<i class="fas fa-trash-alt"></i></li>');
            oneline.appendTo('#seccontent2 ul');
            if(linethrough != null){
                if (linethrough[i] == 'yes') {
                    $('#seccontent2 ul li').eq(i).addClass('checked').css({'text-decoration':'line-through'});
                    $('.checkbox').eq(i).prop('checked', true);
                }
            }
            todoarr.push(arroutput[i]);
        }
    }

    $('#sectitle2 div').append('<span> : '+todoarr.length+'<span>');

    function addlist(){
        var newline = $('<li><input type="checkbox" class="checkbox"></li>');
        var value = input.val();
        
        if(value != ''){    
            newline.append(value+'<i class="fas fa-trash-alt"></i>');
            newline.appendTo('#seccontent2 ul');
            if ($('#sticky').prop('checked')) {
                $('#seccontent2 ul li').addClass('stickynote');
            }
            todoarr.push(value);
            $('#sectitle2 div span').remove();
            $('#sectitle2 div').append('<span> : '+todoarr.length+'<span>');
            localStorage.setItem("todolist", JSON.stringify(todoarr));
            input.val('').focus();
        }
    }

    $(document).ready(function() {
        addbtn.click(addlist);
        input.keypress(function(e) {
            if (e.which == 13) {
                addlist();
                $('#seccontent2').scrollTop($('#seccontent2')[0].scrollHeight);
            }
        });
    });
    
    $(document).on('click', '.checkbox', function(){
        $(this).closest('li').toggleClass('checked');
        if ($(this).closest('li').hasClass('checked')){
            $(this).closest('li').css({'text-decoration':'line-through'});
        }else{
            $(this).closest('li').css({'text-decoration':'none'});
        }
        var checkedarr = [];
        for(var i = 0; i < todoarr.length; i++) {
            if ($('#seccontent2 ul li').eq(i).hasClass('checked')){
                checkedarr.push('yes');
            }else{
                checkedarr.push('no');
            }
        }
        localStorage.setItem("checkedlist", JSON.stringify(checkedarr));
    });

    $(document).on('mouseover', '#seccontent2 ul li', function(){
        $(this).css({'color':'darkgray'});
        $(this).find('i').css({'visibility':'visible'});
    });

    $(document).on('mouseout', '#seccontent2 ul li', function(){
        $(this).css({'color':'var(--text-color)'});
        $(this).find('i').css({'visibility':'hidden'});
    });

    $(document).on('click', '#seccontent2 ul li i', function(e){
        e.stopPropagation();
        $(this).closest('li').remove();
        for(var i = 0; i < todoarr.length; i++) {
            if(todoarr[i] == $(this).closest('li').text())  {
                todoarr.splice(i, 1);
                i--;
            }
        }
        $('#sectitle2 div span').remove();
        $('#sectitle2 div').append('<span> : '+todoarr.length+'<span>');
        localStorage.setItem("todolist", JSON.stringify(todoarr));

        var checkedarr = [];
        for(var i = 0; i < todoarr.length; i++) {
            if ($('#seccontent2 ul li').eq(i).hasClass('checked')){
                checkedarr.push('yes');
            }else{
                checkedarr.push('no');
            }
        }
        localStorage.setItem("checkedlist", JSON.stringify(checkedarr));
    });

    $('.clockframe').click(function(){
        $(this).addClass('spin');
        $('main>i').addClass('spin');
    });

    $('main>i').click(function(){
        $(this).removeClass('spin');
        $('.clockframe').removeClass('spin');
    });

    $('.setting i').click(function(){
        $(this).toggleClass('turnon');
        if ($(this).hasClass('turnon')){
            $(this).css({'transform':'rotate(45deg)','transition':'all 0.5s'});
            $('.setting div').css({'visibility':'visible', 'max-height':'100%'});
        }else{
            $(this).css({'transform':'rotate(0deg)','transition':'all 0.5s'});
            $('.setting div').css({'visibility':'collapse', 'max-height':'0'});
        }
    });

    $('input:radio[name=background]').change(function(){

        if ($('#pic1').prop('checked')) {
            $('body').css({'background-image':"url('./img/background_puppy.jpg')",'transition':'all 1s'});
            $('nav, .sectitle, form button, main>i, .greeting').css({'--text-color':'rgb(240, 240, 240)'});
            $(':root').css({'--accent-color':'orange', '--accent-color2':'darkorange', '--accent-color3':'rgb(255, 217, 0)'});
            $('nav>div>i').removeClass('fas fa-cat').addClass('fas fa-dog');
            rotation();
            // setTimeout(() => {deleteRotation();}, 4000);
        }else if ($('#pic2').prop('checked')) {
            $('body').css({'background-image':"url('./img/background_cat.jpg')",'transition':'all 1s'});
            $('nav, .sectitle, form button, main>i, .greeting').css({'--text-color':'rgb(38, 55, 74)'});
            $(':root').css({'--accent-color':'mediumslateblue', '--accent-color2':'navy', '--accent-color3':'pink'});
            $('.seccontent').css({'color':'var(--text-color)'});
            $('nav>div>i').removeClass('fas fa-dog').addClass('fas fa-cat');
            rotation();
            // setTimeout(() => {deleteRotation();}, 4000);
        }
    })

    $('input:checkbox[id=sticky]').change(function(){
        if ($('#sticky').prop('checked')) {
            $('#seccontent2 ul li').addClass('stickynote');
            $('.seccontent').css({'background-color':'rgba(255, 255, 255, 0.1)'});
        }else{
            $('#seccontent2 ul li').removeClass('stickynote');
            $('.seccontent').css({'background-color':'var(--background-color)'});
        }
    });

    var hourlyalarm;
    $('.clockframe i').click(function(e){
        e.stopPropagation();
        if (Notification.permission !== 'granted'){
            if (window.Notification) {
                Notification.requestPermission();
            }
            if (Notification.permission !== 'granted') {
                alert('\nIf notifications are blocked, Eye Rest Notification is unavailable. \nPlease allow notifications and click again the icon.');
            }
        }else{    
            $(this).toggleClass('on');
            if($(this).hasClass('on')){
                $(this).removeClass('far fa-eye-slash').addClass('far fa-eye');
                alert('Eye Rest Notification : ON\nThe notification will appear every hour from now on.');
                hourlyalarm = setInterval(function(){            
                    var notification = new Notification("It has been one hour.\nPlease rest your eyes for a while!");
                }, 3600000); 
            }else{
                $(this).removeClass('far fa-eye').addClass('far fa-eye-slash');
                alert('Eye Rest Notification : OFF\nPlease rest your eyes regularly!');
                clearInterval(hourlyalarm);
            }
        }    
    });

    $( '#sortable' ).sortable({
        opacity: 0.6,
        cursor: 'move'
    });

    greeting();
    function greeting(){
        if ($('#seccontent1').hasClass('open') || $('#seccontent2').hasClass('open')){
            $('.greeting').css({'color':'transparent', 'visibility':'collapse'}).stop().animate({'top':'65%'}, 1500, 'easeOutElastic');
        }else{
            $('.greeting').css({'color':'var(--text-color)', 'visibility':'visible'}).stop().animate({'top':'45%'}, 1500, 'easeOutElastic');
        }
    }
});