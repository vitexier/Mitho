<?php include("../functions.php"); ?>
<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" itemscope itemtype="http://schema.org/Product"> <!--<![endif]-->
<head>

  <!-- General Metas -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">  <!-- Force Latest IE rendering engine -->
  <title>AUthentification</title>
  <meta name="description" content="">
  <meta name="author" content="">
  <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  
  <!-- Mobile Specific Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> 
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="../../css/base.css">
  <link rel="stylesheet" href="../../css/skeleton.css">
  <link rel="stylesheet" href="../../css/layout.css">
    <!-- JS  -->
  <script src="../../js/libs/jquery-1.8.3.min.js"></script>
  <script src="../../js/main.js"></script>
  
</head>
<body>


  <div class="container">
    <div class="form-bg">
      
        <h2>Authentification</h2>
        <p><input type="text" placeholder="Username"/></p>
        <p><input type="password" placeholder="Password"/></p>
        <label for="remember">
          <input type="checkbox" id="remember" value="remember" />
          <span>Se souvenir de moi</span>
        </label>
        <button id="auth_button" ></button>
      
    </div>

  
    <p class="forgot">Mot de passe oublié ? <a href="">Cliquez pour les réinitialiser.</a></p>


  </div><!-- container -->


  
<!-- End Document -->
</body>
</html>