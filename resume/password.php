<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Password</title>
	
</head>

<body>
	<form name="passform" method="POST" action="password2.php">
		<input type="hidden" name="pass">
	</form>
	<script>
		var enter = prompt('Hello, Plseas enter the password to move to my resume.');
		document.passform.pass.value = enter;
		document.passform.submit();
	</script>
</body>

</html>