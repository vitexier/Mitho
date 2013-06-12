<?php 
  include("function.php"); 
  auth();
?>

<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" itemscope itemtype="http://schema.org/Product"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/b/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Page d'aministration</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <meta name="author" content="">

  <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

  <!-- We highly recommend you use SASS and write your custom styles in sass/_custom.scss.
       However, there is a blank style.css in the css directory should you prefer -->
  <link rel="stylesheet" href="../css/gumby.css">
  <link rel="stylesheet" href="../css/styleadmin.css">
</head>

<body>

<div class="navbar" id="nav1" gumby-fixed="top" gumby-end="500">
    <div class="row">
      <a class="toggle" gumby-trigger=".navbar > .row > ul" href="#"><i class="icon-menu"></i></a>
      <h3 class="four columns logo" style="font-family:titre !important; color : white">Administration</h3>
      <ul class="eight columns">
        <li><a href="?page=acceuil">Tableau de bord</a></li>
        <li><a href="?page=contenu" >Contenus</a></li>
        <li><a href="?page=utilisateurs" >Utilisateurs</a></li>
        <li><a href="?page=serveur">Serveur</a></li>
      </ul>
    </div>
  </div>

    
    <div class="container">
      <div class="row">
        <?php pageAdmin(); ?>
      </div>
    </div>

  <footer id="footer">
    <a href="?page=logout">Déconnexion</a><br>
      Copyright &copy; 2013
  </footer>
  <!-- JavaScript at the bottom for fast page loading -->
  <script src="../js/libs/modernizr-2.6.2.min.js"></script>
  <script src="../js/libs/jquery-1.8.3.min.js"></script>


  <script src="../js/libs/gumby.min.js"></script>
  <script src="../js/plugins.js"></script>
  <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
  <script src="../js/main.js"></script>


  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

  </body>
</html>