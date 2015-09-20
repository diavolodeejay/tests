<head>
<meta http-equiv="Content-Type" content="text/php; charset=utf-8" />
</head>
<body>
Cerca...
<?php
	$ricerca = $_POST['cerca'];
	header("Location:http://www.google.it/#hl=it&source=hp&q=$ricerca");
?>
</body>