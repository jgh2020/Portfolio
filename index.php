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
            <div class="sky"></div>
            <h1>Kim's Portfolio List<br><a href="./resume/password.php"><button >Resume & Cover Letter</button></a></h1>
                <div class="spring">
                    <h2><i class="fas fa-arrow-circle-right"></i> Frontend & Design</h2>
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
                                <td data-tilt><a href="./todolist/todolist.html"><img src="./index_img/todolistnew.jpg" alt="todo"></a></td>
                                <td>To-do List</td>
                                <td>- Responsive web layout<br>- Weather API (OpenWeather)<br>- localStorage<br>- Flip clock / - Eye rest notification<br>- Background mode change / - Google search</td>
                                <td>HTML5<br>CSS<br>Java Script<br>Jquery</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td data-tilt><a href="./popsongs/popsongs.html"><img src="./index_img/4popsongs2.jpg" alt="popsong"></a></td>
                                <td>4 Pop Songs</td>
                                <td>- Slide<br>- Youtube API<br>- Audio player (Non-Copyrighted Music)<br>- Running clock (Moving second hand)<br>- Event locations</td>
                                <td>HTML5<br>CSS<br>Java Script</td>
                            </tr>
                        </table>
                    </div>

                    <h2><i class="fas fa-arrow-circle-right"></i> Backend</h2>
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
                                <td>- Connection to PHPmyAdmin DB<br>- CRUD<br>- Hangman game<br>- Multiple choice quiz<br>- Lotto number generator</td>
                                <td>HTML5<br>CSS<br>Java Script<br>PHP<br>Data Base</td>
                            </tr>
                        </table>
                    </div>    
                    <h4>* Please click a screen shot to go to the linked page.</h4>
                </div>
                <div class="stencil">
                    <img src="./index_img/stencil.jpg" alt="stencil">
                    <img src="./index_img/real.jpg" alt="real">
                    <span>
                        Thank you for visiting my portfolio website!<br>Have a great day!
                    <span>
                </div>
        </main>
    <script type="text/javascript" src="./index_js/vanilla-tilt.js"></script>
</body>
</html>

    

