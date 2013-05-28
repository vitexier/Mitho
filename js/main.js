var xmlUsers;
var adminFilter=false;
var redactorsFilter = false;
var publishersFilter = false;

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
				    	console.log("erreur " + erreur);
				    },
				    error: function (error) {
				    	console.log("erreur");
				    }
				});
			}

			
		});

		$("#tabPublished").ready(function(){
			console.log("start request");
			/**


http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

			*/
			$.ajax( {
				    type: "GET",
				    url: "http://localhost/Mitho/admin/xedix.php?id=2",
				    dataType: "xml",
				    success : function(xml){
				    	console.log(xml);
				    	
				    	$(xml).find('Conte').each(function(){
                            var titre = $(this).find('titre').text();
                            var dep = $(this).find('lieu').find('departement').text();
                            var auteurNom = $(this).find('avis').find('personne').find('nom').text();
                            var auteurPrenom = $(this).find('avis').find('personne').find('prenom').text();
                            var jour = $(this).find('dateDerniereModif').attr('jourDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('moisDerniereModif') +"/"+$(this).find('dateDerniereModif').attr('anneeDerniereModif');

                            $("#tabPublished").append("<tr><td>"+titre+"</td><td>"+auteurNom+auteurPrenom+"</td><td>"+dep+"</td><td>"+jour+"</td><td></td></tr>");
    
                        });

                        $("#tabPublished").append("<tr ><td colspan='5' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");
   
				    },
				    error: function (error) {
				    	console.log("erreur");
				    }
			});
		});
$("#tabUsers").ready(function(){
			console.log("start request");
			/**


http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

			*/
			$.ajax( {
				    type: "GET",
				    url: "http://localhost/Mitho/admin/xedix.php?id=3",
				    dataType: "xml",
				    success : function(xml){
				    	xmlUsers = xml;
				    	console.log(xmlUsers);
				    	
				    	$(xmlUsers).find('personne').each(function(){
                            var nom = $(this).find('nom').text();
                            var prenom = $(this).find('prenom').text();
                            var adresse = $(this).find('adresse').text();
                            var email = $(this).find('email').text();
                            var role = $(this).find('role').text();
                            var action = "<i class='icon-pencil'></i><i class='icon-cancel'></i><i class='icon-check'></i>";

                            $("#tabUsers").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
    
                        });

                        $("#tabUsers").append("<tr ><td colspan='6' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

                         
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
	            var nom = $(this).find('nom').text();
	            var prenom = $(this).find('prenom').text();
	            var adresse = $(this).find('adresse').text();
	            var email = $(this).find('email').text();
	            var role = $(this).find('role').text();
	            var action = "<i class='icon-pencil'></i><i class='icon-cancel'></i><i class='icon-check'></i>";
	            if (role.indexOf("A") !== -1) {
	            	$("#tabUsersAdmins").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
	            };
	            

	        adminFilter = true;
	        });

	        $("#tabUsersAdmins").append("<tr ><td colspan='6' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

	    };                   

	});
	$("#redactors").click(function(){
		if (redactorsFilter=== false) {
			console.log("start filter");

			
			$(xmlUsers).find('personne').each(function(){
	            var nom = $(this).find('nom').text();
	            var prenom = $(this).find('prenom').text();
	            var adresse = $(this).find('adresse').text();
	            var email = $(this).find('email').text();
	            var role = $(this).find('role').text();
	            var action = "<i class='icon-pencil'></i><i class='icon-cancel'></i><i class='icon-check'></i>";
	            if (role.indexOf("R") !== -1) {
	            	$("#tabUsersRedactors").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
	            };
	            

	        redactorsFilter = true;
	        });

	        $("#tabUsersRedactors").append("<tr ><td colspan='6' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

	    };                   

	});
	$("#publishers").click(function(){
		if (publishersFilter=== false) {
			console.log("start filter");

			
			$(xmlUsers).find('personne').each(function(){
	            var nom = $(this).find('nom').text();
	            var prenom = $(this).find('prenom').text();
	            var adresse = $(this).find('adresse').text();
	            var email = $(this).find('email').text();
	            var role = $(this).find('role').text();
	            var action = "<i class='icon-pencil'></i><i class='icon-cancel'></i><i class='icon-check'></i>";
	            if (role.indexOf("P") !== -1) {
	            	$("#tabUsersPublishers").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+adresse+"</td><td>"+email+"</td><td>"+role+"</td></td><td>"+action+"</td></tr>");
	            };
	            

	        publishersFilter = true;
	        });

	        $("#tabUsersPublishers").append("<tr ><td colspan='6' align='center'><i class='icon-to-start'></i> 1/1 <i class='icon-to-end'></i></td>");

	    };                   

	});


});