<?php 
/**

    Ce fichier permet de récupérer des élements XML depuis la base de données XEDIX ROXOR du Poney.
    En foonction du contenu de la variable id de type GET on redirige vers la méthode à appliquer. 

*/

/**

Méthode qui récupère tous les élements publiés
renvoit un arbre XML contenant tous les contenus publiés. 

*/
function getAllPublished(){
    // C'est peut être complètement faux mais j'essaie
    //header("Content-Type:text/xml");
    //echo file_get_contents("http://82.234.92.81:5225/cgi-bin/client?X2xsearch+7+login=Robin&pwd=854895+search="(id,titre,auteur,dateDerniereModif,etat,refSmf)<DANS>Conte"&display=XML); //on inteprete coté client l'écho comme un retour normal. 
    // Je veux récupérer l'id l'auteur...
}


/**
    Méthode d'authentification qui set l'id de session
*/
function auth(){
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
    


}


if(!isset($_GET['id'])){
    echo "stop";
}else {
    switch ($_GET['id']) {
        case 1:
            echo auth();
            break;
        case 2:
            echo getAllPublished();
            break;
      
        /*case 3:
            echo autre();
            break; etc ....*/ 
    }



    
}





?> 