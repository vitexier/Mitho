<?php

function page(){
	$path_parts = pathinfo($_SERVER['REQUEST_URI']);

	if($path_parts['basename'] == "admin"){
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

		}
	}else{
		if(empty($_GET['page'])){

		}else{
			include("../modules/acceuil/index.php");
		
		}
	}	
}




?>