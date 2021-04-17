s
    <head>
        <title>English vocabulary studying site</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="style.css?v17" rel="stylesheet" type="text/css">
    </head>
    <body>
			<header>
				<div style = "font-size:25px; margin-left:10px;"><a href="password.php"><b>😀Seungkyun</b></a></div>
				<div style = "color:orange; font-family: Lucida Bright; font-size:50px; margin:20px;"><b>Practice Makes Perfect!</b></div>
				<?php date_default_timezone_set('America/Toronto'); ?>
				<div style = "text-align: right; margin-right:10px; margin-top: 30px; font-family: impact; font-size:25px; color:white;"><?php echo date("Y-M-d");?><br><?php echo date("l"); ?></div>
            </header>

            <nav>
                <div id="menuItems">
                    <ul>
						<form name="search" id="search" method="post" action="searchWord.php">
							<li><a href="english.php">Main</a></li>
							<li><a href="word_list.php">Vocabulary</a></li>
							<li><a href="hangman.php">Games</a></li>
							<li><a href="index.php">Portfolio List</a></li>
							<li><input type="text" name="keyword" id="keyword" size='20' placeholder="keyword here!" style="font-size: 15pt;"><input type='submit' name='btnSubmit' id='btnSubmit' value='🔍' style="font-size: 13pt;"></li>
						</form>
                    </ul>
                </div>
            </nav>