<?php
session_start();
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
				case "editContenu" : 	
					include("editContenu/index.php");
					break;	
				case "editUtilisateur" : 	
					include("editUtilisateur/index.php");
					break;
				case "logout" : 	
					include("logout/index.php");
					break;				
				default: 
					include("404/index.php");
					break;	
			}	

		}else{
			include("acceuil/index.php");
		}	
}

function auth(){
	if(empty($_SESSION['idSession'])){
		header ('location: http://localhost/Mitho/admin/auth/index.php');
	}
	
}




?>