<?php 

error_reporting(E_ERROR | E_WARNING | E_PARSE);

ini_set('error_reporting', E_ALL);
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
    header("Content-Type:text/xml");
    //echo file_get_contents("http://82.234.92.81:5225/cgi-bin/client?X2xsearch+7+login=Robin&pwd=854895+search="(id,titre,auteur,dateDerniereModif,etat,refSmf)<DANS>Conte"&display=XML); //on inteprete coté client l'écho comme un retour normal. 
    echo file_get_contents("http://localhost/Mitho/admin/contes.xml");
    // Je veux récupérer l'id l'auteur...
}


/**
    Méthode d'authentification qui set l'id de session
*/
function auth(){
    $mdp = "";
    $login = "";

    if( !empty( $_GET['login'] ) ){  
 
        $login = $_GET['login'];
 
    } 

    if( !empty( $_GET['mdp'] ) ){  
 
        $mdp = $_GET['mdp'];
 
    } 

    //header("Content-Type:text/xml");
    //echo "http://82.234.92.81:5225/cgi-bin/client?X2Admin+13++login=".$login."&pwd=".$mdp."<BR>";
    $return = file_get_contents("http://82.234.92.81:5225/cgi-bin/client?X2Admin+13++login=".$login."&pwd=".$mdp);
    //echo $return;
    $dom = new DomDocument();
    $dom->loadXML($return);
    $erreur = $dom->getElementsByTagName('erreur');
    foreach($erreur as $e){
        $result = $e->nodeValue;
    }
    //echo sizeof($e) . $e;
    //echo sizeof($result) . $result;

    if(sizeof($result) > 0){
        
        echo "<erreur>".$result."</erreur>";
    }else {

        
        echo $return;
        session_start();
        $session = $dom->getElementsByTagName('clefsession');
        foreach($session as $i){
            $idSession = $i->nodeValue;
        }


        
        //echo $idSession;
        $_SESSION['idSession'] = $idSession;
        //echo $_SESSION['idSession'];
        header ('location: http://localhost/Mitho/admin/');
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