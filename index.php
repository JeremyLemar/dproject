<?php include 'session.php' ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
	<link rel="stylesheet" type="text/css" href="common.css"/>

    <title>The D Project</title>
    <script type="text/javascript" src="darcy/darcyScripts.js">
    </script>
</head>
<body>
  
    <?php include 'nav.php' ?>
 
    <div id="container" >
        <div id="masthead" >
            <img id="Darcy" alt="This Darcy's site" src="darcy/Darcy.png" style="height:80px" />
            <span>The Darcy-o-meter</span>
         </div>
            
        <div id="links" >blah!
        </div>
        <div id="main" >
        	<br/>
        	<form name='myForm'>
				Name: <input type='text' id="username"
						name="username" /> 
						<br />
				Time: <input type='text' name='time' />
				<br/>
			</form>
			<button id=login onclick="onNameChange()">Log In</button>
			<hr/>
			<button type="button" onclick="getAjax()">Ajax</button>
			<button type="button" onclick="getAjax2()">Ajax2</button>
			<br/>
        	<span id="outputt">output</span>
      	</div>
        <div id="news">
        	<h3>news and rec. links</h3>
        	<hr/>
        	<span id="UserList"></span>
        </div>         
        <div id="footer" >footer links</div>
    </div>
  
    
</body>
</html>
