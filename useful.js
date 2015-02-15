//to center a particular object pass $([object refrence])
//to create a topBar a particular object pass $([object refrence])

$(document).ready(function(){
  function centerScreen(param){
  	param.css("position", "absolute");
  	param.css("top", (($(window).height()-param.height();)/2));
  	param.css("top", (($(window).width()-param.width();)/2));
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
