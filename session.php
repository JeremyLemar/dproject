<?php 
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';

sec_session_start(); 
if(login_check($mysqli) == true) { ?>
        Welcome <?php echo htmlentities($_SESSION['username']); ?>!
        <br/>This is an example protected page.  To access this page, users
                must be logged in. 
	<br/>Return to <a href="index.php">login page</a>
<?php
	if(isset($_SESSION['views']))   $_SESSION['views'] = $_SESSION['views']+1;
	else $_SESSION['views'] = 1;

} else { 
        echo 'You are not authorized to access this page, please login.';
}

?>