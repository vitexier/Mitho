<div id="editContent">
      <div class="row">

        <div class="six columns  ">
        <ul>
            <li class="field">
              <span class="bold">Code SMF : </span> &nbsp;<input class=" text input narrow" id="refSmfConte" type="text" placeholder="Code SMF" />
            </li>      
        </ul>
        </div>
        <div class="push_two columns ">
        <span class="bold">Dernière modification : </span><span id="dateDernierModifConte"></<span>
        </div>

      </div>    
      



<div class="sixteen colgrid"> 
  <form>
      <div class="row">
        <div class="ten columns">
          
        <ul>

            <li class="field">
              <span class="bold">Titre : </span> &nbsp;<input class=" text input narrow" id="titreConte" type="text" placeholder="Titre" />
            </li>              
            
        </ul>

          <div align="right" size="1" class="bordure">
          <ul>

              <li class="field">
                <span class="bold">Date de collectage : </span> &nbsp;<input class=" text input narrow" id="dateCollectageConte" type="text" placeholder="Date" />
              </li>              
              
          </ul>
            


          </div>
          <fieldset id="cadre-option" class="centered">
            <legend>Résumé</legend>
            <ul>

              <li class="field">
                <textarea class="input textarea" placeholder="Résumé" rows="4" id="resumeConte"></textarea>                       
              </li>              
              
            </ul> 
          </fieldset>
          <fieldset id="cadre-option" class="centered">
            <legend>Texte d'origine</legend>
            <ul>

              <li class="field">
                <textarea class="input textarea" placeholder="Texte d'origine" rows="4"></textarea>                       
              </li>              
              
            </ul> 
          </fieldset>
          <ul>
            <li class="default alert">Conte type : <input style="border: none" id="conteTypeConte" type="text" placeholder="..." /><input type="checkbox" name="conteType" id="checkBoxConteType" value="true"> </li>
          </ul>
          <fieldset id="cadre-option" class="centered">
              <legend>Code Stith (Anglais)</legend>
              <ul class="field" id="ulStithEn">
                <li><div class="pretty medium default btn icon-right icon-plus-circled centered"><a href="#">Ajouter</a></div></li>
                <!--<li><p>Code Stith 1 ,Code Stith 2 , Code Stith 3, Code Stith 4, Code Stith 5, Code Stith 5</p></li>-->
              </ul>
              
          </fieldset>
          <fieldset id="cadre-option" class="centered">
              <legend>Code Stith (français)</legend>
              <ul class="field" id="ulStithFr">
                <li><div class="pretty medium default btn icon-right icon-plus-circled centered"><a href="#">Ajouter</a></div></li>
                <!--<li><p>Code Stith 1 ,Code Stith 2 , Code Stith 3, Code Stith 4, Code Stith 5, Code Stith 5</p></li>-->
              </ul>
          </fieldset>
          <h5 class="lead bold ">Référence Bibliographique :</h5>
              <ul class="field" id="ulBiblio">
                <li><div class="pretty medium default btn icon-right icon-plus-circled centered"><a href="#">Ajouter</a></div></li>
                <!--<li><p>Code Stith 1 ,Code Stith 2 , Code Stith 3, Code Stith 4, Code Stith 5, Code Stith 5</p></li>-->
              </ul>
        </div>
        <div class="push_one  five columns">
          
          <br><div class="pretty medium default btn icon-right icon-camera centered "><a href="#">Ajouter image</a></div>
          <br><div class="pretty medium default btn icon-right icon-video centered"><a href="#">Ajouter media</a></div>
          <fieldset id="cadre-option" class="centered">
              <legend >Avis :</legend>
              <ul class="field" id="ulAvis">
                <li><div class="pretty medium default btn icon-right icon-plus-circled centered wide"><a href="#">Ajouter</a></div></li>
                <!-- <li><input class="input textarea" id="text1" type="text" placeholder="auteur 1" /></li> -->
              </ul>
          </fieldset>
          <fieldset id="cadre-option" class="centered">
              <legend>Localisation :</legend>
              <ul>

              <li class="field">
                <input class=" text input narrow" id="text1" type="text" placeholder="Long" />
                <input class=" text input narrow" id="text1" type="text" placeholder="Lat" />
                <br><br><div class="pretty medium default btn icon-right centered"><a href="#">Valider</a></div>
              </li>              
            
              </ul>
          </fieldset>
          <div id="div_carte"></div>
        
        </div>
        
      </div>
  
    
    <p class="btn danger medium">
        <a class="switch active" href="#">Annuler</a>
    </p>       
    <p class="btn primary medium">
        <a class="switch active" href="#">Envoyer</a>
    </p>     
 
  </form>
</div>
  <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
  <script type="text/javascript"> 


    google.maps.event.addDomListener( window, 'load', initCarte); 
  
    
  
  
  function initCarte(){ 

      var myLatlng = new google.maps.LatLng(  99.86963, 99.31659);
      var oMap = new google.maps.Map( document.getElementById( 'div_carte'),{ 
        'center' : myLatlng, 
        'zoom' : 14, 
        'mapTypeId' : google.maps.MapTypeId.ROADMAP 
        }); 
        
        var marker = new google.maps.Marker({      position: myLatlng,      map: oMap,      title:"Hello World!"  });
  } 
  </script>   

<br><br><br><br>

</div>