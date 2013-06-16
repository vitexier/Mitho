var xmlUsers;
var adminFilter=false;
var redactorsFilter = false;
var publishersFilter = false;
var xmlContents;
var redactionClick = 0;
var moderationClick = 0;
var publishClick = 0;


var etat = {
		NOTPUBLISH : "NP",
		PUBLISHED : "P",
		MODERATION : "M",
		REDACTION : "R"
}

function displayContent(id){

	window.location = "?page=editContenu&id="+id;
}

function displayUser(pseudo){

	window.location = "?page=editUtilisateur&pseudo="+pseudo;
}

	 
/**
 * Fonction de récupération des paramètres GET de la page
 * @return Array Tableau associatif contenant les paramètres GET
 */

function getParamValue(param,url){
	var u = url == undefined ? document.location.href : url;
	var reg = new RegExp('(\\?|&|^)'+param+'=(.*?)(&|$)');
	matches = u.match(reg);
	if(matches !== null ){
		return matches[2] != undefined ? decodeURIComponent(matches[2]).replace(/\+/g,' ') : '';
	}
	return "";
}





function showDelete(idBalise){
	//Cancel the link behavior

	//Get the A tag
	var id = "#dialog";
	$("#deleteButton").attr('href', idBalise);

	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//Set heigth and width to mask to fill up the whole screen
	$('#mask').css({'width':maskWidth,'height':maskHeight});

	//transition effect		
	$('#mask').fadeIn(1000);	
	$('#mask').fadeTo("slow",0.8);	

	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();

	//Set the popup window to center
	$(id).css('top',  winH/2-$(id).height()/2);
	$(id).css('left', winW/2-$(id).width()/2);

	//transition effect
	$(id).fadeIn(2000); 

}

//if close button is clicked
$('.close').click(function (e) {
	//Cancel the link behavior
	e.preventDefault();

	$('#mask').hide();
	$('.window1').hide();
});		

//if mask is clicked
$('#mask').click(function () {
	$(this).hide();
	$('.window1').hide();
});			

$(window).resize(function () {

	var box = $('#boxes .window1');

	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//Set height and width to mask to fill up the whole screen
	$('#mask').css({'width':maskWidth,'height':maskHeight});

	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();

	//Set the popup window to center
	box.css('top',  winH/2 - box.height()/2);
	box.css('left', winW/2 - box.width()/2);

});

	$("#addStithEn").click(function(){
		$("#ulStithEn").prepend("<li><input class='input textarea' type='text' placeholder='Stith Anglais'/></li>");
	});

	$("#addStithFr").click(function(){
		$("#ulStithFr").prepend("<li><input class='input textarea' type='text' placeholder='Stith Français'/></li>");
	});


	$("#addBiblio").click(function(){
		$("#ulBiblio").prepend("<li>Nom Auteur : <input class='input textarea'  type='text' placeholder='Nom' > Prénom auteur : <input class='input textarea' type='text' placeholder='Prénom' >Date :<input class='input textarea' type='text' placeholder='date bibliographie'></li>");
	});

	$("#addAvis").click(function(){
		$("#ulAvis").prepend("<li><input class='input textarea' type='text' placeholder='Texte'></li>");
	});

	$("#addImage").click(function(){
		$("#divImages").prepend("<input class='input textarea' type='text' placeholder='Description'><a class='srcImage' >Source image</a><br/>");

	});

	$("#addVideo").click(function(){
		$("#divVideos").prepend("<input class='input textarea' type='text' placeholder='Description'><a class='srcImage' >Source image</a><br/>");
	});


$("#editContent").ready(function(){
	$("#detailAdresse").toggle();
	$("#images").toggle();
	$("#medias").toggle();		


	$("#openAdresse").click(function(){
		$("#detailAdresse").toggle();
	});

	$("#openImages").click(function(){
		$("#images").toggle();

	});

	$("#openMedias").click(function(){
		$("#medias").toggle();

	});
	$("#createContent").click(function(){
		window.location = "?page=editContenu";

	});

	$("#createUser").click(function(){
		window.location = "?page=editContenu";

	});

	$("#createUser").click(function(){
		window.location = "?page=editUtilisateur";

	});

	$("#closeNotice").click(function (event){
		$("#notice").fadeOut("slow");
	});

	$("#auth_button").click(function(){
		//console.log("/Mitho/admin/xedix.php?id=1&login="+$('#login').val()+"&mdp="+$('#mdp').val());
		if($("#login").val() === "" || $("#mdp").val() === ""){
			alert("vide");
		}else{
			$.ajax( {
				type: "GET",
				url: "http://localhost/Mitho/admin/xedix.php?id=1&login="+$('#login').val()+"&mdp="+$('#mdp').val(),
				dataType: "xml",
				success : function(xml){
					console.log("sucess");

					var erreur = $(xml).find('erreur').text();
					window.location = "http://localhost/Mitho/admin/"

				},
				error: function (error) {
					console.log("erreur");
				}
			});
		}


	});

	$("#deleteButton").click(function(){
		$("#"+$("#deleteButton").attr("href")).remove();
		$('#mask').hide();
		$('.window1').hide();
	});

	$("#annulerDeleteButton").click(function(){
		$('#mask').hide();
		$('.window1').hide();
	});

	$("#tabUsers").ready(function(){

		/**


http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

		 */
		$.ajax( {
			type: "GET",
			url: "/Mitho/admin/xedix.php?id=3",
			dataType: "xml",
			success : function(xml){
				xmlUsers = xml;


				$(xmlUsers).find('personne').each(function(){
					var pseudo = $(this).find('pseudo').text();
					var nom = $(this).find('nom').text();
					var prenom = $(this).find('prenom').text();
					var adresse = $(this).find('codePostale').text();
					var email = $(this).find('email').text();
					var role = $(this).find('role').text();
					var action = "<i class='icon-cancel'></i><i class='icon-check'></i><i class='icon-pencil' onclick='displayUser(\"" +pseudo+ "\");'></i>";

					$("#tabUsers").append("<tr><td>"+pseudo+"</td><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td width='110'>"+action+"</td></tr>");

				});

				$("#tabUsers").append("<tr ><td colspan='7' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");


			},
			error: function (error) {
				console.log("erreur");
			}
		});
	});
	
	$("#editUser").ready(function(){
		var pseudoP = getParamValue("pseudo",document.location.href);
		if(pseudoP !== ""){
			$.ajax( {
				type: "GET",
				url: "/Mitho/admin/xedix.php?id=3",
				dataType: "xml",
				success : function(xml){
					//console.log(xml);

					$(xml).find('personne').each(function(){
						var pseudo = $(this).find('pseudo').text();
						if(pseudo === pseudoP){
							var prenom = $(this).find('prenom').text();
							var nom = $(this).find('nom').text();
							var mail = $(this).find('email').text();
							var cp = $(this).find('codePostale').text();
							var role = $(this).find('role').text();
							$("#pseudo").attr("value", pseudo);
							$("#prenom").attr("value", prenom);
							$("#nom").attr("value", nom);
							$("#mail").attr("value", mail);
							$("#codePostal").attr("value", cp);
							$("#role").attr("value", role);								
						}
					});
				},
				error: function (error) {
					console.log("erreur");
				}
			});
		}

	});
	
	$("#admins").click(function(){
		if (adminFilter=== false) {
			console.log("start filter");


			$(xmlUsers).find('personne').each(function(){
				var pseudo = $(this).find('pseudo').text();
				var nom = $(this).find('nom').text();
				var prenom = $(this).find('prenom').text();
				var adresse = $(this).find('codePostale').text();
				var email = $(this).find('email').text();
				var role = $(this).find('role').text();
				var action = "<i class='icon-cancel'></i><i class='icon-check'></i>";
				if (role.indexOf("A") !== -1) {
					$("#tabUsersAdmins").append("<tr><td>"+pseudo+"</td><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
				};


				adminFilter = true;
			});

			$("#tabUsersAdmins").append("<tr ><td colspan='7' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

		};                   

	});
	$("#redactors").click(function(){
		if (redactorsFilter=== false) {
			//console.log("start filter");


			$(xmlUsers).find('personne').each(function(){
				var pseudo = $(this).find('pseudo').text();
				var nom = $(this).find('nom').text();
				var prenom = $(this).find('prenom').text();
				var adresse = $(this).find('codePostale').text();
				var email = $(this).find('email').text();
				var role = $(this).find('role').text();
				var action = "<i class='icon-cancel'></i><i class='icon-check'></i>";
				if (role.indexOf("R") !== -1) {
					$("#tabUsersRedactors").append("<tr><td>"+pseudo+"</td><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
				};

				redactorsFilter = true;
			});

			$("#tabUsersRedactors").append("<tr ><td colspan='7' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

		};                   

	});
	$("#publishers").click(function(){
		if (publishersFilter=== false) {
			//console.log("start filter");


			$(xmlUsers).find('personne').each(function(){
				var pseudo = $(this).find('pseudo').text();
				var nom = $(this).find('nom').text();
				var prenom = $(this).find('prenom').text();
				var adresse = $(this).find('codePostale').text();
				var email = $(this).find('email').text();
				var role = $(this).find('role').text();
				var action = "<i class='icon-cancel'></i><i class='icon-check'></i>";
				if (role.indexOf("P") !== -1) {
					$("#tabUsersPublishers").append("<tr><td>"+pseudo+"</td><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
				};


				publishersFilter = true;
			});

			$("#tabUsersPublishers").append("<tr ><td colspan='7' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

		};                   

	});


	$("#editContent").ready(function(){
		var idConte = getParamValue("id",document.location.href);
		if(idConte !== ""){
			$.ajax( {
				type: "GET",
				url: "/Mitho/admin/xedix.php?id=4",
				dataType: "xml",
				success : function(xml){
					//console.log(xml);

					$(xml).find('Conte').each(function(){
						var id = $(this).find('id').text();
						if(id === idConte){

							var titre = $(this).find('titre').text();
							var refSmf = $(this).find('refSmf').text();
							var resume = $(this).find('resume').text();
							var dep = $(this).find('lieu').find('departement').text();
							var auteurNom = $(this).find('avis').find('personne').find('nom').text();
							var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
							var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');
							var dateCollectage = $(this).find('collectage').find('dateCollectage').attr('anneeCollectage');                            
							var conteType =  $(this).find('refConteType').text();
							var avisNote = $(this).find('avis').find('note').text();
							var avisAuteur = $(this).find('avis').find('personne').find('nom').text() + " " + $(this).find('avis').find('personne').find('prenom').text();
							var stithFr = $(this).find('refStith').find('code').text();
							var stithEn = $(this).find('refStith').find('libAnglais').text();

							var biblioNom = $(this).find('collectage').find('refBiblio').find('nomBiblio').text();
							var biblioAuteur = $(this).find('collectage').find('refBiblio').find('auteursBiblio').find('personne').text();


							$("#titreConte").attr("value", titre);
							$("#refSmfConte").attr("value", refSmf);
							$("#dateDernierModifConte").append("<span>"+jour+"</span>");
							$("#resumeConte").attr("value", resume);
							$("#dateCollectageConte").attr("value", dateCollectage);



							if(conteType !== ""){
								$("#conteTypeConte").attr("value", conteType);
								$('#checkBoxConteType').attr('checked', true);
							}

							if(avisNote !== ""){
								$("#ulAvis").prepend("<li>"+avisAuteur+"<input class='input textarea' id='text1' type='text' placeholder='auteur 1' value=\""+avisNote+"\"/></li>");
							}

							if(stithFr !== ""){
								$("#ulStithFr").prepend("<li><input class='input textarea' id='text1' type='text' placeholder='auteur 1' value=\""+stithFr+"\"/></li>");
							}

							if(stithEn !== ""){
								$("#ulStithEn").prepend("<li><input class='input textarea' id='text1' type='text' placeholder='auteur 1' value=\""+stithEn+"\"/></li>");
							}

							if(biblioNom !== ""){
								$("#ulBiblio").prepend("<li>Nom auteur : <input class='input textarea' id='text1' type='text' placeholder='auteur 1' value=\""+biblioNom+"\"/> Prénom auteur :<input class='input textarea' id='text1' type='text' placeholder='auteur 1' value=\""+biblioAuteur+"\"/>Date :<input class='input textarea' id='text1' type='text' placeholder='date bibliographie'/></li>");
							}								

						}



					});

				},
				error: function (error) {
					console.log("erreur");
				}
			});
		}



	});

	$("#tabNotPublished").ready(function(){
		//console.log("start request");
		/**
				http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/
		 */
		$.ajax( {
			type: "GET",
			url: "/Mitho/admin/xedix.php?id=2",
			dataType: "xml",
			success : function(xml){
				//console.log(xml);
				xmlContents = xml;
				$(xmlContents).find('Conte').each(function(){
					var titre = $(this).find('titre').text();
					var id = $(this).find('id').text();
					var dep = $(this).find('lieu').find('departement').text();
					var auteurNom = $(this).find('avis').find('personne').find('nom').text();
					var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
					var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');
					var action = "<i class='icon-cancel' onclick='showDelete(\""+id+"\")'></i><i class='icon-check validate'></i><i class='icon-pencil' onclick='displayContent(\"" +id+ "\");'></i>";

					$("#tabNotPublished").append("<tr id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");

				});

				$("#tabNotPublished").append("<tr ><td colspan='5' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");


			},
			error: function (error) {
				console.log("erreur");
			}
		});
	});

	$("#inRedaction").click(function(){
		//console.log("redaction");
		redactionClick ++ ;
		/**
			http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/
		 */
		if(redactionClick === 1 ){
			$(xmlContents).find('Conte').each(function(){
				var titre = $(this).find('titre').text();
				var id = $(this).find('id').text();
				var dep = $(this).find('lieu').find('departement').text();
				var auteurNom = $(this).find('avis').find('personne').find('nom').text();
				var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
				var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');
				var etatXml = $(this).find('etat').text();
				var action = "<i class='icon-cancel' onclick='showDelete(\""+id+"\")'></i><i class='icon-check validate'></i><i class='icon-pencil' onclick='displayContent(\"" +id+ "\");'></i>";


				if(etatXml===etat.REDACTION){
					$("#tabRedaction").append("<tr id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
				}


			});

			$("#tabRedaction").append("<tr ><td colspan='5' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");
		}




	});

	$("#inModeration").click(function(){
		//console.log("redaction");
		moderationClick ++ ;
		/**


			http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

		 */
		if(moderationClick === 1 ){
			$(xmlContents).find('Conte').each(function(){
				var titre = $(this).find('titre').text();
				var id = $(this).find('id').text();
				var dep = $(this).find('lieu').find('departement').text();
				var auteurNom = $(this).find('avis').find('personne').find('nom').text();
				var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
				var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');
				var etatXml = $(this).find('etat').text();
				var action = "<i class='icon-cancel' onclick='showDelete(\""+id+"\")'></i><i class='icon-check validate'></i><i class='icon-pencil' onclick='displayContent(\"" +id+ "\");'></i>";

				if(etatXml===etat.MODERATION){
					$("#tabModeration").append("<tr id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
				}
			});

			$("#tabModeration").append("<tr ><td colspan='5' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");
		}




	});
	$("#inPublished").click(function(){
		//console.log("redaction");
		publishClick ++ ;
		/**

			http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

		 */
		if(publishClick === 1 ){
			$(xmlContents).find('Conte').each(function(){
				var titre = $(this).find('titre').text();
				var id = $(this).find('id').text();
				var dep = $(this).find('lieu').find('departement').text();
				var auteurNom = $(this).find('avis').find('personne').find('nom').text();
				var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
				var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');
				var etatXml = $(this).find('etat').text();
				var action = "<i class='icon-cancel' onclick='showDelete(\""+id+"\")'></i>";

				if(etatXml===etat.PUBLISHED){
					$("#tabPublished").append("<tr id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
				}
			});

			$("#tabPublished").append("<tr ><td colspan='5' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");
		}




	});



});

	function initialiser() {
	 	console.log("test");
		var latlng = new google.maps.LatLng(48.853, 2.35);
		//objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
		//de définir des options d'affichage de notre carte
		var options = {
		center: latlng,
		zoom: 2,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//constructeur de la carte qui prend en paramêtre le conteneur HTML
		//dans lequel la carte doit s'afficher et les options
		var carte = new google.maps.Map(document.getElementById("carte"), options);
		
		 /****************Nouveau code****************/
		 //création du marqueur
		 new google.maps.Marker({
		 position: new google.maps.LatLng(48.853, 2.35),
		 map: carte,
		 title: 'Hello World!'
		 });
		 
		 new google.maps.Marker({
		 position: new google.maps.LatLng(47, 2),
		 map: carte,
		 title: 'Hello World!'
		 });
		 /********************************************/
		}