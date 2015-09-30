<?php include 'session.php' ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
	<link rel="stylesheet" type="text/css" href="common.css"/>
    <link rel="stylesheet" type="text/css" href="chess/chess.css" />

    <title>The D Project</title>
    <script type="text/javascript" src="chess/chess.js"></script>
</head>
<body onload="doCells();">

	<?php include 'nav.php'?>
   <?php if (login_check($mysqli) == true) : ?>
      
    <div id="container" >
        <div id="masthead" >
            <h3>Chess Game - not kidding</h3>
         </div>
            
        <div id="links" >
        	<div id="linklist">
        	<a href="">blah!</a>
        	</div>
        </div>
        <div id="main">
			<?php include "chess/chess.php" ?>
        	<div id="output"></div>
      	</div>
        <div id="news">
        	<h3>news and rec. links</h3>
        </div>         
        <div id="footer">footer links</div>
    </div>
   <?php else : ?>
   	  <?php include 'includes/loginerror.php' ?>
   <?php endif; ?>
  
    
</body>
</html>
