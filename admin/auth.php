<?php 
	$mdp = "";
	$login = "";

	if( !empty( $_POST['login'] ) ){  
 
		$login = $_POST['login'];
 
	} 

	if( !empty( $_POST['mdp'] ) ){  
 
		$mdp = $_POST['mdp'];
 
	} 

	header("Content-Type:text/xml");
	$return = file_get_contents("http://82.234.92.81:5225/cgi-bin/client?X2Admin+13++login=".$login."&pwd=".$mdp);
	//echo $return;
	$dom = new DomDocument();
	$dom->loadXML($return);
	$erreur = $dom->getElementsByTagName('erreur');
	foreach($erreur as $e){
		$result = $e->nodeValue . "<br />";
	}
    	

	if(!empty($result)){
		echo "<erreur>".$result."</erreur>";
	}else {
		echo $return;
		session_start();
		//$session = $dom->getElementsByTagName('id');
		/*foreach($session as $i){
			$idSession = $i->nodeValue . "<br />";
		}
		$_SESSION['idSession'] = $idSession;*/
	}
    


?>