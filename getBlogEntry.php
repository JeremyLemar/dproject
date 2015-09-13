<?php 
	$id = $_GET['id'];

	prog_db($id);
	
	function prog_db($blogId)
	{
		$db_server = mysql_connect('127.0.0.1', 'testuser', 'test623');
		if (!$db_server) die("Unable to connect to MySQL1: " . mysql_error());
		//else echo "successfully connected to server \n";
		
		mysql_select_db('chris2');
		$str = "SELECT content FROM BlogEntries where EntryId=" . $blogId . ";"; 
		$query = mysql_query($str, $db_server) or die(mysql_error()); 
		
		$rows = TRUE;
		do {
			$rows = mysql_fetch_assoc($query); 
			print $rows['content'];
			//print_r($rows);  
		} while ($rows);		
	}
?>