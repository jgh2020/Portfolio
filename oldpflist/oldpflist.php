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
    <script src="./index_js/script.js"></script>
    <link href="./index_css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
    <main>
        <div class="sky">
        <span>
        <button><img src="./index_img/canada.png" alt="canada"><span><br>ENG</span></button>
        <button><img src="./index_img/korea.png" alt="korea"><span><br>KOR</span></button>
        </span>
        </div>
        <h1><span>Kim's Portfolio List</span><br><a href="./resume/password.php"><button>Resume & Cover Letter</button></a></h1>
            <div class="spring">
                <h2><i class="fas fa-arrow-circle-right"></i><span> Frontend & Design</span></h2>
                <div class="frontend">
                    <table>
                        <tr >
                            <th>No.</th>
                            <th>Screen shot</th>
                            <th>Title</th>
                            <th>Function & Characteristics</th>
                            <th>Programming Languages</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td data-tilt><a href="index.php"><img src="./index_img/pflist.jpg" alt="portfolio"></a></td>
                            <td>Portfolio List<br>(Current page)</td>
                            <td>- Responsive web layout<br>- CSS loading animation<br>- Tilt effect on hover<br> &nbsp;&nbsp;(Open source : https://micku7zu.github.io/vanilla-tilt.js/)<br>- Introduction to each web page</td>
                            <td>HTML5<br>CSS<br>Java Script<br>Jquery</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td data-tilt><a href="./todolist/todolist.html"><img src="./index_img/todolistnew.jpg" alt="todo"></a></td>
                            <td>To-do List</td>
                            <td>- Responsive web layout<br>- Weather API (OpenWeather)<br>- CSS loading animation / - localStorage<br>- Flip clock / - Eye rest notification<br>- Background mode change / - Google search</td>
                            <td>HTML5<br>CSS<br>Java Script<br>Jquery</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td data-tilt><a href="./popsongs/popsongs.html"><img src="./index_img/4popsongs2.jpg" alt="popsong"></a></td>
                            <td>4 Pop Songs</td>
                            <td>- CSS loading animation<br>- Youtube API / - Slide<br>- Audio player (Non-Copyrighted Music)<br>- Running clock (Moving second hand)<br>- Event locations</td>
                            <td>HTML5<br>CSS<br>Java Script</td>
                        </tr>
                    </table>
                </div>

                <h2><i class="fas fa-arrow-circle-right"></i><span> Backend</span></h2>
                <div class="backend">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Screen shot</th>
                            <th>Title</th>
                            <th>Function & Characteristics</th>
                            <th>Programming Languages</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td data-tilt><a href="./english/english.php"><img src="./index_img/english.jpg" alt="english"></a></td>
                            <td>English vocabulary studying site<br>(for Korean)</td>
                            <td>- Connection to PHPmyAdmin DB<br>- CRUD<br>- Pagination<br>- Hangman game / - Multiple choice quiz<br>- Lotto number generator</td>
                            <td>HTML5<br>CSS<br>Java Script<br>PHP<br>Data Base</td>
                        </tr>
                    </table>
                </div>    
                <h4>* Please click a screen shot to go to the linked page.</h4>
            </div>
            <div class="stencil">
                <img src="./index_img/stencil.jpg" alt="stencil">
                <img src="./index_img/real.jpg" alt="real">
                <div>
                    <span>Thank you for visiting my portfolio website.</span><br>
                    <span>Have a great day!</span><br>
                    <a href='https://github.com/jgh2020' target='_blank'><i class="fab fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/james-kim-a846a1211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6q9akq3fQTORU6bKCz8FYg%3D%3D' target='_blank'><i class="fab fa-linkedin"></i></a>
                </div>
            </div>   
    </main>
    <div id="loading"><img id="loading-image" src="./index_img/stencil.jpg" alt="Loading"/><div class="loading_text">Loading...</div></div>
    <script type="text/javascript">window.onload = function(){$('#loading').hide();}</script>
    <script type="text/javascript" src="./index_js/vanilla-tilt.js"></script>
</body>
</html>

    

