
$(function(){
	
	// drop down menu in Iphone/Ipad view	
	 $("#menu_icon_container").on("click", function(ev){		   
		$("#drop_down_menu").slideToggle('slow');
		$("#drop_down_menu").css({'fontSize':'30px','position':'fixed','z-Index':'999','border':'solid #687864 2px','backgroundColor':'#8FC1E3','border-radius':'10px','textAlign':'center','color':'white','width':'80%'});	  
	});
	
	//diplay fixed top menu after scroll in large view
	if(screen.width > 1000){
		$(window).scroll( function(){		
		$('#mainNav').show('slow');
	});}
	
});



