<?php

function pageAdmin(){
	
		if(!empty($_GET['page'])){

			switch ($_GET['page']) {
				case "acceuil" :
					include("acceuil/index.php");
					break;
				case "contenu" : 	
					include("contenu/index.php");
					break;
				case "serveur" :	
					include("serveur/index.php");
					break;
				case "utilisateurs" : 	
					include("utilisateurs/index.php");
					break;
				default: 
					include("404/index.php");
					break;	
			}	

		}else{
			include("acceuil/index.php");
		}	
}

/*function auth(){
	if($_SESSION['login'] == null ){
		header ('location: auth/index.php');
	}else if(!empty($_POST['login']){
		session_start();
		$_SESSION['login'] = $_POST['login'];
	}
	
}/*




?>