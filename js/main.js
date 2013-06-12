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
			console.log("http://localhost/Mitho/admin/xedix.php?id=1&login="+$('#login').val()+"&mdp="+$('#mdp').val());
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

		$("#tabUsers").ready(function(){
			
			/**


http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

			*/
			$.ajax( {
				    type: "GET",
				    url: "http://localhost/Mitho/admin/xedix.php?id=3",
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
                            var action = "</i><i class='icon-cancel'></i><i class='icon-check'></i>";

                            $("#tabUsers").append("<tr><td>"+pseudo+"</td><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
    
                        });

                        $("#tabUsers").append("<tr ><td colspan='7' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

                         
				    },
				    error: function (error) {
				    	console.log("erreur");
				    }
			});
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
			console.log("start filter");

			
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
			console.log("start filter");

			
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
				    url: "http://localhost/Mitho/admin/xedix.php?id=4",
				    dataType: "xml",
				    success : function(xml){
				    	//console.log(xml);
				    	
				    	$(xml).find('Conte').each(function(){
				    		var id = $(this).find('id').text();
				    		if(id === idConte){

	                            var titre = $(this).find('titre').text();
	                            var refSmf = $(this).find('refSmf').text();
	                            
	                            var dep = $(this).find('lieu').find('departement').text();
	                            var auteurNom = $(this).find('avis').find('personne').find('nom').text();
	                            var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
	                            var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');
	                            $("#titreConte").attr("value", titre);
	                            $("#refSmfConte").attr("value", refSmf);
	                            $("#dateDernierModifConte").append("<span>"+jour+"</span>");

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
				    url: "http://localhost/Mitho/admin/xedix.php?id=2",
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
                            var action = "<i class='icon-cancel'></i><i class='icon-check'></i></i>";

                            $("#tabNotPublished").append("<tr onclick='displayContent(\"" +id+ "\");' id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
    
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
                var action = "<i class='icon-cancel'></i><i class='icon-check'></i>";


                if(etatXml===etat.REDACTION){
                	$("#tabRedaction").append("<tr onclick='displayContent(\"" +id+ "\");' id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
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
				var action = "i class='icon-cancel'></i><i class='icon-check'></i>";

                if(etatXml===etat.MODERATION){
                	$("#tabModeration").append("<tr onclick='displayContent(\"" +id+ "\");' id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
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
                var action = "</i><i class='icon-cancel'></i>";

                if(etatXml===etat.PUBLISHED){
                	$("#tabPublished").append("<tr onclick='displayContent(\"" +id+ "\");' id='"+id+"'><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td>"+action+"</td></tr>");
                }
            	});

            	$("#tabPublished").append("<tr ><td colspan='5' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");
			}




		});




});