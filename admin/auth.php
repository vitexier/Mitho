<?php 

	header("Content-Type:text/xml");
	echo file_get_contents("http://82.234.92.81:5225/cgi-bin/client?X2Admin+13++login=Robin&pwd=854895");
	session_start();

?>