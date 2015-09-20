<head>
<meta http-equiv="Content-Type" content="text/php; charset=utf-8" />
</head>
<body>
Cerca...
<?php
	$ricerca = $_POST['cerca'];
	header("Location:https://it.wikipedia.org/wiki/Speciale:Ricerca?search=$ricerca");
?>
</body>