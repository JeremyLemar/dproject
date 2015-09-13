<?php 
	$title = $_POST['title'];
	$content = $_POST['content'];
	//echo $title;
	//echo $content;
	
	prog_db($title,$content);
	
	function prog_db(&$title,&$content)
	{
		$db_server = mysql_connect('127.0.0.1', 'testuser', 'test623');
		if (!$db_server) die("Unable to connect to MySQL1: " . mysql_error());
		//else echo "successfully connected to server \n";
		
		mysql_select_db('chris2');
		$str = "INSERT INTO BlogEntries(title, content) Values(\"" . $title . "\",\"" . $content . "\");";
		$query = mysql_query($str, $db_server) or die(mysql_error()); 
		
		mysql_close($db_server);	
	}
	
	echo include 'page2.php';
?>