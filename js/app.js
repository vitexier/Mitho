$(document).ready(function() {

	/* Tabs Activiation
	================================================== */
	var tabs = $('ul.tabs'),
	    tabsContent = $('ul.tabs-content');
	
	tabs.each(function(i) {
		//Get all tabs
		var tab = $(this).find('> li > a');
		tab.click(function(e) {
			
			//Get Location of tab's content
			var contentLocation = $(this).attr('href') + "Tab";
			
			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {
			
				e.preventDefault();
			
				//Make Tab Active
				tab.removeClass('active');
				$(this).addClass('active');
				
				//Show Tab Content
				$(contentLocation).show().siblings().hide();
				
			} 
		});
	}); 

	$("#closeNotice").click(function (event){
		$("#notice").fadeOut("slow");
	});

	
	
});

function authentification(){
		$.ajax( {
		            type: "GET",
		            url: "http://82.234.92.81:5225/cgi-bin/client?X2Admin+13++login=Robin&pwd=854895",
		            dataType: "text/xml",
		            
		        }
		      ).done(function( msg ) {
					console.log( "Data Saved: " + msg );
				});
	}


