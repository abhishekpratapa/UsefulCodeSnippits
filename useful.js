//to center a particular object pass $([object refrence])
//to create a topBar a particular object pass $([object refrence])

$(document).ready(function(){
        function centerScreen(param){
				  	param.css("position", "absolute");
				  	param.css("top", (($(window).height()-param.height())/2));
				  	param.css("left", (($(window).width()-param.width())/2));
				}
				
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
  
        function topBar(param){
        	param.css("position", "fixed");
        	$("body").css("border", "0px");
        	$("body").css("margin", "0px");
        	param.css("top", "0px");
        	param.css("left", "0px");
        	param.css("width", "100%");
        }
});
