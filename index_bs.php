<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"">
    <link href="./index_css/style_bs.css" rel="stylesheet" type="text/css">
    <title>Kim's Portfolio</title>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="./index_js/script_bs.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.3.0/dist/chart.min.js"></script>
    
</head>
<body>
    <div id="wrapper">
        <header>
            <nav>
                <ul>
                    <li><i class="fab fa-linkedin"></i></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fas fa-envelope"></i></li>
                </ul>
                <ul class='navSecondul'>
                    <li>Skill</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <!-- <li>Resume & cover letter</li> -->
                </ul>
                <a href="#" class="togglebtn"><i class="fas fa-bars"></i></a>
            </nav>
        </header>

        <main>
            <p id="mouseFollower">Click please!</p>
            <div class="row" id="landPage"> <!-- #landPag -->
                <section class="col-6 col-lg-5"> <!--   1번   -->
                    <div> <!--   프레임   -->
                        <div class = 'cube'> <!--   큐브   -->
                            <div class = 'front'><img src="./index_img/webp1.jpg" alt="first"><span><h1>Hello</h1><h2>Here's an awesome</h2><span></div>
                            <div class = 'right'><img src="./index_img/cobweb1.jpg" alt="second"><span><h1>What's up?</h1><h2>Let me introduce a</h2><span></div>
                            <div class = 'back'><img src="./index_img/bulb1.jpg" alt="third"><span><h1>Hello</h1><h2>Here's an awesome</h2><span></div>
                            <div class = 'left'><img src="./index_img/cobweb1.jpg" alt="forth"><span><h1>What's up?</h1><h2>Let me introduce a</h2><span></div>
                        </div>
                       
                    </div>
                </section>

                 
                <section class="col-6 col-lg-5"> <!--   2번   -->
                    <div>
                        <div class = 'cube'> <!--   큐브   -->
                            <div class = 'front'><img src="./index_img/webp2.jpg" alt="first"><span><h1>there!<h1><h2>Web Developer.</h2></span></div>
                            <div class = 'right'><img src="./index_img/cobweb2.jpg" alt="second"><span><h1>friend!<h1><h2>Web Creater.</h2></span></div>
                            <div class = 'back'><img src="./index_img/bulb2.jpg" alt="third"><span><h1>there!<h1><h2>Web Developer.</h2></span></div>
                            <div class = 'left'><img src="./index_img/cobweb2.jpg" alt="forth"><span><h1>friend!<h1><h2>Web Creater.</h2></span></div>
                        </div>
                    </div>
                </section>
           
                <section class="col-lg-2 order-5 order-lg-3"> <!--   3번  / 여벡  -->
                   
                </section>

                <section class="col-6 col-lg-5 order-lg-4"> <!--   4번   -->
                    <div>
                        <div class = 'cube'> <!--   큐브   -->
                            <div class = 'front'><img src="./index_img/webp3.jpg" alt="first">
                                <span>
                                    <h2>My name is</h2>
                                    <h5>I'm full of ideas so I always develop and upgrade webs.</h5>
                                <span>
                            </div>
                            <div class = 'right'><img src="./index_img/cobweb3.jpg" alt="second">
                                <span>
                                    <h2>Everybody calls me</h2>
                                    <h5>I'm a hard worker so I always build webs and fix them.</h5>
                                <span>
                            </div>
                            <div class = 'back'><img src="./index_img/bulb3.jpg" alt="third">
                                <span>
                                    <h2>My name is</h2>
                                    <h5>I'm full of ideas so I always develop and upgrade webs.</h5>
                                <span>
                            </div>
                            <div class = 'left'><img src="./index_img/cobweb3.jpg" alt="forth">
                                <span>
                                    <h2>Everybody calls me</h2>
                                    <h5>I'm a hard worker so I always build webs and fix them.</h5>
                                <span>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="col-6 col-lg-5 order-lg-5"> <!--   5번   -->
                    <div>
                        <div class = 'cube'> <!--   큐브   -->
                            <div class = 'front'><img src="./index_img/webp4.jpg" alt="first">
                                <span>
                                    <h2>James.
                                        <a id='resume' href='./todolist/todolist.html'>More about me</a>
                                    </h2>
                                    <h5>I like creating dynamic web as it makes peoole interested.</h5>
                                <span>
                            </div>
                            <div class = 'right'><img src="./index_img/cobweb4.jpg" alt="second">
                                <span>
                                    <h2>Spider. <i class="fas fa-spider"></i></h2>
                                    <h5>I try to build flawless webs as that's the way to make my living.</h5>
                                <span>
                            </div>
                            <div class = 'back'><img src="./index_img/bulb4.jpg" alt="third">
                                <span>
                                    <h2>James.
                                        <a id='resume' href='./todolist/todolist.html'>More about me</a>
                                    </h2>
                                    <h5>I like creating dynamic web as it makes peoole interested.</h5>
                                <span>
                            </div>
                            <div class = 'left'><img src="./index_img/cobweb4.jpg" alt="forth">
                                <span>
                                    <h2>Spider. <i class="fas fa-spider"></i></h2>
                                    <h5>I try to build flawless webs as that's the way to make my living.</h5>
                                <span>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section class="col-lg-2 order-last"> <!--   6번  여백  -->
                    <button>Portfolid (Previous ver.)</button>
                    <button>To-do List</button>
                    <button>4 Pop Songs</button>
                    <button>English Vocabulary Study</button>
                </section> 
            </div>    

     
            <!-- <div>     -->
            
                <!-- <div class="row">
                    <section class="col-xl-12">
                        <div class='dial'><i class="fas fa-arrow-up"></i><br>
                        
                                <button class='cards'>All</button>
                                <button class='cards'>1</button>
                                <button class='cards'>2</button>
                                <button class='cards'>3</button>
                                <button class='cards'>4</button>
                                <button class='cards'>5</button>
                                <button class='cards'>All</button>
                                <button class='cards'>1</button>
                                <button class='cards'>2</button>
                                <button class='cards'>3</button>
                                <button class='cards'>4</button>
                                <button class='cards'>5</button>
                        </div>
                    </section>
                   
                    <section class="col-xl-2 col-lg-4 col-md-6"><h5>1. Algonquin college computer programming    <span class="badge bg-primary">with Honour</span></h5> </section>
                    <section class="col-xl-2 col-lg-4 col-md-6"><h5>2. 3 (+2) portfolio webpages from scratch       <span class="badge bg-info"> &nbsp; Plz check&nbsp; </span></h5> </section>
                    <section class="col-xl-2 col-lg-4 col-md-6"><h5>3. Skilled at web programs (Front + back)    <span class="badge bg-success">&nbsp;&nbsp;A +++++ &nbsp;&nbsp;</span></h5> </section>
                    <section class="col-xl-2 col-lg-4 col-md-6"><h5>4. Android, Linux, GitHub, Wordpress, Zoom    <span class="badge bg-danger">&nbsp;&nbsp;and more&nbsp;</span></h5> </section>
                    <section class="col-xl-2 col-lg-4 col-md-6"><h5>5. Team player, problem solver, meticulous   <span class="badge bg-warning">&nbsp;very good&nbsp;</span></h5> </section>
                    <section class="col-xl-2 col-lg-4 col-md-6"><h5>6. Hard worker, responsibility, trilingual <span class="badge bg-secondary">&nbsp; WoW &nbsp;</span></h5> </section>
                </div>    -->

            <div class="row" id="chartPage"> <!-- #chartPage -->
                <section class="col-lg-4 col-md-6">
                    <div><i class="fas fa-desktop"></i> &nbsp;Frontend</div>
                    <div><canvas id="chartOne"></canvas></div>
                    <p>Willingness to learn new skills : 200% 👍<br>
                        <span>I enjoy learning new program languages. 
                            You may not find the skills here that your position needs now. 
                            But I'm always prepared to learn new languages in a humble manner, 
                            so the graphs here will become much more complex soon.
                        </span>
                    </p>
                </section >
                <section class="col-lg-4 col-md-6">
                    <div><i class="fas fa-server"></i> &nbsp;Backend</div>
                    <div><canvas id="chartTwo"></canvas></div>
                    <p>New skills learning capabilities : 200% 👍<br>
                        <span>I can learn new program languages quickly. 
                            As you can see, I already have a good understanding of many major languages. 
                            Knowing the basic concepts of programs, I am sure that I can learn new languages easily.
                        </span>
                    </p>
                </section>

                <section class="col-lg-4 col-md-6">
                    <div><i class="fas fa-plus-circle"></i> &nbsp;Plus</div>
                    <div>
                        <div><canvas id="chartThree_first"></canvas></div>
                        <div><canvas id="chartThree_second"></canvas></div>
                        <div><canvas id="chartThree_third"></canvas></div>
                        <div><canvas id="chartThree_forth"></canvas></div>
                    </div>
                </section>

                <section class="col-lg-12 col-md-6">
                    <div>
                        <p><img src="./index_img/html5.png" alt="html5"><span>HTML5<br>100%</span></p>
                        <p><img src="./index_img/css3.png" alt="css3"><span>CSS3<br>100%</span> </p>
                        <p><img src="./index_img/js.png" alt="js"><span>JavaScript<br>100%</span> </p>
                        <p><img src="./index_img/jquery.png" alt="jquery"><span>jQuery<br>100%</span> </p>
                        <p><img src="./index_img/react.png" alt="react"><span>React<br>100%</span> </p>
                        <p><img src="./index_img/bootstrap.png" alt="bootstrap"><span>Bootstrap<br>100%</span> </p>
                        <p><img src="./index_img/php.png" alt="php"><span>PHP<br>100%</span> </p>
                        <p><img src="./index_img/java.png" alt="java"><span>Java<br>100%</span> </p>
                        <p><img src="./index_img/python.png" alt="python"><span>Python<br>100%</span> </p>
                        <p><img src="./index_img/db.png" alt="db"><span>Data Base<br>100%</span> </p>
                        <p><img src="./index_img/rest.jpg" alt="restapi"><span>REST API<br>100%</span> </p>
                        <p><img src="./index_img/json.jpg" alt="json"><span>JSON<br>100%</span> </p>
                        <p><img src="./index_img/android.png" alt="android"><span>Android<br>100%</span> </p>
                        <p><img src="./index_img/linux.png" alt="linux"><span>Linux<br>100%</span> </p>
                        <p><img src="./index_img/github.png" alt="github"><span>GitHub<br>100%</span> </p>
                        <p><img src="./index_img/wordpress.png" alt="wordpress"><span>Wordpress<br>100%</span> </p>
                    </div>
            </div>

            <div class="row" id="webPages"> <!-- #webPages -->
                <section class="col-xl-10"><button>All</button><button>Frontend</button><button>Backend</button></section>
                <section class="col-xl-4 col-md-6">
                    <div> <!-- frame -->
                        <div>
                            <a href='#'><img src="./oldpflist/img/newpflist.jpg" alt=""></a>
                            <p>Portfolio (Current page)<br><span>Date Created : 2021 Jun.</span></p>
                            <h6>Used Programs
                                <ul>
                                    <li>Bootstrap / Chart.js / jQuery</li>
                                    <li>HTML5 / CSS / Java Script</li>
                                </ul>  
                            </h6>
                            <h6>Function & Characteristics
                                <ul>
                                    <li>Responsive web layout</li>
                                    <li>Introduction to my Skills</li>
                                    <li>Graph of comprehension of skills</li>
                                    <li>link to resume & cover letter</li>
                                    <li>Contact</li>
                                </ul>                            
                            </h6>
                        </div>
                        <i class="fas fa-info-circle"></i> 
                    </div>    
                </section>
                
                <section class="col-xl-4 col-md-6">
                    <div>
                        <div>
                            <a href='#'><img src="./oldpflist/img/pflist.jpg" alt=""></a>
                            <p>Portfolio (Previous Ver.)<br><span>Date Created : 2021 Apr.</span>  </p>
                            <h6>Used Programs
                                <ul>
                                    <li>jQuery</li>
                                    <li>HTML5 / CSS / Java Script</li>
                                </ul>  
                            </h6>
                            <h6>Function & Characteristics
                                <ul>
                                    <li>Responsive web layout</li>
                                    <li>CSS loading animation</li>
                                    <li>Tilt effect on hover (Open source : https://micku7zu.github.io/vanilla-tilt.js/)</li>
                                    <li>Introduction to each web page</li>
                                </ul>
                            </h6>
                        </div>
                        <i class="fas fa-info-circle"></i>     
                    </div>   

                </section>
                <section class="col-xl-4 col-md-6">
                    <div>
                        <div>
                            <a href='#'><img src="./oldpflist/img/todolistnew.jpg" alt=""></a>
                            <p>To-do List<br><span>Date Created : 2021 Mar.</span></p>
                            <h6>Used Programs
                                <ul>
                                    <li>jQuery</li>
                                    <li>HTML5 / CSS / Java Script</li>
                                </ul>  
                            </h6>
                            <h6>Function & Characteristics
                                <ul>
                                    <li>Weather API (OpenWeather)</li>
                                    <li>Responsive web layout</li>
                                    <li>CSS loading animation / localStorage</li>
                                    <li>Flip clock / Eye rest notification</li>
                                    <li>Background mode change / Google search</li>
                                </ul>
                            </h6>
                        </div>
                        <i class="fas fa-info-circle"></i>    
                    </div>        
                </section>

                <section class="col-xl-4 col-md-6">
                    <div>
                        <div>
                            <a href='#'><img src="./oldpflist/img/4popsongs2.jpg" alt=""></a>
                            <p>4 Pop Songs<br><span>Date Created : 2021 Feb.</span></p>
                            <h6>Used Programs
                                <ul>
                                    <li>Java Script</li>
                                    <li>HTML5 / CSS</li>
                                </ul>  
                            </h6>
                            <h6>Function & Characteristics
                                <ul>
                                    <li>Youtube API / Slide</li>
                                    <li>Audio player</li>
                                    <li>CSS loading animation</li>
                                    <li>Running clock</li>
                                    <li>Event locations</li>
                                </ul>
                            </h6>
                        </div>  
                        <i class="fas fa-info-circle"></i>
                    </div>       
                </section>

                <section class="col-xl-4 col-md-6">
                    <div class="backend">
                        <div>
                            <a href='#'><img src="./oldpflist/img/english.jpg" alt=""></a>
                           <p>English Vocabulary Study<br><span>Date Created : 2021 Jan.</span></p>
                            <h6>Used Programs
                                <ul>
                                    <li>PHP / Data Base</li>
                                    <li>HTML5 / CSS / Java Script</li>
                                </ul>  
                            </h6>
                            <h6>Function & Characteristics
                                <ul>
                                    <li>Connection to PHPmyAdmin DB</li>
                                    <li>CRUD</li>
                                    <li>Pagination</li>
                                    <li>Hangman game / Multiple choice quiz</li>
                                    <li>Lotto number generator</li>
                                </ul>
                            </h6>
                        </div>
                        <i class="fas fa-info-circle"></i>
                    </div>        
                </section>
                
                <section class="col-xl-4 col-md-6">
                    <div class="plan">
                        <div>
                            <a href='#'><img src="./oldpflist/img/question.jpg" alt=""></a>
                            <p>Next plan<br><span>Date Created : 2021 ??</span></p>
                            <h6>Used Programs
                                <ul>
                                    <li>React / jQuery</li>
                                    <li>HTML5 / CSS / Java Script</li>
                                </ul>  
                            </h6>
                            <h6>Function & Characteristics
                                <ul>
                                    <li>Blog</li>
                                    <li>or</li>
                                    <li>Movie review</li>
                                    <li>...</li>
                                    <li>Any ideas?</li>
                                </ul>
                            </h6>
                        </div>
                        <i class="fas fa-info-circle"></i>
                    </div>      
                </section>
                <section class="col-xl-10">
                    <p>All the webpages here are all my own work, including planning, design, coding, testing, and hosting.
                        I would appreciate it if you could see the development of the productions over time.</p>
                </section>
            </div>

          
            <div class="row" id="summaryWheel"> <!-- #summaryWheel -->
            
                <section class="col-lg-4 order-2 order-lg-1">
                    <div class='dial'><i class="fas fa-sort-up"></i><span>3D<br>OFF</span>
                    
                            <button class='cards'>All</button>
                            <button class='cards'>1</button>
                            <button class='cards'>2</button>
                            <button class='cards'>3</button>
                            <button class='cards'>4</button>
                            <button class='cards'>5</button>
                            <button class='cards'>All</button>
                            <button class='cards'>1</button>
                            <button class='cards'>2</button>
                            <button class='cards'>3</button>
                            <button class='cards'>4</button>
                            <button class='cards'>5</button>
                    </div>
                </section>
                <section class="col-lg-8 order-1 order-lg-2">
                    <h1>Please say Hello!
                    <h6>Please play with the wheel on the left (or below) and take another look at the summary of my specs. I'd appreciate it if you could leave a review. 
                        You can also contact me via email. <a href="mailto:jamesgold.ksk@gmail.com">jamesgold.ksk@gmail.com</a></h6>

                    </h1>
                    <form>
                        <div class="form-group">

                        <label for="nameInput">Name</label>
                        <input type="name" class="form-control" id="nameInput" placeholder="Enter your name">

                        <label for="emailInput">Email</label>
                        <input type="email" class="form-control" id="emailInput" placeholder="Enter your email">

                        <label for="messageInput">Message or Review</label>
                        <textarea class="form-control" id="messageInput" rows="3" placeholder="Enter your message"></textarea>

                        </div>
                        <button type="submit" class="btn btn-secondary">Send</button>
                    </form>
                </section>
            </div>

            <div class="row" id="summaryCards"> <!-- #summaryCards -->
                <section class="col-xl-2 col-lg-4 col-md-6"><h5>1. Algonquin college computer programming <span class="badge bg-primary">with Honour</span></h5> </section>
                <section class="col-xl-2 col-lg-4 col-md-6"><h5>2. Three (+2) great webpages from scratch <span class="badge bg-info">Scroll up</span></h5> </section>
                <section class="col-xl-2 col-lg-4 col-md-6"><h5>3. Skilled at web programs (Front + back) <span class="badge bg-success">A+</span></h5> </section>
                <section class="col-xl-2 col-lg-4 col-md-6"><h5>4. Android, Linux, GitHub, Wordpress, Zoom <span class="badge bg-danger">and more</span></h5> </section>
                <section class="col-xl-2 col-lg-4 col-md-6"><h5>5. Team player, problem solver, meticulous <span class="badge bg-warning">Great</span></h5> </section>
                <section class="col-xl-2 col-lg-4 col-md-6"><h5>6. Hard worker, responsibility, trilingual <span class="badge bg-secondary">Wow</span></h5> </section>
            </div>


                      

            <button class="gototop">Top</button>

        </main><!-- //content -->
        



        <footer>
        <div class="row"> <!-- footer .row: -->
                <section class="col-lg-3 col-md-6">
                    <ul>
                        <li>Main</li>
                        <li>Skill</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </section>
                <section class="col-lg-3 col-md-6">
                    <ul>
                        <li>Portfolio (Previous ver.)</li>
                        <li>To-do List</li>
                        <li>4 Pop Songs</li>
                        <li>English Vocabulary Study</li>
                    </ul>
                </section>
                <section class="col-lg-3 col-md-6">
                    <ul>
                        <li>Resume</li>
                        <li>Cover letter</li>
                        <li>Email</li>
                    </ul>
                </section>
                <section class="col-lg-3 col-md-6">
                    <ul>
                        <li>Linkedin</li>
                        <li>Guthub</li>
                       
                    </ul>
                </section>
                <p>Thank you for visiting my portfolio. Have a great day! &copy; 2021 Seungkyun Kim. All Rights Reserved.</p>
        </div>   
         
                
    </div>

    <div id="loading"><img id="loading-image" src="./index_img/stencil.jpg" alt="Loading"/><div class="loading_text">Loading...</div></div>
    <script type="text/javascript">window.onload = function(){$('#loading').hide();}</script>
    <!-- <script type="text/javascript" src="./index_js/vanilla-tilt.js"></script> -->

</body>
</html>

