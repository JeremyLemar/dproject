
<div id = "navbar" style="height: 85px">     
	<a id="logocontainer" href="/" >
		<img alt="DProject Home" src="./DLogo1.png" />  
	</a>    
	
	<ul id="nav">
		<li><a href="index.php">Page 1</a></li>
		<li><a href="page2.php">Page 2</a></li>
		<li><a href="page3.php">Page 3</a></li>
		<li><a href="page4.php">Page 4</a></li>
		<li><a href="page5.php">Page 5</a></li>
		<li><a href="/">Page 6</a></li>
	</ul>
	<?php
	echo "Pageviews = ". $_SESSION['views'] . " "; //retrieve data
	echo "Items In Cart = ". $_SESSION['NCart'] . " "; // display number of items in cart
	?>
</div>