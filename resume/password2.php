<?php
	$password = $_POST['pass'];

	if ($password == 'kim2021'){
			echo "<script>location.replace('resume.html')</script>";
		} else {
			echo "<script>alert ('Sorry, Wrong password!')</script>";  
			echo "<script>history.back()</script>"; 
		}
?>





