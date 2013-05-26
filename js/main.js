

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

			if($("#login").val() === "" || $("#mdp").val() === ""){
				alert("vide");
			}else{
				$.ajax( {
				    type: "POST",
				    url: "../auth.php",
				    data: 'login='+$("#login").val()+"&mdp="+$("#mdp").val(),
				    dataType: "xml",
				    success : function(xml){
				    	console.log("fichier récupéré " + xml);
				    	location.reload(true);
				    },
				    error: console.log("erreur")
				});
			}

			
		});

	});