<?php include 'session.php' ?>
<?php
	if (isset($_SESSION['NCart'])) {
		$_SESSION['NCart'] = $_SESSION['NCart'] +1;
	}
	else {
		$_SESSION['NCart'] = 0;
	}
	$_SESSION['views'] = 12345566;
	print "\r\n added item to cart";
	
?>