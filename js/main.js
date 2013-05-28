

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
			/**


http://pckult.developpez.com/tutoriels/javascript/frameworks/jquery/lecture-fichier-xml/

			*/
			$.ajax( {
				    type: "GET",
				    url: "http://localhost/Mitho/admin/xedix.php?id=2",
				    dataType: "xml",
				    success : function(xml){
				    	//console.log(xml);
				    	
				    	$(this).find('Conte').each(function(){
                            var titre = $(this).find('titre').text();
                            var dep = $(this).find('lieu').find('departement').text();
 							console.log(titre);
 							console.log(dep);
                        });
                         
				    },
				    error: function (error) {
				    	console.log("erreur");
				    }
			});
		});

	});