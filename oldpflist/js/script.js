$(function(){

    $('.spring').animate({'margin-top':0}, 1000, 'easeOutBounce');

    $('span button').eq(1).click(function(){
        $('h1 span').text('포트폴리오 리스트').css({'font-family':'궁서'});
        $('h1 button').text('이력서 & 자기소개서');
        $('h2 span').eq(0).text(' 프론트앤드 & 디자인').css({'font-family':'궁서'});
        $('h2 span').eq(1).text(' 백앤드').css({'font-family':'궁서'});
        $('.stencil div span').eq(0).text('저의 포트폴리오 사이트에 방문해 주셔서 감사합니다.').css({'font-family':'굴림'});
        $('.stencil div span').eq(1).text('즐거운 하루 보내세요!').css({'font-family':'굴림'});
    });

    $('span button').eq(0).click(function(){
        $('h1 span').text("Kim's Portfolio List").css({'font-family':'Georgia'});
        $('h1 button').text('Resume & Cover Letter');
        $('h2 span').eq(0).text(' Frontend & Design').css({'font-family':'Georgia'});
        $('h2 span').eq(1).text(' Backend').css({'font-family':'Georgia'});
        $('.stencil div span').eq(0).text('Thank you for visiting my portfolio website.').css({'font-family':'Georgia'});
        $('.stencil div span').eq(1).text('Have a great day!').css({'font-family':'Georgia'});
    });

    $('h1 button').mouseover(function(){
        $(this).stop().animate({'width':'200px','height':'50px', 'letter-spacing':'-1.5px'}, 500);
    }).mouseout(function(){
        $(this).stop().animate({'width':'280px','height':'40px', 'letter-spacing':'0px'}, 500, 'easeOutElastic');
    });

    $('h2').eq(0).click(function(){
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            $('i').eq(0).css({'transform':'rotate(90deg)', 'transition':'transform 0.5s'});
            $('.frontend').css({'overflow':'visible', 'border-top': '0 solid blue'}).stop().animate({'height': '60vh'}, 500);
            instruction();
        }else{
            $('i').eq(0).css({'transform':'rotate(0deg)', 'transition':'transform 0.5s'});
            $('.frontend').css({'overflow':'hidden', 'border-top': '1px solid blue'}).stop().animate({'height': 0}, 500);
            instruction();
        }
    });

    $('h2').eq(1).click(function(){
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            $('i').eq(1).css({'transform':'rotate(90deg)', 'transition':'transform 0.5s'});
            $('.backend').css({'overflow':'visible', 'border-top': '0 solid blue'}).stop().animate({'height': '23vh'}, 300);
            instruction();
        }else{
            $('i').eq(1).css({'transform':'rotate(0deg)', 'transition':'transform 0.5s'});
            $('.backend').css({'overflow':'hidden', 'border-top': '1px solid blue'}).stop().animate({'height': 0}, 300);
            instruction();
        }
    });

    $('td img').mouseover(function(){
        $(this).css({'transform':'scale(1.3) translateY(-12%)', 'box-shadow': '0.4vw 0.7vh 0.9vw dimgray','transition':'all 0.5s ease-in-out'});
    }).mouseout(function(){
        $(this).css({'transform':'scale(1)','z-index':'0', 'box-shadow': 'none','transition':'all 0.5s ease-in-out'});
    });

    $('.stencil img').mouseover(function(){
        $('.stencil img:nth-child(1)').css({'transform':'translateX(-50%) rotateY(180deg)', 'visibility':'hidden'});
        $('.stencil img:nth-child(2)').css({'transform':'translateX(-50%) rotateY(0deg)', 'visibility':'visible'});
    }).mouseout(function(){
        $('.stencil img:nth-child(1)').css({'transform':'translateX(-50%) rotateY(0deg)', 'visibility':'visible'});
        $('.stencil img:nth-child(2)').css({'transform':'translateX(-50%) rotateY(180deg)', 'visibility':'hidden'});
    });

    function instruction(){
        if ($('h2').eq(0).hasClass('open') || $('h2').eq(1).hasClass('open')){
            $('h4').css({'visibility':'visible'});
            $('h1').css({'margin-top':'5vh'});
        }else{
            $('h4').css({'visibility':'hidden'});
            $('h1').css({'margin-top':'13vh'});
        }
    }
}); 
