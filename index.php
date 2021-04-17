<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"">
    <title>Portfolio List</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script>
    $(function(){

        $('.spring').animate({'margin-top':0}, 1000, 'easeOutBounce');

        $('button').mouseover(function(){
            $(this).stop().animate({'width':'14vw','height':'6vh', 'letter-spacing':'-1px'}, 500);
        }).mouseout(function(){
            $(this).stop().animate({'width':'18vw','height':'4vh', 'letter-spacing':'0px'}, 500, 'easeOutElastic');
        });

        $('h2').eq(0).click(function(){
            $(this).toggleClass('open');
            if($(this).hasClass('open')){
                $('i').eq(0).css({'transform':'rotate(90deg)', 'transition':'all 0.5s'});
                $('.frontend').css({'overflow':'hidden'}).stop().animate({'height': 0}, 500);

            }else{
                $('i').eq(0).css({'transform':'rotate(0deg)', 'transition':'all 0.5s'});
                $('.frontend').css({'overflow':'visible'}).stop().animate({'height': '41.5vh'}, 500);
            }
        });

        $('h2').eq(1).click(function(){
            $(this).toggleClass('open');
            if($(this).hasClass('open')){
                $('i').eq(1).css({'transform':'rotate(90deg)', 'transition':'all 0.5s'});
                $('.backend').css({'overflow':'hidden'}).stop().animate({'height': 0}, 500);

            }else{
                $('i').eq(1).css({'transform':'rotate(0deg)', 'transition':'all 0.5s'});
                $('.backend').css({'overflow':'visible'}).stop().animate({'height': '23vh'}, 500);
            }
        });

        $('img').mouseover(function(){
            $(this).css({'transform':'translate(-0.5vw, -1vh)', 'box-shadow': '0.7vw 1.2vh 0.9vw gray','transition':'all 0.5s'});
        }).mouseout(function(){
            $(this).css({'transform':'translate(0, 0)', 'box-shadow': 'none','transition':'all 0.5s'});
        });


    }); // end
</script>
    <Style>

body{
    margin:0;
    padding:0;
}

h1, h2, h3, div, p, a{
    font-family: Georgia;
    text-align: center;
    margin:0;
    padding:0;
}

h1{
    font-size:2.5vw;
    display:block;
    margin-top:5vh;
}

h2{
    margin-top:3.5vh;
    margin-bottom:1.5vh;
    margin-left: 5vw;
    font-size:2vw;
    text-align: left;
    color:navy;
}

h2:hover{
    cursor:pointer;
    color:silver;
}

i{
    color:cornflowerblue;
}

h4{
    font-size:1.3vw;
    text-align: right; 
    color: green;
    margin-right:5vw;
}

button{
    width:18vw;
    height:4vh;
    font-size:1vw;
    border:none;
    background-color: cornflowerblue;
    border-radius : 3vw;
    color:white;
}

button:hover{
    cursor:pointer;
    background-color:silver;
    
}

tr, th, td{
    padding:0%;
    border: solid white;
    border-width: 0.2vh 0.2vw;
    font-family: Calibri;
    font-size: 1.2vw;
    background-color:white;
    border-collapse:collapse;
}

table{
    margin-left:5vw;
    margin-right:5vw;
    border-collapse:collapse;
}


.spring{
    margin-top:-10vh;
}

td:nth-child(1){ width:7vw;}
td:nth-child(2){ width:17vw; height:18vh;}
td:nth-child(3){ width:19vw;}
td:nth-child(4){ width:30vw; text-align:left; padding-left: 2vw;}
td:nth-child(5){ width:15vw;}

table tr:last-child td:nth-child(1){border-radius:0 0 0 1.5vw;}
table tr:last-child td:nth-child(5){border-radius:0 0 1.5vw 0;}

br{
    font-size:1vw;
}

th{
    background-color: rgb(45, 70, 120);
    color:white;
    height:5vh;
}

td{
    background-color: whitesmoke;
}

td img {
    width:100%;
    height:100%;
    display:block;
}

</Style>
</head>

<body>
        <main>
            <h1>Kim's Portfolio List<br><a href="password.php"><button >Resume & Cover Letter</button></a></h1>
                <div class="spring">
                    <h2><i class="fas fa-arrow-circle-right"></i> Frontend & Design</h2>
                    <div class="frontend">
                        <table>
                            <tr >
                                <th>No.</th>
                                <th>Screen shot</th>
                                <th>Title</th>
                                <th>function & characteristics</th>
                                <th>Programming Languages</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><a href="todolist.html"><img src="todolistnew.jpg" alt="todo"></a></td>
                                <td>To-do List</td>
                                <td>- Responsive web layout<br>- Weather API (OpenWeather)<br>- localStorage<br>- Flip clock / - Eye rest notification<br>- Background mode change / - Google search</td>
                                <td>HTML5<br>CSS<br>Java Script<br>Jquery</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><a href="popsongs.html"><img src="4popsongs.jpg" alt="popsong"></a></td>
                                <td>4 Popsongs</td>
                                <td>- Slide<br>- Youtube API<br>- Audio player (Non-Copyrighted Music)<br>- Running clock (Moving second hand)<br>- Event locations</td>
                                <td>HTML5<br>CSS<br>Java Script</td>
                            </tr>
                        </table>
                    </div>


                    <h2><i class="fas fa-arrow-circle-right"></i> + Backend</h2>
                    <div class="backend">
                        <table>
                            <tr>
                                <th>No.</th>
                                <th>Screen shot</th>
                                <th>Title</th>
                                <th>function & characteristics</th>
                                <th>Programming Languages</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><a href="english.php"><img src="english.jpg" alt="english"></a></td>
                                <td>English vocabulary studying site<br>(for Korean)</td>
                                <td>- Connection to PHPmyAdmin DB<br>- CRUD<br>- Hangman game<br>- Multiple choice quiz<br>- Lotto number generator</td>
                                <td>HTML5<br>CSS<br>Java Script<br>PHP<br>Data Base</td>
                            </tr>
                        </table>
                    </div>    
                    <h4>* Please click screen shots to go to the linked pages.</h4>
                </div>    
        </main>
</body>
</html>

    

