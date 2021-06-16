<!DOCTYPE html>
<html lang="en">
<?php include "header.php"; ?>

    <div id="content" class="clearfix">
        <aside style="background-color:black; padding:0px;">						
			<img src="./img/cat.jpg" alt="cat">					
        </aside>
    <div class="main">
	

        <h2 style="font-family: Tahoma;"><em>Welcome</em></h2>
        <p style="font-size: 13pt; margin : 10px"><b>Hello, My name is Seungkyun Kim (James). This is one of my website works; the concept 
			is a website where foreigners could study English words. This website is connected to the phpMyAdmin DB, 
			and the words provided by this site are from that DB. Because my native language is Korean, this site currently contains English and Korean words.</b></p>
		
		<h5>&nbsp;</h5>
					
		<h2 style="font-family: Tahoma;"><em>Useful Sites</em></h2>
			<a href="https://en.dict.naver.com/#/main" target="_blank"><input type="button" class="main_btn" value="NAVER Dictionary" name="dictionary" /></a>
			<a href="https://papago.naver.com/" target="_blank"><input type="button" class="main_btn" value="PAPAGO Translator" name="translator" /></a>
			<a href="https://translate.google.com/" target="_blank"><input type="button" class="main_btn" value="GOOGLE Translator" name="google" /></a>
			<a href="https://www.mylanguageexchange.com/Country/Canada.asp" target="_blank"><input type="button" class="main_btn" value="Language Exchange" name="exchange" /></a>
			
			<h3>&nbsp;</h3>
			
	<div>	
	<div class="main_img">
						<button class="main_hoo_off" id="hoo"><img src="./img/hoohoo.jpg" alt="hoohoo" style="width: 110px; height: auto;"></button>
						<button class="main_hoo_on" onclick= "hooOn()"><img src="./img/owl.jpg" alt="owl" style="width: 120px; height: auto;"></button>
					</div>
			
		<h2 style="font-family: Tahoma;"><em>Where to start?</em></h2>
		
			
		
				<ol>
				<li>Main : The main page is where you are now. Please click the owl with the sound on.</li>
					
				<li>Vocabulary : Full vocabulary list. You can add to, modify, or delete from the list. You can also study 12 random words.</li>
				
				<li>Games : You can study words through some games here. You can also generate a set of lottery numbers for fun as a short break.</li>
				
				<li>Portfolio : This moves you to the main Portfolio page.</li>
			
				<li>Search : You can look up a word in the database in English or Korean.</li>
			</ol>
			
	</div>
			      
<script type = "text/javascript">
		function hooOn(){
			document.getElementById('hoo').className="main_hoo_on";
			var audio = new Audio('./sound/owl.wav');
			audio.play();
			setTimeout(function(){document.getElementById('hoo').className="main_hoo_off";}, 1000);							
		}
</script>
				
	</div><!-- End Main -->
    </div><!-- End Content -->

			
<?php include "footer.php"; ?>

</html>