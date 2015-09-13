<?php include 'session.php' ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
	<link rel="stylesheet" type="text/css" href="common.css"/>
    <style type="text/css"></style>
    <title>The D Project</title>
    <script type="text/javascript">
    	function getBlogEntry(EntryId) 
    	{
    		var xmlhttp;		 
			if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			}
			else {// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
		
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					//var xml = xmlhttp.responseXML;
					var content = xmlhttp.responseText;
					
					//x = xml.documentElement.getElementsByTagName("Entry");   		
					//var content = x[0].getElementsByTagName("content")[0].firstChild.nodeValue;
				     
				    var stringoutput = "<h3>Title</h3><p>" + content + "</p>";
					document.getElementById('output').innerHTML = stringoutput;
					
					hideCompose();
					showOutput();
				}
			}
			
			url = "getBlogEntry.php?&id=" + EntryId.toString();
			//alert(url);

			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}    	
		
		function toggleCompose()
		{
			var divCompose = document.getElementById("write");
			var divOutput = document.getElementById("output");
			
			if (divCompose.style.display == 'none') {
				divCompose.style.display = 'block';
				divOutput.style.display = 'none';
				}
			else
				divCompose.style.display = 'none';
		}
		
		function hideCompose() {
			var divCompose = document.getElementById("write");
			divCompose.style.display = 'none';
		}
		
		function showOutput() {
			var divOutput = document.getElementById("output");
			divOutput.style.display = 'block';
		}
		
    </script>
</head>
<body>
 
    <?php include 'nav.php'?>

    <div id="container" >
        <div id="masthead" >
            <h3>My blog page</h3>
         </div>
            
        <div id="links" >
        	<div id="linklist">
        		<?php
					$db_server = mysql_connect('127.0.0.1', 'testuser', 'test623');
					if (!$db_server) die("Unable to connect to MySQL1: " . mysql_error());
					//else echo "successfully connected to server \n";
					
					mysql_select_db('chris2');
					$str = "SELECT * FROM blogEntries order by EntryId"; 
					$query = mysql_query($str, $db_server) or die(mysql_error()); 
					
					$rows = TRUE;
					do {
						$rows = mysql_fetch_assoc($query); 
						
						print "<a href='javascript:getBlogEntry(" . $rows['EntryId'] . ")' >";
						print($rows['title']);  
						print("</a><br/>");
					} while ($rows);
					mysql_close($db_server);					
				?>
        	</div>
        </div>
        <div id="main" >
      		<div id="blogactions">
      			<button onclick="toggleCompose()">Compose</button>	
      		</div>
      		
      		<div id="write" style="display:block" >
      			<form action="publishBlog.php" method="post" enctype="multipart/form-data">
					<input type="submit" value="Publish">
					<span>Title:</span>
					<input type="text" name="title">
					<textarea id="compose" name="content" rows="20" cols="54"></textarea>
				</form>
      		</div>
        	<div id="output"></div>
      	</div>
        <div id="news">
        	<h3>news and rec. links</h3>
        </div>         
        <div id="footer" >footer links</div>
    </div>  
    
</body>
</html>
