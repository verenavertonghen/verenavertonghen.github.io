$(document).ready(function(){

	function moveRight(){
    	$("#data").animate({left: "+=960"}, 6000,moveLeft)
	}

	function moveLeft(){
	    $("#data").animate({left: "-=960"}, 6000,moveRight)
	}	

	$("#data").click(moveRight);
});