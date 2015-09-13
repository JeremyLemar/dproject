<?php 
	//prog_db();
    //echo dodefault();
    echo prog_fibo();
	
	function prog_db()
	{
		$db_server = mysql_connect('127.0.0.1', 'testuser', 'test623');
		if (!$db_server) die("Unable to connect to MySQL1: " . mysql_error());
		else echo "successfully connected to server \n";
		
		mysql_select_db('chris2');
		$str = "SELECT * FROM Entries"; 
		$query = mysql_query($str, $db_server) or die(mysql_error()); 
		
		$rows = TRUE;
		do {
			$rows = mysql_fetch_assoc($query); 
			print_r($rows);  
		} while ($rows);
		
		mysql_close($db_server);
	}
	
    function dodefault()
	{
		return '<?xml version="1.0" encoding="ISO-8859-1"?><country>USA</country>';
	}
	
	function prog_factorial()
	{
		$k = 50;
		echo factorial($k);
	}
	
	function factorial(&$n)
	{
	    $j=1;
		for ($i=1; $i<$n; $i++)
		{
			$j=$j*$i;
		}
		return $j;
	}
	
		//$memoFibo;
	function prog_fibo()
	{
		//$memoFibo[0]=0;
		//$memoFibo[1]=1;
		//echo "memofibo " . $memoFibo[50] . " memofibo";
		$k = 70;
		$res = fibonacci($k);
		print "\r\n     ffffibo of " . $k . " \nis: ". $res;
	}
	

	
	function fibonacci($n)
	{
		static $memoFibo;
	    $memoFibo[0]=0;
		$memoFibo[1]=1;

		$result = 0;
		//if (array_key_exists($n, $memoFibo))
		if (isset($memoFibo[$n]))
			$result = $memoFibo[$n];
		else 
		{
			$result = fibonacci($n-1)+fibonacci($n-2);
			$memoFibo[$n] = $result;		
		}

		return $result;
	}
?>