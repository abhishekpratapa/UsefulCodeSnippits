//to center a particular object pass $([object refrence])
//to create a topBar a particular object pass $([object refrence])

$(document).ready(function(){
	//center something on the screen
        function centerScreen(param){
		param.css("position", "absolute");
		param.css("top", (($(window).height()-param.height())/2));
		param.css("left", (($(window).width()-param.width())/2));
	}
		
	//to get the optimum size for a logo use this function		
	function optimumLogoSize(param, scaleFactor){
		var width = $(window).height();
		var height = $(window).width();
		var paramwid = param.width();
		var paramhei = param.height();
		var scale = 0;
		if(width > height)
		{
			scale = (height*scaleFactor);
			if(paramwid > paramhei)
			{
				param.css("width", "auto");
				param.css("height", parseInt(scale*(paramhei/paramwid)));
			}else{
				param.css("width", scale);
				param.css("height", "auto");
			}
		}else
		{
			scale = (width*scaleFactor);
			if(paramwid > paramhei)
			{
				param.css("width", scale);
				param.css("height", "auto");
			}else{
				param.css("width", "auto");
				param.css("height", parseInt(scale*(paramwid/paramhei)));
			}
		}
					
	}
  	
  	//designing the css for a top bar
        function topBar(param){
        	param.css("position", "fixed");
        	$("body").css("border", "0px");
        	$("body").css("margin", "0px");
        	param.css("top", "0px");
        	param.css("left", "0px");
        	param.css("width", "100%");
        }
        
        //the optimum size for the background of the image
        function optimalSizeImageBackground(param){
	  	$(param).css("position", "absolute");
	    	var width = $(window).width();
	    	var height =  $(window).height();
	    	var widthimage = $(param).width();
	    	var heightimage = $(param).height();
	    	if((width/height) > (widthimage/heightimage)) {
	    		$(param).css("width", width);
	    		$(param).css("height", "auto");
	    		$(param).css("top", -1*(($(param).height()-height)/2));
	    	}else{
	    		$(param).css("height", height);
	    		$(param).css("width", "auto");
	    		$(param).css("left", -1*(($(param).width()-width)/2));
	    	}
	}
	
	//populate an array AJAX using a GET script
	function populateArr(urlSent, key, long, lat) {
	    	$.ajax({
			url: urlSent, //whatever thi wants
			type: "GET", 
			data: {api_key: key, longitude: long, latitude: lat}, 
			dataType: "text", 
			success: function(response){ 
				//what you want
			}
	   	});
	}
	//*******************************START OF AI ALGOTITHIM********************************************//
	
	
});
